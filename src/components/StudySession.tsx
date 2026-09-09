'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  RotateCcw,
  Gamepad2,
  ListOrdered,
  Layers,
  Award,
} from 'lucide-react';
import { Deck, Flashcard, Rating } from '../lib/types';
import { calculateNextReview, getIntervalPreview, getDueCards } from '../lib/srs';
import { storage } from '../lib/storage';
import { sounds } from '../lib/sound';
import { CardFlipper } from './CardFlipper';

interface StudySessionProps {
  deck: Deck;
  mode: 'srs' | 'cram';
  customCards?: Flashcard[];
  sessionTitle?: string;
  onBack: () => void;
  onSwitchToMatch: () => void;
  onSwitchToQuiz: () => void;
}

export const StudySession: React.FC<StudySessionProps> = ({
  deck,
  mode,
  customCards,
  sessionTitle,
  onBack,
  onSwitchToMatch,
  onSwitchToQuiz,
}) => {
  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [sessionStartTime] = useState<number>(Date.now());
  const [cardStartTime, setCardStartTime] = useState<number>(Date.now());

  // Session analytics tally
  const [ratedStats, setRatedStats] = useState({
    again: 0,
    hard: 0,
    good: 0,
    easy: 0,
  });
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // Initialize queue
  useEffect(() => {
    let initialQueue: Flashcard[] = [];
    if (customCards && customCards.length > 0) {
      initialQueue = [...customCards];
    } else {
      const allCards = storage.getCards().filter((c) => c.deckId === deck.id);
      if (mode === 'srs') {
        const due = getDueCards(allCards);
        initialQueue = due.length > 0 ? due : allCards; // If none due, study all
      } else {
        // Cram: shuffle all cards
        initialQueue = [...allCards].sort(() => Math.random() - 0.5);
      }
    }

    setQueue(initialQueue);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsComplete(initialQueue.length === 0);
  }, [deck.id, mode, customCards]);

  const currentCard = queue[currentIndex] || null;

  // Interval preview calculations for current card
  const intervalPreviews = useMemo(() => {
    if (!currentCard) return null;
    return getIntervalPreview(currentCard);
  }, [currentCard]);

  // Handle Card Rating
  const handleRate = useCallback(
    (rating: Rating) => {
      if (!currentCard) return;

      sounds.playRate(rating);
      const timeSpent = Date.now() - cardStartTime;

      // Update session counts
      setRatedStats((prev) => ({
        ...prev,
        again: rating === 1 ? prev.again + 1 : prev.again,
        hard: rating === 2 ? prev.hard + 1 : prev.hard,
        good: rating === 3 ? prev.good + 1 : prev.good,
        easy: rating === 4 ? prev.easy + 1 : prev.easy,
      }));

      if (mode === 'srs') {
        const srsUpdate = calculateNextReview(currentCard, rating);
        const updatedCard: Flashcard = {
          ...currentCard,
          srs: srsUpdate,
          updatedAt: Date.now(),
        };

        // Save card & review log
        storage.saveCard(updatedCard);
        storage.addReviewLog({
          id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          cardId: currentCard.id,
          deckId: deck.id,
          timestamp: Date.now(),
          rating,
          timeSpentMs: timeSpent,
          intervalBefore: currentCard.srs.interval,
          intervalAfter: srsUpdate.interval,
        });

        // If Again, re-queue to end of queue for immediate re-test
        if (rating === 1) {
          setQueue((prev) => [...prev, updatedCard]);
        }
      }

      // Next card transition
      if (currentIndex + 1 < queue.length) {
        setIsFlipped(false);
        setCurrentIndex((prev) => prev + 1);
        setCardStartTime(Date.now());
      } else {
        // Complete!
        setIsComplete(true);
        sounds.playSuccess();
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#111111', '#3b82f6', '#10b981', '#fb923c', '#8b5cf6'],
        });
      }
    },
    [currentCard, cardStartTime, mode, currentIndex, queue.length, deck.id]
  );

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        sounds.playFlip();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') {
          e.preventDefault();
          handleRate(1);
        } else if (e.key === '2') {
          e.preventDefault();
          handleRate(2);
        } else if (e.key === '3') {
          e.preventDefault();
          handleRate(3);
        } else if (e.key === '4') {
          e.preventDefault();
          handleRate(4);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, handleRate]);

  // Restart session
  const handleRestart = () => {
    const all = storage.getCards().filter((c) => c.deckId === deck.id);
    setQueue(mode === 'cram' ? [...all].sort(() => Math.random() - 0.5) : all);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsComplete(false);
    setRatedStats({ again: 0, hard: 0, good: 0, easy: 0 });
    setCardStartTime(Date.now());
  };

  // Completion Screen
  if (isComplete) {
    const totalRated = ratedStats.again + ratedStats.hard + ratedStats.good + ratedStats.easy;
    const accuracy = totalRated > 0 ? Math.round(((ratedStats.good + ratedStats.easy) / totalRated) * 100) : 100;
    const minutesSpent = Math.max(1, Math.round((Date.now() - sessionStartTime) / 60000));

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto py-12 px-4 text-center"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center mb-6 shadow-md">
          <Award className="w-8 h-8" />
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
          Session Finished!
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8">
          You conquered <span className="font-semibold text-zinc-900 dark:text-zinc-100">{deck.title}</span>. Great job keeping your streak alive!
        </p>

        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{totalRated}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Cards Reviewed</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{accuracy}%</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Retention Rate</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{minutesSpent}m</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Time Spent</div>
          </div>
        </div>

        {/* Rating Breakdown Bar */}
        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8 text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">Recall Breakdown</div>
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-medium">
              Again: {ratedStats.again}
            </div>
            <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-medium">
              Hard: {ratedStats.hard}
            </div>
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-medium">
              Good: {ratedStats.good}
            </div>
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium">
              Easy: {ratedStats.easy}
            </div>
          </div>
        </div>

        {/* Action Buttons (Cal.com pill style) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Study Again
          </button>
          <button
            onClick={onSwitchToMatch}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            <Gamepad2 className="w-4 h-4" />
            Play Speed Match
          </button>
          <button
            onClick={onSwitchToQuiz}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            <ListOrdered className="w-4 h-4" />
            Take Quiz
          </button>
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors"
          >
            Back to Decks
          </button>
        </div>
      </motion.div>
    );
  }

  const progressPercent = queue.length > 0 ? Math.round(((currentIndex) / queue.length) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <button
          onClick={onBack}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
        >
          ← Exit Session
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            {sessionTitle || (mode === 'srs' ? 'Spaced Repetition' : 'Cram Mode')}
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            {currentIndex + 1} of {queue.length}
          </span>
        </div>
      </div>

      {/* Animated Progress Bar */}
      <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-6">
        <motion.div
          className="h-full bg-zinc-900 dark:bg-zinc-100 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card Flipper */}
      {currentCard ? (
        <CardFlipper
          card={currentCard}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
        />
      ) : (
        <div className="text-center py-16 text-zinc-500">
          <Layers className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
          No cards in this deck yet.
        </div>
      )}

      {/* Bottom Rating Controls (When Flipped) */}
      <div className="mt-6 min-h-[72px] flex items-center justify-center">
        {isFlipped ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl grid grid-cols-4 gap-2 sm:gap-3"
          >
            {/* Rating 1: Again */}
            <button
              onClick={() => handleRate(1)}
              className="group p-3 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-white dark:bg-zinc-900 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-700 dark:text-rose-300 transition-all flex flex-col items-center justify-center shadow-xs active:scale-95"
            >
              <div className="text-xs font-semibold flex items-center gap-1">
                <span>Again</span>
                <kbd className="text-[10px] px-1 py-0.2 rounded bg-rose-100 dark:bg-rose-900/60 font-mono">1</kbd>
              </div>
              <span className="text-[11px] text-rose-500/80 font-mono mt-0.5">
                {intervalPreviews?.[1] || '<10m'}
              </span>
            </button>

            {/* Rating 2: Hard */}
            <button
              onClick={() => handleRate(2)}
              className="group p-3 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-white dark:bg-zinc-900 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-amber-700 dark:text-amber-300 transition-all flex flex-col items-center justify-center shadow-xs active:scale-95"
            >
              <div className="text-xs font-semibold flex items-center gap-1">
                <span>Hard</span>
                <kbd className="text-[10px] px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-900/60 font-mono">2</kbd>
              </div>
              <span className="text-[11px] text-amber-500/80 font-mono mt-0.5">
                {intervalPreviews?.[2] || '1d'}
              </span>
            </button>

            {/* Rating 3: Good */}
            <button
              onClick={() => handleRate(3)}
              className="group p-3 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-white dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-700 dark:text-blue-300 transition-all flex flex-col items-center justify-center shadow-xs active:scale-95"
            >
              <div className="text-xs font-semibold flex items-center gap-1">
                <span>Good</span>
                <kbd className="text-[10px] px-1 py-0.2 rounded bg-blue-100 dark:bg-blue-900/60 font-mono">3</kbd>
              </div>
              <span className="text-[11px] text-blue-500/80 font-mono mt-0.5">
                {intervalPreviews?.[3] || '3d'}
              </span>
            </button>

            {/* Rating 4: Easy */}
            <button
              onClick={() => handleRate(4)}
              className="group p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-zinc-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 transition-all flex flex-col items-center justify-center shadow-xs active:scale-95"
            >
              <div className="text-xs font-semibold flex items-center gap-1">
                <span>Easy</span>
                <kbd className="text-[10px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900/60 font-mono">4</kbd>
              </div>
              <span className="text-[11px] text-emerald-500/80 font-mono mt-0.5">
                {intervalPreviews?.[4] || '6d'}
              </span>
            </button>
          </motion.div>
        ) : (
          <button
            onClick={() => {
              sounds.playFlip();
              setIsFlipped(true);
            }}
            className="px-8 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm shadow-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 active:scale-98"
          >
            <span>Show Answer</span>
            <kbd className="text-[11px] px-1.5 py-0.5 bg-zinc-800 dark:bg-zinc-200 rounded font-mono text-zinc-300 dark:text-zinc-700">Space</kbd>
          </button>
        )}
      </div>
    </div>
  );
};
