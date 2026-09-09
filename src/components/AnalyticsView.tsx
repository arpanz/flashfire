'use client';

import React, { useMemo } from 'react';
import { Flame, CheckCircle, BarChart3, Calendar, Clock } from 'lucide-react';
import { DailyActivity, Flashcard, StudyStats } from '../lib/types';

interface AnalyticsViewProps {
  stats: StudyStats;
  cards: Flashcard[];
  activity: DailyActivity[];
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({ stats, cards, activity }) => {
  // Mastery counts
  const mastery = useMemo(() => {
    const counts = { new: 0, learning: 0, review: 0, mastered: 0 };
    cards.forEach((c) => {
      counts[c.srs.state] += 1;
    });
    return counts;
  }, [cards]);

  const totalCards = cards.length || 1;

  // 7-day due forecast
  const forecast = useMemo(() => {
    const days: { dayName: string; dateStr: string; dueCount: number }[] = [];
    const now = new Date();

    for (let i = 0; i < 7; i++) {
      const targetDate = new Date(now.getTime() + i * 24 * 3600 * 1000);
      const startOfDay = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()).getTime();
      const endOfDay = startOfDay + 24 * 3600 * 1000;

      const dueCount = cards.filter((c) => {
        if (i === 0) {
          // Today: already due or due today
          return c.srs.dueDate <= endOfDay;
        }
        return c.srs.dueDate > startOfDay && c.srs.dueDate <= endOfDay;
      }).length;

      const dayName = i === 0 ? 'Today' : targetDate.toLocaleDateString('en-US', { weekday: 'short' });
      const dateStr = targetDate.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });

      days.push({ dayName, dateStr, dueCount });
    }

    return days;
  }, [cards]);

  // Activity map
  const activityMap = useMemo(() => {
    const map: Record<string, number> = {};
    activity.forEach((a) => {
      map[a.date] = a.count;
    });
    return map;
  }, [activity]);

  // Generate 84 days (12 weeks of 7 days)
  const heatmapDays = useMemo(() => {
    const days: { dateStr: string; count: number }[] = [];
    const now = new Date();
    // 12 weeks = 84 days
    for (let i = 83; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 24 * 3600 * 1000);
      const iso = d.toISOString().split('T')[0];
      days.push({
        dateStr: iso,
        count: activityMap[iso] || 0,
      });
    }
    return days;
  }, [activityMap]);

  const getHeatmapColor = (count: number) => {
    if (count === 0) return 'bg-zinc-100 dark:bg-zinc-800/80';
    if (count < 5) return 'bg-emerald-200 dark:bg-emerald-950/80';
    if (count < 10) return 'bg-emerald-400 dark:bg-emerald-800';
    if (count < 20) return 'bg-emerald-500 dark:bg-emerald-600';
    return 'bg-emerald-600 dark:bg-emerald-500';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Analytics & Retention
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
          Monitor your active recall consistency, memory consolidation, and scheduled reviews.
        </p>
      </div>

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Streak */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Current Streak</span>
            <Flame className="w-5 h-5 text-amber-500 fill-amber-500/20" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {stats.currentStreak} <span className="text-base font-normal text-zinc-400">days</span>
          </div>
          <div className="text-xs text-zinc-500 mt-1">Best streak: {stats.longestStreak} days</div>
        </div>

        {/* Total Reviews */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Total Reviews</span>
            <BarChart3 className="w-5 h-5 text-zinc-400" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {stats.totalReviews}
          </div>
          <div className="text-xs text-zinc-500 mt-1">Across all decks</div>
        </div>

        {/* Mastered Cards */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Mastered Cards</span>
            <CheckCircle className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {mastery.mastered}
          </div>
          <div className="text-xs text-zinc-500 mt-1">
            {Math.round((mastery.mastered / totalCards) * 100)}% of total collection
          </div>
        </div>

        {/* Due Today */}
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Due Today</span>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {forecast[0]?.dueCount || 0}
          </div>
          <div className="text-xs text-zinc-500 mt-1">Ready for study</div>
        </div>
      </div>

      {/* GitHub-style Review Activity Heatmap */}
      <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-zinc-500" />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              Review Activity (Last 12 Weeks)
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <span>Less</span>
            <div className="w-3 h-3 rounded-xs bg-zinc-100 dark:bg-zinc-800" />
            <div className="w-3 h-3 rounded-xs bg-emerald-200 dark:bg-emerald-950" />
            <div className="w-3 h-3 rounded-xs bg-emerald-400 dark:bg-emerald-800" />
            <div className="w-3 h-3 rounded-xs bg-emerald-600 dark:bg-emerald-500" />
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="grid grid-flow-col grid-rows-7 gap-1.5 w-max">
            {heatmapDays.map((day) => (
              <div
                key={day.dateStr}
                title={`${day.dateStr}: ${day.count} reviews`}
                className={`w-3.5 h-3.5 rounded-xs transition-transform hover:scale-125 cursor-pointer ${getHeatmapColor(day.count)}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mastery Pipeline & 7-Day Forecast Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Memory Consolidation Stage */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Retention Stage Distribution
          </h3>

          {/* Bar */}
          <div className="w-full h-3 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex mb-6">
            <div
              style={{ width: `${(mastery.new / totalCards) * 100}%` }}
              className="h-full bg-zinc-400"
              title={`New: ${mastery.new}`}
            />
            <div
              style={{ width: `${(mastery.learning / totalCards) * 100}%` }}
              className="h-full bg-amber-400"
              title={`Learning: ${mastery.learning}`}
            />
            <div
              style={{ width: `${(mastery.review / totalCards) * 100}%` }}
              className="h-full bg-blue-500"
              title={`Reviewing: ${mastery.review}`}
            />
            <div
              style={{ width: `${(mastery.mastered / totalCards) * 100}%` }}
              className="h-full bg-emerald-500"
              title={`Mastered: ${mastery.mastered}`}
            />
          </div>

          {/* Legend Items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
              <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                <span>New</span>
              </div>
              <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {mastery.new}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Learning</span>
              </div>
              <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {mastery.learning}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
              <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Reviewing</span>
              </div>
              <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {mastery.review}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Mastered</span>
              </div>
              <div className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                {mastery.mastered}
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Due Forecast */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            7-Day Review Forecast
          </h3>

          <div className="grid grid-cols-7 gap-2 text-center">
            {forecast.map((f, i) => (
              <div
                key={f.dayName}
                className={`p-3 rounded-xl border flex flex-col justify-between h-32 ${
                  i === 0
                    ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                    : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200'
                }`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-wider opacity-80">
                  {f.dayName}
                </div>
                <div className="text-2xl font-bold my-auto">
                  {f.dueCount}
                </div>
                <div className="text-[10px] opacity-70">
                  {f.dateStr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
