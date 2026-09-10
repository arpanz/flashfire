'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Lightbulb, CheckCircle2, XCircle, Code, Eye } from 'lucide-react';
import { Flashcard } from '../lib/types';
import { FormattedText } from './FormattedText';
import { CodeBlockView } from './CodeBlockView';
import { sounds } from '../lib/sound';

interface CardFlipperProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  showHintDefault?: boolean;
  showBackAnswerOnly?: boolean;
}

export const CardFlipper: React.FC<CardFlipperProps> = ({
  card,
  isFlipped,
  onFlip,
  showHintDefault = false,
}) => {
  const [showHint, setShowHint] = useState(showHintDefault);
  const [clozeRevealed, setClozeRevealed] = useState(false);
  const [selectedMCQOption, setSelectedMCQOption] = useState<string | null>(null);

  // Reset state when card changes
  useEffect(() => {
    setShowHint(showHintDefault);
    setClozeRevealed(false);
    setSelectedMCQOption(null);
  }, [card.id, showHintDefault]);

  // Sync cloze reveal with flip
  useEffect(() => {
    if (isFlipped) {
      setClozeRevealed(true);
    }
  }, [isFlipped]);

  const speakText = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    // Strip markdown and KaTeX markers for speech
    const cleanText = text
      .replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '$1')
      .replace(/\$\$([\s\S]*?)\$\$/g, 'math formula')
      .replace(/\$(.*?)\$/g, 'math formula')
      .replace(/[`*_#]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  const handleFlipClick = () => {
    sounds.playFlip();
    onFlip();
  };

  const toggleHint = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowHint(!showHint);
  };

  return (
    <div className="w-full max-w-2xl mx-auto [perspective:1400px] select-none my-4">
      <motion.div
        className="relative w-full min-h-[380px] sm:min-h-[420px] rounded-2xl cursor-pointer [transform-style:preserve-3d] transition-shadow duration-300 hover:shadow-xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        onClick={handleFlipClick}
      >
        {/* ================= FRONT SIDE ================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm [backface-visibility:hidden]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {card.type.toUpperCase()}
              </span>
              {card.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-zinc-50 dark:bg-zinc-800/60 text-zinc-500 border border-zinc-200/60 dark:border-zinc-700/60"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {card.hint && (
                <button
                  onClick={toggleHint}
                  title="Toggle Hint (H)"
                  className={`p-1.5 rounded-lg border text-xs font-medium flex items-center gap-1 transition-all ${
                    showHint
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800'
                      : 'bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 border-zinc-200 dark:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Hint</span>
                </button>
              )}

              <button
                onClick={(e) => speakText(card.front, e)}
                title="Pronounce front text (R)"
                className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Main Card Body */}
          <div className="my-auto py-4 flex flex-col justify-center items-center text-center">
            {/* Front Text / Cloze */}
            <div className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto">
              <FormattedText
                text={card.front}
                isCloze={card.type === 'cloze'}
                clozeRevealed={clozeRevealed}
                onRevealCloze={() => setClozeRevealed(true)}
              />
            </div>

            {/* Code Snippet if present */}
            {card.codeSnippet && (
              <div className="w-full mt-3" onClick={(e) => e.stopPropagation()}>
                <CodeBlockView
                  code={card.codeSnippet}
                  language={card.codeLanguage || 'pseudocode'}
                />
              </div>
            )}

            {/* MCQ Interactive Option Previews */}
            {card.type === 'mcq' && card.mcqOptions && (
              <div
                className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 text-left"
                onClick={(e) => e.stopPropagation()}
              >
                {card.mcqOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedMCQOption(opt.id)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all text-left flex items-start justify-between ${
                      selectedMCQOption === opt.id
                        ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold shadow-sm'
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <span>{opt.text}</span>
                    {selectedMCQOption === opt.id && (
                      <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100 mt-1.5" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Hint Box (Revealed) */}
            <AnimatePresence>
              {showHint && card.hint && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="mt-4 p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs sm:text-sm max-w-lg text-left flex items-start gap-2 shadow-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold mr-1">Hint:</span>
                    {card.hint}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Flip Indicator */}
          <div className="flex items-center justify-center gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-400">
            <Eye className="w-3.5 h-3.5" />
            <span>Click card or press <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[10px]">Space</kbd> to flip</span>
          </div>
        </div>

        {/* ================= BACK SIDE ================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-sm [transform:rotateY(180deg)] [backface-visibility:hidden]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
              Answer & Recall
            </span>

            <button
              onClick={(e) => speakText(card.back, e)}
              title="Pronounce back text (R)"
              className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Answer Body */}
          <div className="my-auto py-4 flex flex-col justify-center items-center text-center">
            {/* Answer Text */}
            <div className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto leading-relaxed">
              <FormattedText text={card.back} />
            </div>

            {/* MCQ Answer Validation */}
            {card.type === 'mcq' && card.mcqOptions && (
              <div className="w-full mt-4 flex flex-col gap-2 max-w-lg mx-auto text-left">
                {card.mcqOptions.map((opt) => (
                  <div
                    key={opt.id}
                    className={`p-2.5 rounded-xl border text-xs sm:text-sm font-medium flex items-center justify-between ${
                      opt.isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200'
                        : selectedMCQOption === opt.id
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200 line-through opacity-70'
                        : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 opacity-60'
                    }`}
                  >
                    <span>{opt.text}</span>
                    {opt.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : selectedMCQOption === opt.id ? (
                      <XCircle className="w-4 h-4 text-rose-500" />
                    ) : null}
                  </div>
                ))}
              </div>
            )}

            {/* Explanation / Notes if available */}
            {card.explanation && (
              <div className="mt-4 p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-lg text-left shadow-xs">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100 mr-1">Explanation:</span>
                {card.explanation}
              </div>
            )}
          </div>

          {/* Bottom Flip Indicator */}
          <div className="flex items-center justify-center gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-400">
            <span>Rate your recall below or press keys <kbd className="px-1 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[10px]">1</kbd> - <kbd className="px-1 py-0.5 bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[10px]">4</kbd></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
