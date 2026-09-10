'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Timer, Trophy, RotateCcw, ArrowLeft, Sparkles } from 'lucide-react';
import { Deck } from '../lib/types';
import { storage } from '../lib/storage';
import { sounds } from '../lib/sound';
import { FormattedText } from './FormattedText';

interface MatchGameProps {
  deck: Deck;
  onBack: () => void;
}

interface Tile {
  id: string; // unique tile id
  cardId: string;
  type: 'front' | 'back';
  text: string;
  isMatched: boolean;
}

export const MatchGame: React.FC<MatchGameProps> = ({ deck, onBack }) => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selectedTileId, setSelectedTileId] = useState<string | null>(null);
  const [mismatchedTileIds, setMismatchedTileIds] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [matchesCount, setMatchesCount] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Load best time from localStorage
  useEffect(() => {
    const key = `flashfire_match_best_${deck.id}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      setBestTime(parseFloat(saved));
    }
  }, [deck.id]);

  // Setup / reset game board
  const setupGame = useCallback(() => {
    const allCards = storage.getCards().filter((c) => c.deckId === deck.id);
    if (allCards.length === 0) return;

    // Pick up to 6 random cards
    const sampleCards = [...allCards]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

    const generatedTiles: Tile[] = [];
    sampleCards.forEach((c) => {
      // Clean front
      const cleanFront = c.front
        .replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '$1')
        .replace(/\$\$([\s\S]*?)\$\$/g, '$1');

      generatedTiles.push({
        id: `tile-${c.id}-f`,
        cardId: c.id,
        type: 'front',
        text: cleanFront,
        isMatched: false,
      });

      // Clean back
      const cleanBack = c.back
        .replace(/\$\$([\s\S]*?)\$\$/g, '$1');

      generatedTiles.push({
        id: `tile-${c.id}-b`,
        cardId: c.id,
        type: 'back',
        text: cleanBack,
        isMatched: false,
      });
    });

    // Shuffle tiles
    setTiles(generatedTiles.sort(() => Math.random() - 0.5));
    setSelectedTileId(null);
    setMismatchedTileIds([]);
    setMatchesCount(0);
    setIsFinished(false);
    setElapsedTime(0);
    setStartTime(Date.now());
    setIsPlaying(true);
  }, [deck.id]);

  useEffect(() => {
    setupGame();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [setupGame]);

  // Live stopwatch timer
  useEffect(() => {
    if (isPlaying && startTime) {
      timerRef.current = setInterval(() => {
        setElapsedTime((Date.now() - startTime) / 1000);
      }, 50);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, startTime]);

  // Handle tile click
  const handleTileClick = (tile: Tile) => {
    if (!isPlaying || tile.isMatched || mismatchedTileIds.length > 0) return;

    sounds.playFlip();

    // If first tile clicked
    if (!selectedTileId) {
      setSelectedTileId(tile.id);
      return;
    }

    // If clicking same tile again, deselect
    if (selectedTileId === tile.id) {
      setSelectedTileId(null);
      return;
    }

    // Two tiles selected -> compare
    const firstTile = tiles.find((t) => t.id === selectedTileId);
    if (!firstTile) return;

    if (firstTile.cardId === tile.cardId && firstTile.type !== tile.type) {
      // MATCH!
      sounds.playSuccess();
      const updated = tiles.map((t) =>
        t.cardId === tile.cardId ? { ...t, isMatched: true } : t
      );
      setTiles(updated);
      setSelectedTileId(null);

      const newMatchCount = matchesCount + 1;
      setMatchesCount(newMatchCount);

      // Check if all matched
      const allMatched = updated.every((t) => t.isMatched);
      if (allMatched) {
        setIsPlaying(false);
        setIsFinished(true);
        sounds.playSuccess();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });

        const finalTime = (Date.now() - (startTime || Date.now())) / 1000;
        const key = `flashfire_match_best_${deck.id}`;
        if (!bestTime || finalTime < bestTime) {
          setBestTime(finalTime);
          localStorage.setItem(key, finalTime.toString());
        }
      }
    } else {
      // MISMATCH!
      sounds.playError();
      setMismatchedTileIds([firstTile.id, tile.id]);
      setTimeout(() => {
        setSelectedTileId(null);
        setMismatchedTileIds([]);
      }, 500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
        <button
          onClick={onBack}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors min-h-[36px]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Deck
        </button>

        {/* Stopwatch & Best Score */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium">
            <Timer className="w-3.5 h-3.5 text-zinc-500" />
            <span>{elapsedTime.toFixed(1)}s</span>
          </div>

          {bestTime !== null && (
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-medium border border-amber-200 dark:border-amber-800/60">
              <Trophy className="w-3.5 h-3.5" />
              <span>Record: {bestTime.toFixed(1)}s</span>
            </div>
          )}
        </div>
      </div>

      {/* Finished Modal */}
      <AnimatePresence>
        {isFinished && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-6 sm:mb-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center shadow-lg"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Trophy className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight mb-1">
              Match Master!
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              You cleared all pairs in <span className="font-bold text-zinc-900 dark:text-zinc-100">{elapsedTime.toFixed(1)}s</span>!
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 w-full">
              <button
                onClick={setupGame}
                className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <RotateCcw className="w-4 h-4" />
                Play Again
              </button>
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center min-h-[44px]"
              >
                Return to Deck
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tiles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 select-none">
        {tiles.map((tile) => {
          const isSelected = selectedTileId === tile.id;
          const isMismatched = mismatchedTileIds.includes(tile.id);

          if (tile.isMatched) {
            return (
              <motion.div
                key={tile.id}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0.15, scale: 0.95 }}
                className="min-h-[6.5rem] sm:min-h-[7.5rem] rounded-xl bg-zinc-100 dark:bg-zinc-800/40 border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center p-3 pointer-events-none"
              >
                <Sparkles className="w-4 h-4 text-zinc-400" />
              </motion.div>
            );
          }

          return (
            <motion.button
              key={tile.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleTileClick(tile)}
              className={`min-h-[6.5rem] sm:min-h-[7.5rem] rounded-xl p-2.5 sm:p-3.5 text-xs sm:text-sm font-medium flex items-center justify-center text-center transition-all cursor-pointer shadow-xs border relative overflow-hidden ${
                isSelected
                  ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 ring-2 ring-zinc-900/20 shadow-md scale-[1.02]'
                  : isMismatched
                  ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-200 animate-shake'
                  : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-200'
              }`}
            >
              <span className="line-clamp-4 leading-snug">
                <FormattedText text={tile.text} />
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
