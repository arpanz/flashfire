'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';
import { Deck, Flashcard } from '../lib/types';
import { storage } from '../lib/storage';
import { sounds } from '../lib/sound';
import { FormattedText } from './FormattedText';

interface QuizModeProps {
  deck: Deck;
  onBack: () => void;
}

interface QuizQuestion {
  card: Flashcard;
  prompt: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation?: string;
}

export const QuizMode: React.FC<QuizModeProps> = ({ deck, onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [missedQuestions, setMissedQuestions] = useState<QuizQuestion[]>([]);

  // Build Quiz Questions
  useEffect(() => {
    const allCards = storage.getCards().filter((c) => c.deckId === deck.id);
    if (allCards.length === 0) return;

    const quiz: QuizQuestion[] = [];
    const pool = [...allCards].sort(() => Math.random() - 0.5);

    pool.forEach((card) => {
      if (card.type === 'mcq' && card.mcqOptions && card.mcqOptions.length >= 2) {
        quiz.push({
          card,
          prompt: card.front,
          options: [...card.mcqOptions].sort(() => Math.random() - 0.5),
          explanation: card.explanation || card.back,
        });
      } else {
        // Build distractors from other cards
        const distractors = allCards
          .filter((c) => c.id !== card.id)
          .map((c) => c.back)
          .slice(0, 3);

        const options = [
          { id: 'correct', text: card.back, isCorrect: true },
          ...distractors.map((text, i) => ({ id: `distractor-${i}`, text, isCorrect: false })),
        ].sort(() => Math.random() - 0.5);

        quiz.push({
          card,
          prompt: card.front,
          options,
          explanation: card.explanation,
        });
      }
    });

    setQuestions(quiz);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setMissedQuestions([]);
  }, [deck.id]);

  const currentQ = questions[currentIndex] || null;

  const handleSelectOption = (optionId: string, isCorrect: boolean) => {
    if (isAnswered) return;

    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      sounds.playSuccess();
      setScore((prev) => prev + 1);
    } else {
      sounds.playError();
      if (currentQ) {
        setMissedQuestions((prev) => [...prev, currentQ]);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      sounds.playSuccess();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const retryMissed = () => {
    if (missedQuestions.length === 0) return;
    setQuestions(missedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setMissedQuestions([]);
  };

  if (!currentQ && !isFinished) {
    return (
      <div className="max-w-2xl mx-auto py-12 text-center text-zinc-500">
        No cards available for quiz.
      </div>
    );
  }

  if (isFinished) {
    const accuracy = questions.length > 0 ? Math.round((score / questions.length) * 100) : 100;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto py-12 px-4 text-center"
      >
        <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center mb-6 shadow-md">
          <Award className="w-8 h-8" />
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
          Quiz Completed!
        </h2>
        <p className="text-zinc-500 text-sm mb-6">
          Deck: <span className="font-semibold text-zinc-900 dark:text-zinc-100">{deck.title}</span>
        </p>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8 shadow-xs">
          <div className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-1">
            {score} / {questions.length}
          </div>
          <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {accuracy}% Score
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {missedQuestions.length > 0 && (
            <button
              onClick={retryMissed}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retry Missed ({missedQuestions.length})
            </button>
          )}
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Back to Decks
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <button
          onClick={onBack}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Exit Quiz
        </button>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            Score: {score}
          </span>
          <span className="text-zinc-400">
            {currentIndex + 1} of {questions.length}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Question</div>
        <div className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed mb-6">
          <FormattedText text={currentQ.prompt} />
        </div>

        {/* Options */}
        <div className="flex flex-col gap-2.5">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            let btnStyle = 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 text-zinc-800 dark:text-zinc-200';

            if (isAnswered) {
              if (opt.isCorrect) {
                btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium';
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = 'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 line-through';
              } else {
                btnStyle = 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                disabled={isAnswered}
                onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                className={`p-3.5 rounded-xl border text-sm text-left transition-all flex items-center justify-between shadow-xs ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono font-medium flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt.text}</span>
                </div>
                {isAnswered && opt.isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                )}
                {isAnswered && isSelected && !opt.isCorrect && (
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation (Shown upon answering) */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400"
            >
              {currentQ.explanation && (
                <div className="mb-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 mr-1">Explanation:</span>
                  {currentQ.explanation}
                </div>
              )}

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  {currentIndex + 1 < questions.length ? 'Next Question →' : 'View Results'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
