"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Sparkles,
  Play,
  Layers,
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Flame,
  ChevronDown,
  ChevronUp,
  Brain,
  Filter,
  Info,
} from "lucide-react";
import { Deck, Flashcard, Rating, ReviewLog } from "../lib/types";
import { calculateNextReview } from "../lib/srs";
import { storage } from "../lib/storage";
import { sounds } from "../lib/sound";
import { getOptionBreakdown } from "../lib/distractorEngine";
import { DeckIcon } from "./DeckIcon";
import { FormattedText } from "./FormattedText";
import { CodeBlockView } from "./CodeBlockView";

interface RevisionHubProps {
  decks: Deck[];
  cards: Flashcard[];
  onStartStudy: (deck: Deck, mode: "srs" | "cram", customCards?: Flashcard[], title?: string) => void;
  onStartQuiz: (deck: Deck, customCards?: Flashcard[], title?: string) => void;
  onSwitchToQuiz: () => void;
}

type RemembranceBucket = "all" | "forgot" | "hard" | "good" | "easy";

interface AttemptedCardInfo {
  card: Flashcard;
  latestLog?: ReviewLog;
  bucket: "forgot" | "hard" | "good" | "easy";
  attemptCount: number;
}

export const RevisionHub: React.FC<RevisionHubProps> = ({
  decks,
  cards,
  onStartStudy,
  onStartQuiz,
  onSwitchToQuiz,
}) => {
  // State
  const [selectedBucket, setSelectedBucket] = useState<RemembranceBucket>("all");
  const [selectedDeckIds, setSelectedDeckIds] = useState<string[]>(() => decks.map((d) => d.id));
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCardIds, setExpandedCardIds] = useState<Set<string>>(new Set());

  // Index attempted cards from review logs & SRS metadata
  const attemptedCards = useMemo(() => {
    const logs = storage.getReviewLogs();

    // Group logs by cardId
    const logsByCard = new Map<string, ReviewLog[]>();
    logs.forEach((log) => {
      const existing = logsByCard.get(log.cardId) || [];
      existing.push(log);
      logsByCard.set(log.cardId, existing);
    });

    // Map each card to its attempt info
    const list: AttemptedCardInfo[] = [];

    cards.forEach((card) => {
      const cardLogs = logsByCard.get(card.id) || [];
      // Sort logs newest first
      cardLogs.sort((a, b) => b.timestamp - a.timestamp);
      const latestLog = cardLogs[0];

      const reps = card.srs.reps || 0;
      const lapses = card.srs.lapses || 0;
      const attemptCount = cardLogs.length || reps + lapses;
      const isAttempted =
        attemptCount > 0 ||
        card.srs.lastStudied !== null ||
        lapses > 0 ||
        card.srs.state !== "new";

      if (!isAttempted) return;

      // Determine remembrance bucket
      let bucket: "forgot" | "hard" | "good" | "easy" = "good";

      if (latestLog) {
        if (latestLog.rating === 1) bucket = "forgot";
        else if (latestLog.rating === 2) bucket = "hard";
        else if (latestLog.rating === 3) bucket = "good";
        else if (latestLog.rating === 4) bucket = "easy";
      } else {
        if (lapses > 0 && card.srs.interval === 0) {
          bucket = "forgot";
        } else if ((card.srs.easeFactor || 2.5) < 2.3) {
          bucket = "hard";
        } else if (card.srs.state === "mastered" || (card.srs.interval || 0) >= 6) {
          bucket = "easy";
        } else {
          bucket = "good";
        }
      }

      list.push({
        card,
        latestLog,
        bucket,
        attemptCount,
      });
    });

    return list;
  }, [cards]);

  // Counts per bucket
  const bucketCounts = useMemo(() => {
    const counts = { all: attemptedCards.length, forgot: 0, hard: 0, good: 0, easy: 0 };
    attemptedCards.forEach((item) => {
      counts[item.bucket]++;
    });
    return counts;
  }, [attemptedCards]);

  // Filtered attempted cards
  const filteredItems = useMemo(() => {
    return attemptedCards.filter((item) => {
      // Bucket filter
      if (selectedBucket !== "all" && item.bucket !== selectedBucket) {
        return false;
      }

      // Category filter
      if (selectedDeckIds.length > 0 && !selectedDeckIds.includes(item.card.deckId)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesPrompt = item.card.front.toLowerCase().includes(q);
        const matchesBack = item.card.back.toLowerCase().includes(q);
        const matchesCode = (item.card.codeSnippet || "").toLowerCase().includes(q);
        const matchesTags = item.card.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesPrompt && !matchesBack && !matchesCode && !matchesTags) return false;
      }

      return true;
    });
  }, [attemptedCards, selectedBucket, selectedDeckIds, searchQuery]);

  const toggleExpand = (cardId: string) => {
    sounds.playSelect();
    setExpandedCardIds((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) {
        next.delete(cardId);
      } else {
        next.add(cardId);
      }
      return next;
    });
  };

  // Quick In-place Re-rate
  const handleInPlaceRate = useCallback(
    (card: Flashcard, rating: Rating) => {
      sounds.playRate(rating);
      const srsUpdate = calculateNextReview(card, rating, Date.now());
      const updated: Flashcard = {
        ...card,
        srs: srsUpdate,
        updatedAt: Date.now(),
      };
      storage.saveCard(updated);
      storage.addReviewLog({
        id: `log-revision-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        cardId: card.id,
        deckId: card.deckId,
        timestamp: Date.now(),
        rating,
        timeSpentMs: 3000,
        intervalBefore: card.srs.interval,
        intervalAfter: srsUpdate.interval,
      });
    },
    []
  );

  // Launchers
  const handleDrillCards = () => {
    sounds.playSelect();
    if (filteredItems.length === 0) return;
    const cardsToStudy = filteredItems.map((item) => item.card);
    const fallbackDeck =
      decks.find((d) => selectedDeckIds.includes(d.id)) ||
      decks[0] || {
        id: "deck-revision",
        title: "Targeted Revision",
        description: "Filtered revision drill",
        icon: "🎯",
        color: "#111111",
        tags: ["Revision"],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

    const label =
      selectedBucket === "all"
        ? `Revision Drill (${cardsToStudy.length} cards)`
        : `${selectedBucket.toUpperCase()} Recall Drill (${cardsToStudy.length} cards)`;

    onStartStudy(fallbackDeck, "srs", cardsToStudy, label);
  };

  const handleRetestQuiz = () => {
    sounds.playSelect();
    if (filteredItems.length === 0) return;
    const cardsToQuiz = filteredItems.map((item) => item.card);
    const fallbackDeck =
      decks.find((d) => selectedDeckIds.includes(d.id)) ||
      decks[0] || {
        id: "deck-revision-quiz",
        title: "Targeted Revision Quiz",
        description: "Filtered revision quiz",
        icon: "🎯",
        color: "#111111",
        tags: ["Quiz"],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

    const label =
      selectedBucket === "all"
        ? `Targeted Revision Quiz (${cardsToQuiz.length} questions)`
        : `${selectedBucket.toUpperCase()} Retention Quiz (${cardsToQuiz.length} questions)`;

    onStartQuiz(fallbackDeck, cardsToQuiz, label);
  };

  // Zero Attempted State
  if (attemptedCards.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-100 dark:bg-zinc-850 text-amber-500 flex items-center justify-center mb-6 shadow-inner">
          <Brain className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
          No Attempted Questions Yet
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          As you practice in the <strong>Quiz Arena</strong> or study <strong>3D Flashcards</strong>, every question you encounter will automatically appear here grouped by how well you remembered it.
        </p>
        <button
          onClick={onSwitchToQuiz}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs cursor-pointer"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Start Your First Practice Quiz</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5">
            <RotateCcw className="w-7 h-7 text-amber-500" />
            <span>Revision & Recall Hub</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Drill and re-test attempted questions filtered by retention confidence and syllabus module.
          </p>
        </div>

        {/* Action Drill Launchers */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleDrillCards}
            disabled={filteredItems.length === 0}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 disabled:opacity-40 shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Drill in 3D Cards ({filteredItems.length})</span>
          </button>
          <button
            onClick={handleRetestQuiz}
            disabled={filteredItems.length === 0}
            className="px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2 disabled:opacity-40 shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-blue-500" />
            <span>Retest in Quiz ({filteredItems.length})</span>
          </button>
        </div>
      </div>

      {/* 1. Remembrance Confidence Filter Cards */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2.5">
          Filter by Retention Confidence
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {/* All Attempted */}
          <button
            type="button"
            onClick={() => {
              sounds.playSelect();
              setSelectedBucket("all");
            }}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              selectedBucket === "all"
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs"
                : "bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400"
            }`}
          >
            <div className="text-xl font-bold">{bucketCounts.all}</div>
            <div className="text-xs font-semibold mt-0.5">All Attempted</div>
            <div className={`text-[10px] mt-0.5 ${selectedBucket === "all" ? "text-zinc-300 dark:text-zinc-600" : "text-zinc-400"}`}>
              Full question pool
            </div>
          </button>

          {/* Forgot */}
          <button
            type="button"
            onClick={() => {
              sounds.playSelect();
              setSelectedBucket("forgot");
            }}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              selectedBucket === "forgot"
                ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                : "bg-white dark:bg-zinc-900 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900/60 hover:bg-rose-50/50 dark:hover:bg-rose-950/30"
            }`}
          >
            <div className="text-xl font-bold flex items-center justify-between">
              <span>{bucketCounts.forgot}</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            </div>
            <div className="text-xs font-semibold mt-0.5">Forgot (Lapsed)</div>
            <div className={`text-[10px] mt-0.5 ${selectedBucket === "forgot" ? "text-rose-100" : "text-rose-500/80"}`}>
              Urgent review queue
            </div>
          </button>

          {/* Hard */}
          <button
            type="button"
            onClick={() => {
              sounds.playSelect();
              setSelectedBucket("hard");
            }}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              selectedBucket === "hard"
                ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                : "bg-white dark:bg-zinc-900 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/60 hover:bg-amber-50/50 dark:hover:bg-amber-950/30"
            }`}
          >
            <div className="text-xl font-bold">{bucketCounts.hard}</div>
            <div className="text-xs font-semibold mt-0.5">Hard (Struggled)</div>
            <div className={`text-[10px] mt-0.5 ${selectedBucket === "hard" ? "text-amber-100" : "text-amber-500/80"}`}>
              Needs reinforcement
            </div>
          </button>

          {/* Good */}
          <button
            type="button"
            onClick={() => {
              sounds.playSelect();
              setSelectedBucket("good");
            }}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              selectedBucket === "good"
                ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                : "bg-white dark:bg-zinc-900 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900/60 hover:bg-blue-50/50 dark:hover:bg-blue-950/30"
            }`}
          >
            <div className="text-xl font-bold">{bucketCounts.good}</div>
            <div className="text-xs font-semibold mt-0.5">Good (Retained)</div>
            <div className={`text-[10px] mt-0.5 ${selectedBucket === "good" ? "text-blue-100" : "text-blue-500/80"}`}>
              Solid recall
            </div>
          </button>

          {/* Easy */}
          <button
            type="button"
            onClick={() => {
              sounds.playSelect();
              setSelectedBucket("easy");
            }}
            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
              selectedBucket === "easy"
                ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                : "bg-white dark:bg-zinc-900 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30"
            }`}
          >
            <div className="text-xl font-bold">{bucketCounts.easy}</div>
            <div className="text-xs font-semibold mt-0.5">Easy (Mastered)</div>
            <div className={`text-[10px] mt-0.5 ${selectedBucket === "easy" ? "text-emerald-100" : "text-emerald-500/80"}`}>
              Instant recall
            </div>
          </button>
        </div>
      </div>

      {/* 2. Category Module Multi-Select Filter */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Filter by Syllabus Module
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                sounds.playSelect();
                setSelectedDeckIds(decks.map((d) => d.id));
              }}
              className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors cursor-pointer"
            >
              Select All
            </button>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <button
              type="button"
              onClick={() => {
                sounds.playSelect();
                setSelectedDeckIds([]);
              }}
              className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors cursor-pointer"
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {decks.map((deck) => {
            const isSelected = selectedDeckIds.includes(deck.id);
            const countInDeck = attemptedCards.filter((item) => item.card.deckId === deck.id).length;

            return (
              <button
                key={deck.id}
                type="button"
                onClick={() => {
                  sounds.playSelect();
                  setSelectedDeckIds((prev) =>
                    isSelected ? prev.filter((id) => id !== deck.id) : [...prev, deck.id]
                  );
                }}
                className={`p-2.5 rounded-xl border text-xs text-left transition-all flex items-center justify-between gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-2xs font-semibold"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <DeckIcon deckId={deck.id} className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{deck.title.split(" ")[0]}</span>
                </div>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                  isSelected ? "bg-zinc-800 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-800" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                }`}>
                  {countInDeck}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Search & Summary Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within attempted questions, answers, or pseudocode..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-xs"
          />
        </div>

        <div className="text-xs font-mono text-zinc-400 shrink-0 self-end sm:self-center">
          Showing {filteredItems.length} of {attemptedCards.length} attempted questions
        </div>
      </div>

      {/* 4. Animated Questions List */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 text-sm">
            No questions match your current remembrance and category filters.
          </div>
        ) : (
          filteredItems.map(({ card, bucket, attemptCount }, index) => {
            const isExpanded = expandedCardIds.has(card.id);
            const deck = decks.find((d) => d.id === card.deckId);

            const bucketBadge = {
              forgot: {
                label: "Forgot (Lapsed)",
                badge: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900/60",
                dot: "bg-rose-500",
              },
              hard: {
                label: "Hard (Struggled)",
                badge: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/60",
                dot: "bg-amber-500",
              },
              good: {
                label: "Good (Retained)",
                badge: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900/60",
                dot: "bg-blue-500",
              },
              easy: {
                label: "Easy (Mastered)",
                badge: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60",
                dot: "bg-emerald-500",
              },
            }[bucket];

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-zinc-400 font-mono text-xs font-semibold">
                      #{index + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      <DeckIcon deckId={card.deckId} className="w-3.5 h-3.5" />
                      <span>{deck?.title || "Technical"}</span>
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${bucketBadge.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${bucketBadge.dot}`} />
                      <span>{bucketBadge.label}</span>
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {attemptCount} {attemptCount === 1 ? "attempt" : "attempts"}
                    </span>
                  </div>

                  {card.srs.interval > 0 && (
                    <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono">
                      <Clock className="w-3 h-3" />
                      <span>Interval: {card.srs.interval}d</span>
                    </div>
                  )}
                </div>

                {/* Prompt */}
                <div className="py-3 text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
                  <FormattedText text={card.front} />
                </div>

                {/* Optimized Pseudocode Box */}
                {card.codeSnippet && (
                  <div className="my-2 max-w-2xl">
                    <CodeBlockView
                      code={card.codeSnippet}
                      language={card.codeLanguage || "pseudocode"}
                      maxHeight="max-h-64"
                    />
                  </div>
                )}

                {/* Answer Reveal & Explanation Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleExpand(card.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Answer & Concepts" : "Show Correct Answer & Concepts"}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/70 space-y-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200"
                      >
                        <div className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Correct Answer:</span>
                        </div>
                        <div className="pl-5 leading-relaxed font-medium">
                          <FormattedText text={card.back} />
                        </div>

                        {card.explanation && (
                          <div className="mt-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-700/60 text-xs text-zinc-500 dark:text-zinc-400 italic pl-5 leading-relaxed">
                            <FormattedText text={card.explanation} />
                          </div>
                        )}

                        {/* Option Breakdown & Distractor Meanings */}
                        {card.mcqOptions && card.mcqOptions.length > 1 && (() => {
                          const breakdown = getOptionBreakdown(card.front, card.mcqOptions);
                          const meaningfulDistractors = breakdown.filter((b) => !b.isCorrect && b.meaning);
                          if (meaningfulDistractors.length === 0) return null;
                          return (
                            <div className="mt-3 pt-2.5 border-t border-zinc-200/60 dark:border-zinc-700/60">
                              <div className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mb-2">
                                <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                <span>Distractor Meanings & Roles:</span>
                              </div>
                              <div className="space-y-1.5">
                                {breakdown
                                  .filter((opt) => opt.isCorrect || opt.meaning)
                                  .map((opt) => (
                                    <div
                                      key={opt.id}
                                      className={`p-2.5 rounded-lg text-xs border leading-relaxed transition-all ${
                                        opt.isCorrect
                                          ? "bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50 text-emerald-950 dark:text-emerald-200"
                                          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                                      }`}
                                    >
                                      <div className="font-medium flex items-center justify-between gap-1">
                                        <span className="flex items-center gap-1.5">
                                          <span className="font-mono text-[10px] px-1 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800">
                                            [{opt.id}]
                                          </span>
                                          <span>{opt.text}</span>
                                        </span>
                                        {opt.isCorrect && (
                                          <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40">
                                            Correct
                                          </span>
                                        )}
                                      </div>
                                      {opt.meaning && (
                                        <div className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal pl-4">
                                          <FormattedText text={opt.meaning} />
                                        </div>
                                      )}
                                    </div>
                                  ))}
                              </div>
                            </div>
                          );
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom In-place Re-rate Bar */}
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-[11px] font-medium text-zinc-400">
                    Update your recall confidence:
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 sm:w-80">
                    <button
                      type="button"
                      onClick={() => handleInPlaceRate(card, 1)}
                      className={`px-2 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        bucket === "forgot"
                          ? "bg-rose-600 text-white border-rose-600 shadow-2xs"
                          : "border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                      }`}
                    >
                      Forgot
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInPlaceRate(card, 2)}
                      className={`px-2 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        bucket === "hard"
                          ? "bg-amber-600 text-white border-amber-600 shadow-2xs"
                          : "border-amber-200 dark:border-amber-900/60 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40"
                      }`}
                    >
                      Hard
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInPlaceRate(card, 3)}
                      className={`px-2 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        bucket === "good"
                          ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                          : "border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                      }`}
                    >
                      Good
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInPlaceRate(card, 4)}
                      className={`px-2 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                        bucket === "easy"
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-2xs"
                          : "border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                      }`}
                    >
                      Easy
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};
