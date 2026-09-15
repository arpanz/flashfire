"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Check,
  HelpCircle,
  Play,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Timer,
  Flame,
  ArrowRight,
  Zap,
  Sparkles,
  FolderPlus,
  ChevronDown,
  ChevronUp,
  Info,
  Brain,
} from "lucide-react";
import { Deck, Flashcard, Rating, MCQOption, ReviewLog } from "../lib/types";
import { calculateNextReview, RecallDifficulty, getCardRecallMetadata } from "../lib/srs";
import { storage } from "../lib/storage";
import { sounds } from "../lib/sound";
import { getCookie, setCookie } from "../lib/cookies";
import { resolveDistractorExplanation, getOptionBreakdown, getOptionMeaning } from "../lib/distractorEngine";
import { DeckIcon } from "./DeckIcon";
import { FormattedText } from "./FormattedText";
import { CodeBlockView } from "./CodeBlockView";

interface QuizHubProps {
  decks: Deck[];
  cards: Flashcard[];
  initialDeckId?: string | null;
  customCards?: Flashcard[];
  customTitle?: string;
  onExit?: () => void;
  onStartStudy?: (deck: Deck, mode: "srs" | "cram", customCards?: Flashcard[], title?: string) => void;
}

interface QuizQuestion {
  card: Flashcard;
  prompt: string;
  options: MCQOption[];
  explanation?: string;
  selectedOptionId?: string;
  isUserCorrect?: boolean;
  userRating?: Rating;
  quickExplanation?: string;
}

// Graceful Fisher-Yates shuffle algorithm
function shuffleArray<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const ALL_DIFFICULTIES: RecallDifficulty[] = ["forgot", "hard", "good", "easy", "new"];

interface DifficultyConfigItem {
  key: RecallDifficulty;
  label: string;
  desc: string;
  dotClass: string;
  activeClass: string;
  badgeClass: string;
}

const DIFFICULTY_CONFIG: DifficultyConfigItem[] = [
  {
    key: "forgot",
    label: "Forgot",
    desc: "Rating 1 (Again)",
    dotClass: "bg-rose-500",
    activeClass:
      "bg-rose-50 dark:bg-rose-950/40 border-rose-400 dark:border-rose-600 text-rose-900 dark:text-rose-100 shadow-xs ring-1 ring-rose-400/40",
    badgeClass: "bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300",
  },
  {
    key: "hard",
    label: "Hard",
    desc: "Rating 2 (Hesitated)",
    dotClass: "bg-amber-500",
    activeClass:
      "bg-amber-50 dark:bg-amber-950/40 border-amber-400 dark:border-amber-600 text-amber-900 dark:text-amber-100 shadow-xs ring-1 ring-amber-400/40",
    badgeClass: "bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300",
  },
  {
    key: "good",
    label: "Good",
    desc: "Rating 3 (Recalled)",
    dotClass: "bg-blue-500",
    activeClass:
      "bg-blue-50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-600 text-blue-900 dark:text-blue-100 shadow-xs ring-1 ring-blue-400/40",
    badgeClass: "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300",
  },
  {
    key: "easy",
    label: "Easy",
    desc: "Rating 4 (Mastered)",
    dotClass: "bg-emerald-500",
    activeClass:
      "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-600 text-emerald-900 dark:text-emerald-100 shadow-xs ring-1 ring-emerald-400/40",
    badgeClass: "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300",
  },
  {
    key: "new",
    label: "Unseen",
    desc: "Not yet rated",
    dotClass: "bg-zinc-400 dark:bg-zinc-500",
    activeClass:
      "bg-zinc-100 dark:bg-zinc-800 border-zinc-900 dark:border-zinc-300 text-zinc-900 dark:text-zinc-100 shadow-xs ring-1 ring-zinc-900/20 dark:ring-zinc-300/20",
    badgeClass: "bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300",
  },
];

export const QuizHub: React.FC<QuizHubProps> = ({
  decks,
  cards,
  initialDeckId,
  customCards,
  customTitle,
  onExit,
  onStartStudy,
}) => {
  // Review logs listener for reactive difficulty classification
  const [reviewLogs, setReviewLogs] = useState<ReviewLog[]>(() => storage.getReviewLogs());

  useEffect(() => {
    setReviewLogs(storage.getReviewLogs());
    const unsub = storage.subscribe(() => {
      setReviewLogs(storage.getReviewLogs());
    });
    return () => unsub();
  }, []);

  const logsByCard = useMemo(() => {
    const map = new Map<string, ReviewLog[]>();
    reviewLogs.forEach((log) => {
      const arr = map.get(log.cardId) || [];
      arr.push(log);
      map.set(log.cardId, arr);
    });
    map.forEach((arr) => arr.sort((a, b) => b.timestamp - a.timestamp));
    return map;
  }, [reviewLogs]);

  // Setup Configuration State with Cookies Persistence
  const [selectedDeckIds, setSelectedDeckIds] = useState<string[]>(() => {
    if (initialDeckId && initialDeckId !== "all") return [initialDeckId];
    const saved = getCookie("flashfire_quiz_categories");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch {}
    }
    return decks.map((d) => d.id);
  });

  const [selectedDifficulties, setSelectedDifficulties] = useState<RecallDifficulty[]>(() => {
    const saved = getCookie("flashfire_quiz_difficulties");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const valid = parsed.filter((d: RecallDifficulty) => ALL_DIFFICULTIES.includes(d));
          if (valid.length > 0) return valid;
        }
      } catch {}
    }
    return [...ALL_DIFFICULTIES];
  });

  const [questionCount, setQuestionCount] = useState<number>(() => {
    const saved = getCookie("flashfire_quiz_count");
    if (saved) {
      const num = parseInt(saved, 10);
      if (!isNaN(num)) return num;
    }
    return 10;
  });

  // Default timed is ON (true)
  const [isTimed, setIsTimed] = useState<boolean>(() => {
    const saved = getCookie("flashfire_quiz_timed");
    if (saved !== null) return saved === "true";
    return true;
  });

  const [timerSeconds, setTimerSeconds] = useState<number>(() => {
    const saved = getCookie("flashfire_quiz_seconds");
    if (saved) {
      const num = parseInt(saved, 10);
      if ([15, 20, 30, 45, 60].includes(num)) return num;
    }
    return 30;
  });

  // Default syncWithSRS is OFF (false)
  const [syncWithSRS, setSyncWithSRS] = useState<boolean>(() => {
    const saved = getCookie("flashfire_quiz_srs");
    if (saved !== null) return saved === "true";
    return false;
  });

  // Active Quiz State
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  // Track the currently viewed card ID to prevent race conditions when navigating between questions
  const activeQuestionIdRef = useRef<string | null>(null);

  // SRS Real-time tracking
  const [lastSrsStatus, setLastSrsStatus] = useState<{
    isLapse: boolean;
    interval: number;
    reps: number;
    lapses: number;
  } | null>(null);
  const questionStartTime = useRef<number>(Date.now());

  // Explanation State
  const [quickExplanation, setQuickExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  // In-memory token-efficient cache for explanations
  const aiCacheRef = useRef<Map<string, { explanation: string }>>(new Map());

  // Results Screen State
  const [resultsFilter, setResultsFilter] = useState<"all" | "missed" | "correct">("all");
  const [savedDeckNotice, setSavedDeckNotice] = useState<string | null>(null);

  // Distractor & Option Breakdown State
  const [showAllOptionsBreakdown, setShowAllOptionsBreakdown] = useState<boolean>(false);

  // Timer countdown
  const [timeLeft, setTimeLeft] = useState<number>(timerSeconds);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // If initialDeckId changes
  useEffect(() => {
    if (initialDeckId && initialDeckId !== "all") {
      setSelectedDeckIds([initialDeckId]);
    }
  }, [initialDeckId]);


  // Fetch explanation
  const fetchAiExplanation = useCallback(
    async (q: QuizQuestion, chosenOptionId: string | null | undefined, force = false) => {
      const targetCardId = q.card.id;
      const effectiveOptionId = chosenOptionId || "none";
      const cacheKey = `${targetCardId}__${q.prompt.trim().slice(0, 50)}__${effectiveOptionId}`;

      // Check cache first
      if (!force && aiCacheRef.current.has(cacheKey)) {
        const cached = aiCacheRef.current.get(cacheKey)!;
        if (activeQuestionIdRef.current === targetCardId) {
          setQuickExplanation(cached.explanation);
        }
        return;
      }

      if (activeQuestionIdRef.current === targetCardId) {
        setIsAiLoading(true);
      }

      try {
        const res = await fetch("/api/explain", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: q.prompt,
            options: q.options,
            selectedOptionId: effectiveOptionId !== "none" ? effectiveOptionId : null,
            cardId: targetCardId,
            mode: "quick",
            fallbackExplanation: q.explanation || q.card.back,
          }),
        });

        const data = await res.json();
        if (data.success && data.explanation) {
          aiCacheRef.current.set(cacheKey, { explanation: data.explanation });

          setQuestions((prev) =>
            prev.map((item) => {
              if (item.card.id !== targetCardId) return item;
              return {
                ...item,
                quickExplanation: data.explanation,
              };
            })
          );

          if (activeQuestionIdRef.current === targetCardId) {
            setQuickExplanation(data.explanation);
          }
        } else {
          throw new Error(data.error || "Failed to generate explanation");
        }
      } catch (err) {
        console.warn("Explanation fetch fallback triggered:", err);
        const correctOpt = q.options.find((o) => o.isCorrect) || q.options[0];

        let cleanFallback = q.explanation ? q.explanation.trim() : "";
        cleanFallback = cleanFallback
          .replace(/^Option\s+[A-D]:\s*/i, "")
          .replace(/^Option\s+\[[A-D]\]\s*\([^)]+\)\s*(?:is correct\.?)?\s*/i, "")
          .trim();
        if (!cleanFallback || cleanFallback.toLowerCase() === correctOpt.text.toLowerCase()) {
          cleanFallback = `${correctOpt.text} is the correct answer because it directly satisfies "${q.prompt.trim()}".`;
        }

        setQuestions((prev) =>
          prev.map((item) => {
            if (item.card.id !== targetCardId) return item;
            return {
              ...item,
              quickExplanation: cleanFallback,
            };
          })
        );

        if (activeQuestionIdRef.current === targetCardId) {
          setQuickExplanation(cleanFallback);
        }
      } finally {
        if (activeQuestionIdRef.current === targetCardId) {
          setIsAiLoading(false);
        }
      }
    },
    []
  );

  // Build and Shuffle Quiz Questions
  const startQuiz = useCallback(
    (customCategoryIds = selectedDeckIds, count = questionCount) => {
      sounds.playSelect();
      let pool: Flashcard[] = [];

      if (customCards && customCards.length > 0) {
        pool = [...customCards];
      } else {
        const activeCategoryIds =
          customCategoryIds.length === 0 ? decks.map((d) => d.id) : customCategoryIds;
        
        // Filter by active category AND selected recall difficulties
        pool = cards.filter((c) => {
          if (!activeCategoryIds.includes(c.deckId)) return false;
          const meta = getCardRecallMetadata(c, logsByCard);
          return selectedDifficulties.includes(meta.difficulty);
        });

        // Fallback: If no cards match selected difficulty, fallback to all category cards
        if (pool.length === 0) {
          pool = cards.filter((c) => activeCategoryIds.includes(c.deckId));
        }
        if (pool.length === 0) pool = [...cards];
      }

      // Graceful Fisher-Yates shuffle across selected categories
      pool = shuffleArray(pool);
      const selectedPool = count === -1 ? pool : pool.slice(0, Math.min(count, pool.length));

      const generated: QuizQuestion[] = [];

      selectedPool.forEach((card) => {
        if (card.mcqOptions && card.mcqOptions.length >= 2) {
          generated.push({
            card,
            prompt: card.front,
            options: shuffleArray([...card.mcqOptions]),
            explanation: card.explanation || card.back,
          });
        } else {
          const distractors = shuffleArray(
            cards.filter((c) => c.id !== card.id && c.back.trim().length > 0)
          )
            .slice(0, 3)
            .map((c, idx) => ({
              id: `distractor-${idx}`,
              text: c.back.replace(/\$\$(.*?)\$\$/g, "$1").slice(0, 140),
              isCorrect: false,
            }));

          const cleanBack = card.back.replace(/\$\$(.*?)\$\$/g, "$1");
          const options = shuffleArray([
            { id: "correct", text: cleanBack, isCorrect: true },
            ...distractors,
          ]);

          const cleanPrompt = card.front.replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, "______");

          generated.push({
            card,
            prompt: cleanPrompt,
            options,
            explanation: card.explanation,
          });
        }
      });

      setQuestions(generated);
      setCurrentIndex(0);
      activeQuestionIdRef.current = generated[0]?.card.id || null;
      setScore(0);
      setStreak(0);
      setSelectedOptionId(null);
      setIsAnswered(false);
      setIsFinished(false);
      setLastSrsStatus(null);
      setSavedDeckNotice(null);
      setResultsFilter("all");
      setQuickExplanation(null);
      setIsAiLoading(false);
      setShowAllOptionsBreakdown(false);
      setIsQuizActive(true);
      setTimeLeft(timerSeconds);
      questionStartTime.current = Date.now();
    },
    [cards, selectedDeckIds, decks, questionCount, timerSeconds, customCards, logsByCard, selectedDifficulties]
  );

  // If customCards are passed (e.g. from Revision Hub)
  useEffect(() => {
    if (customCards && customCards.length > 0) {
      startQuiz(undefined, customCards.length);
    }
  }, [customCards, startQuiz]);

  // Self-Rate Handler (Requirement 12: what user forgot / found hard / easy)
  const handleUserSelfRate = useCallback(
    (rating: Rating) => {
      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      sounds.playRate(rating);

      setQuestions((prev) => {
        const copy = [...prev];
        copy[currentIndex] = {
          ...copy[currentIndex],
          userRating: rating,
        };
        return copy;
      });

      const timeSpent = Date.now() - questionStartTime.current;
      const srsUpdate = syncWithSRS
        ? calculateNextReview(currentQ.card, rating, Date.now())
        : {
            ...currentQ.card.srs,
            lastStudied: Date.now(),
            reps: (currentQ.card.srs.reps || 0) + 1,
            lapses: rating === 1 ? (currentQ.card.srs.lapses || 0) + 1 : (currentQ.card.srs.lapses || 0),
            state: currentQ.card.srs.state === 'new' ? ('learning' as const) : currentQ.card.srs.state,
          };

      const updatedCard: Flashcard = {
        ...currentQ.card,
        srs: srsUpdate,
        updatedAt: Date.now(),
      };

      storage.saveCard(updatedCard);
      storage.addReviewLog({
        id: `log-quiz-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        cardId: currentQ.card.id,
        deckId: currentQ.card.deckId,
        timestamp: Date.now(),
        rating,
        timeSpentMs: timeSpent,
        intervalBefore: currentQ.card.srs.interval,
        intervalAfter: srsUpdate.interval,
      });

      if (syncWithSRS) {
        setLastSrsStatus({
          isLapse: rating === 1,
          interval: srsUpdate.interval,
          reps: srsUpdate.reps,
          lapses: srsUpdate.lapses,
        });
      }
    },
    [questions, currentIndex, syncWithSRS]
  );

  // Handle Option Selection
  const handleSelectOption = useCallback(
    (optionId: string) => {
      if (isAnswered) return;

      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      setSelectedOptionId(optionId);
      setIsAnswered(true);
      if (timerRef.current) clearInterval(timerRef.current);

      const timeSpent = Date.now() - questionStartTime.current;
      const chosen = currentQ.options.find((o) => o.id === optionId);
      const isCorrect = chosen?.isCorrect || false;
      const initialRating: Rating = isCorrect ? (timeSpent < 6000 ? 4 : 3) : 1;

      setShowAllOptionsBreakdown(!isCorrect);

      setQuestions((prev) => {
        const copy = [...prev];
        copy[currentIndex] = {
          ...copy[currentIndex],
          selectedOptionId: optionId,
          isUserCorrect: isCorrect,
          userRating: initialRating,
        };
        return copy;
      });

      // Spaced Repetition (SRS) Integration & Review logging
      const srsUpdate = syncWithSRS
        ? calculateNextReview(currentQ.card, initialRating, Date.now())
        : {
            ...currentQ.card.srs,
            lastStudied: Date.now(),
            reps: (currentQ.card.srs.reps || 0) + 1,
            lapses: !isCorrect ? (currentQ.card.srs.lapses || 0) + 1 : (currentQ.card.srs.lapses || 0),
            state: currentQ.card.srs.state === 'new' ? ('learning' as const) : currentQ.card.srs.state,
          };

      const updatedCard: Flashcard = {
        ...currentQ.card,
        srs: srsUpdate,
        updatedAt: Date.now(),
      };

      storage.saveCard(updatedCard);
      storage.addReviewLog({
        id: `log-quiz-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        cardId: currentQ.card.id,
        deckId: currentQ.card.deckId,
        timestamp: Date.now(),
        rating: initialRating,
        timeSpentMs: timeSpent,
        intervalBefore: currentQ.card.srs.interval,
        intervalAfter: srsUpdate.interval,
      });

      if (syncWithSRS) {
        setLastSrsStatus({
          isLapse: !isCorrect,
          interval: srsUpdate.interval,
          reps: srsUpdate.reps,
          lapses: srsUpdate.lapses,
        });
      }

      // Fetch auto explanation
      fetchAiExplanation(currentQ, optionId);

      if (isCorrect) {
        sounds.playCorrect();
        setScore((s) => s + 1);
        setStreak((str) => str + 1);
        storage.recordActivity(true);
      } else {
        sounds.playIncorrect();
        setStreak(0);
        storage.recordActivity(false);
      }
    },
    [isAnswered, questions, currentIndex, syncWithSRS, fetchAiExplanation]
  );

  // Time-out handler
  const handleTimeOut = useCallback(() => {
    if (isAnswered) return;

    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    setIsAnswered(true);
    sounds.playIncorrect();
    setStreak(0);
    storage.recordActivity(false);
    if (timerRef.current) clearInterval(timerRef.current);

    setQuestions((prev) => {
      const copy = [...prev];
      if (copy[currentIndex]) {
        copy[currentIndex] = {
          ...copy[currentIndex],
          isUserCorrect: false,
          userRating: 1,
        };
      }
      return copy;
    });

    const srsUpdate = syncWithSRS
      ? calculateNextReview(currentQ.card, 1, Date.now())
      : {
          ...currentQ.card.srs,
          lastStudied: Date.now(),
          reps: (currentQ.card.srs.reps || 0) + 1,
          lapses: (currentQ.card.srs.lapses || 0) + 1,
          state: currentQ.card.srs.state === 'new' ? ('learning' as const) : currentQ.card.srs.state,
        };

    const updatedCard: Flashcard = {
      ...currentQ.card,
      srs: srsUpdate,
      updatedAt: Date.now(),
    };

    storage.saveCard(updatedCard);
    storage.addReviewLog({
      id: `log-quiz-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      cardId: currentQ.card.id,
      deckId: currentQ.card.deckId,
      timestamp: Date.now(),
      rating: 1,
      timeSpentMs: timerSeconds * 1000,
      intervalBefore: currentQ.card.srs.interval,
      intervalAfter: srsUpdate.interval,
    });

    if (syncWithSRS) {
      setLastSrsStatus({
        isLapse: true,
        interval: srsUpdate.interval,
        reps: srsUpdate.reps,
        lapses: srsUpdate.lapses,
      });
    }

    fetchAiExplanation(currentQ, "none");
  }, [isAnswered, questions, currentIndex, syncWithSRS, timerSeconds, fetchAiExplanation]);

  // Timer Tick
  useEffect(() => {
    if (!isQuizActive || isFinished || isAnswered || !isTimed) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleTimeOut();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isQuizActive, isFinished, isAnswered, isTimed, currentIndex, handleTimeOut]);

  // Next Question
  const handleNext = useCallback(() => {
    sounds.playSelect();
    if (currentIndex + 1 < questions.length) {
      const nextIdx = currentIndex + 1;
      const nextQ = questions[nextIdx];
      setCurrentIndex(nextIdx);
      activeQuestionIdRef.current = nextQ?.card.id || null;
      setSelectedOptionId(nextQ?.selectedOptionId || null);
      setIsAnswered(!!nextQ?.selectedOptionId);
      setLastSrsStatus(null);
      setQuickExplanation(nextQ?.quickExplanation || null);
      setIsAiLoading(false);
      setShowAllOptionsBreakdown(false);
      questionStartTime.current = Date.now();
      setTimeLeft(timerSeconds);
    } else {
      setIsFinished(true);
      sounds.playComplete();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [currentIndex, questions, timerSeconds]);

  // Save missed questions as a dedicated focused deck
  const handleSaveMissedAsDeck = useCallback(() => {
    const missed = questions.filter((q) => !q.isUserCorrect).map((q) => q.card);
    if (missed.length === 0) return;

    const newDeckId = `deck-mistakes-${Date.now()}`;
    const newDeck: Deck = {
      id: newDeckId,
      title: `Quiz Mistakes Review`,
      description: `Targeted review deck containing ${missed.length} questions missed during quiz testing.`,
      icon: "🎯",
      color: "#dc2626",
      tags: ["Quiz Mistakes", "Focus Review"],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const clonedCards = missed.map((c) => ({
      ...c,
      id: `card-review-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      deckId: newDeckId,
      srs: {
        reps: 0,
        interval: 0,
        easeFactor: Math.max(1.3, (c.srs.easeFactor || 2.5) - 0.2),
        lastStudied: null,
        dueDate: Date.now(),
        lapses: (c.srs.lapses || 0) + 1,
        state: "learning" as const,
      },
      updatedAt: Date.now(),
    }));

    storage.saveDeck(newDeck);
    storage.saveCards([...clonedCards, ...storage.getCards()]);
    setSavedDeckNotice(`Saved "${newDeck.title}" with ${missed.length} cards to your Decks!`);
  }, [questions]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isQuizActive || isFinished) return;

      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      if (!isAnswered) {
        const key = e.key.toUpperCase();
        let optIdx = -1;
        if (key === "1" || key === "A") optIdx = 0;
        if (key === "2" || key === "B") optIdx = 1;
        if (key === "3" || key === "C") optIdx = 2;
        if (key === "4" || key === "D") optIdx = 3;

        if (optIdx >= 0 && optIdx < currentQ.options.length) {
          e.preventDefault();
          handleSelectOption(currentQ.options[optIdx].id);
        }
      } else {
        if (e.key === "1") {
          e.preventDefault();
          handleUserSelfRate(1);
        } else if (e.key === "2") {
          e.preventDefault();
          handleUserSelfRate(2);
        } else if (e.key === "3") {
          e.preventDefault();
          handleUserSelfRate(3);
        } else if (e.key === "4") {
          e.preventDefault();
          handleUserSelfRate(4);
        } else if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isQuizActive, isFinished, isAnswered, questions, currentIndex, handleSelectOption, handleUserSelfRate, handleNext]);

  const currentQ = questions[currentIndex] || null;

  // Active Category Cards
  const categoryCards = useMemo(() => {
    if (customCards && customCards.length > 0) return customCards;
    const activeDeckIds =
      selectedDeckIds.length === 0 ? decks.map((d) => d.id) : selectedDeckIds;
    return cards.filter((c) => activeDeckIds.includes(c.deckId));
  }, [cards, selectedDeckIds, decks, customCards]);

  // Breakdown of counts for each difficulty inside currently selected categories
  const difficultyCounts = useMemo(() => {
    const counts: Record<RecallDifficulty, number> = {
      forgot: 0,
      hard: 0,
      good: 0,
      easy: 0,
      new: 0,
    };
    categoryCards.forEach((c) => {
      const meta = getCardRecallMetadata(c, logsByCard);
      counts[meta.difficulty] = (counts[meta.difficulty] || 0) + 1;
    });
    return counts;
  }, [categoryCards, logsByCard]);

  // Eligible cards matching category AND difficulty filter
  const eligibleCards = useMemo(() => {
    if (customCards && customCards.length > 0) return customCards;
    return categoryCards.filter((c) => {
      const meta = getCardRecallMetadata(c, logsByCard);
      return selectedDifficulties.includes(meta.difficulty);
    });
  }, [categoryCards, logsByCard, selectedDifficulties, customCards]);

  const totalSelectedCards = eligibleCards.length;

  // ================= 1. SETUP / HUB SCREEN =================
  if (!isQuizActive) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Top Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
            Quiz Arena
          </h1>
          <p className="text-zinc-500 text-sm">
            Test your active recall across multiple categories with randomized multiple-choice questions, instant conceptual explanations, and adaptive recall ratings.
          </p>
        </div>

        {/* Configuration Card */}
        <div className="max-w-2xl mx-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-4 sm:p-6 lg:p-8 shadow-xs space-y-6">
          {/* Category Multi-Select Grid */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Select Categories ({selectedDeckIds.length} of {decks.length})
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    sounds.playSelect();
                    const allIds = decks.map((d) => d.id);
                    setSelectedDeckIds(allIds);
                    setCookie("flashfire_quiz_categories", JSON.stringify(allIds), 365);
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
                    setCookie("flashfire_quiz_categories", JSON.stringify([]), 365);
                  }}
                  className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors cursor-pointer"
                >
                  Clear All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {decks.map((deck) => {
                const isSelected = selectedDeckIds.includes(deck.id);
                const deckCardsCount = cards.filter((c) => c.deckId === deck.id).length;

                return (
                  <button
                    key={deck.id}
                    type="button"
                    onClick={() => {
                      sounds.playSelect();
                      const next = isSelected
                        ? selectedDeckIds.filter((id) => id !== deck.id)
                        : [...selectedDeckIds, deck.id];
                      setSelectedDeckIds(next);
                      setCookie("flashfire_quiz_categories", JSON.stringify(next), 365);
                    }}
                    className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer min-h-[50px] ${
                      isSelected
                        ? "bg-zinc-900 dark:bg-zinc-100 border-zinc-900 dark:border-zinc-100 text-white dark:text-zinc-900 shadow-xs"
                        : "bg-white dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-900"
                            : "bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
                        }`}
                      >
                        <DeckIcon deckId={deck.id} className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold truncate leading-tight">
                          {deck.title}
                        </div>
                        <div
                          className={`text-[11px] mt-0.5 ${
                            isSelected
                              ? "text-zinc-300 dark:text-zinc-600"
                              : "text-zinc-400 dark:text-zinc-500"
                          }`}
                        >
                          {deckCardsCount} questions
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ml-2 transition-all ${
                        isSelected
                          ? "bg-white dark:bg-zinc-900 border-transparent text-zinc-900 dark:text-white"
                          : "border-zinc-300 dark:border-zinc-600 bg-transparent"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recall Difficulty Multi-Select Section */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-zinc-500" />
                  Filter by Previous Recall ({selectedDifficulties.length} of 5 selected)
                </label>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Select questions based on your past confidence ratings and review history
                </div>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-1.5 flex-wrap self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => {
                    sounds.playSelect();
                    const all = [...ALL_DIFFICULTIES];
                    setSelectedDifficulties(all);
                    setCookie("flashfire_quiz_difficulties", JSON.stringify(all), 365);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                    selectedDifficulties.length === ALL_DIFFICULTIES.length
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sounds.playSelect();
                    const weak: RecallDifficulty[] = ["forgot", "hard"];
                    setSelectedDifficulties(weak);
                    setCookie("flashfire_quiz_difficulties", JSON.stringify(weak), 365);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                    selectedDifficulties.length === 2 &&
                    selectedDifficulties.includes("forgot") &&
                    selectedDifficulties.includes("hard")
                      ? "bg-rose-600 text-white font-semibold shadow-xs"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400"
                  }`}
                >
                  Weak Spots Only
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sounds.playSelect();
                    const mastered: RecallDifficulty[] = ["good", "easy"];
                    setSelectedDifficulties(mastered);
                    setCookie("flashfire_quiz_difficulties", JSON.stringify(mastered), 365);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                    selectedDifficulties.length === 2 &&
                    selectedDifficulties.includes("good") &&
                    selectedDifficulties.includes("easy")
                      ? "bg-emerald-600 text-white font-semibold shadow-xs"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                >
                  Mastered Only
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sounds.playSelect();
                    const unseen: RecallDifficulty[] = ["new"];
                    setSelectedDifficulties(unseen);
                    setCookie("flashfire_quiz_difficulties", JSON.stringify(unseen), 365);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                    selectedDifficulties.length === 1 && selectedDifficulties[0] === "new"
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  Unseen Only
                </button>
              </div>
            </div>

            {/* 5-Column Difficulty Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {DIFFICULTY_CONFIG.map((item) => {
                const isSelected = selectedDifficulties.includes(item.key);
                const count = difficultyCounts[item.key] || 0;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      sounds.playSelect();
                      const next = isSelected
                        ? selectedDifficulties.filter((k) => k !== item.key)
                        : [...selectedDifficulties, item.key];
                      setSelectedDifficulties(next);
                      setCookie("flashfire_quiz_difficulties", JSON.stringify(next), 365);
                    }}
                    className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[66px] cursor-pointer group relative ${
                      isSelected
                        ? item.activeClass
                        : "bg-white dark:bg-zinc-800/70 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="text-xs font-semibold flex items-center gap-1.5 leading-none">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${item.dotClass}`} />
                        <span>{item.label}</span>
                      </span>
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] transition-all shrink-0 ${
                          isSelected
                            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                            : "border border-zinc-300 dark:border-zinc-600 bg-transparent"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-1 gap-1">
                      <span
                        className={`text-[10px] truncate leading-tight ${
                          isSelected ? "opacity-90 font-medium" : "text-zinc-400 dark:text-zinc-500"
                        }`}
                      >
                        {item.desc}
                      </span>
                      <span
                        className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                          isSelected
                            ? item.badgeClass
                            : count > 0
                            ? "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                            : "bg-zinc-50 dark:bg-zinc-800/50 text-zinc-400 opacity-60"
                        }`}
                      >
                        {count}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Empty Warning */}
            {totalSelectedCards === 0 && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-200 text-xs flex items-start gap-2 animate-in fade-in duration-200">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                <span>
                  No questions match your current combination of categories and difficulty levels. Select more difficulties or categories above to continue.
                </span>
              </div>
            )}
          </div>

          {/* Question Count Pills */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Number of Questions
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[5, 10, 20, -1].map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => {
                    sounds.playSelect();
                    setQuestionCount(cnt);
                    setCookie("flashfire_quiz_count", String(cnt), 365);
                  }}
                  className={`py-2.5 sm:py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer min-h-[44px] ${
                    questionCount === cnt
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs"
                      : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400"
                  }`}
                >
                  {cnt === -1 ? "All Available" : `${cnt} Questions`}
                </button>
              ))}
            </div>
          </div>

          {/* Timed Mode Toggle & Duration (Enabled by default) */}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <Timer className="w-4 h-4 text-zinc-500" />
                  Timed Sprint
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Animated visual timer per question for high-speed recall training
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  sounds.playSelect();
                  const next = !isTimed;
                  setIsTimed(next);
                  setCookie("flashfire_quiz_timed", String(next), 365);
                }}
                className={`w-12 h-7 rounded-full transition-colors relative p-0.5 shrink-0 ml-3 cursor-pointer ${
                  isTimed ? "bg-zinc-900 dark:bg-zinc-100" : "bg-zinc-200 dark:bg-zinc-700"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white dark:bg-zinc-900 transition-transform ${
                    isTimed ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {isTimed && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <span className="text-xs text-zinc-500 font-medium">Timer duration:</span>
                <div className="grid grid-cols-4 gap-1.5 w-full sm:w-auto">
                  {[15, 30, 45, 60].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => {
                        sounds.playSelect();
                        setTimerSeconds(sec);
                        setCookie("flashfire_quiz_seconds", String(sec), 365);
                      }}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-semibold transition-all cursor-pointer text-center ${
                        timerSeconds === sec
                          ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-xs"
                          : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400"
                      }`}
                    >
                      {sec}s
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SRS Sync Toggle (Default disabled) */}
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500 fill-current" />
                Sync with Spaced Repetition (SRS)
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Update card repetition intervals automatically based on your quiz answers
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                sounds.playSelect();
                const next = !syncWithSRS;
                setSyncWithSRS(next);
                setCookie("flashfire_quiz_srs", String(next), 365);
              }}
              className={`w-12 h-7 rounded-full transition-colors relative p-0.5 shrink-0 ml-3 cursor-pointer ${
                syncWithSRS ? "bg-zinc-900 dark:bg-zinc-100" : "bg-zinc-200 dark:bg-zinc-700"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white dark:bg-zinc-900 transition-transform ${
                  syncWithSRS ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Start Button */}
          <div className="pt-2">
            <button
              onClick={() => startQuiz()}
              disabled={totalSelectedCards === 0}
              className="w-full py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-40 shadow-xs active:scale-98 cursor-pointer min-h-[48px]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>
                {totalSelectedCards === 0
                  ? "No questions match selected filters"
                  : `Start Quiz (${Math.min(questionCount === -1 ? totalSelectedCards : questionCount, totalSelectedCards)} of ${totalSelectedCards} questions ready)`}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ================= 2. RESULTS / SUMMARY SCREEN =================
  if (isFinished) {
    const accuracy = questions.length > 0 ? Math.round((score / questions.length) * 100) : 100;
    const grade =
      accuracy >= 90 ? "Mastery" : accuracy >= 75 ? "Great Recall" : accuracy >= 50 ? "Keep Practicing" : "Needs Review";

    const missedQuestions = questions.filter((q) => !q.isUserCorrect);
    const correctQuestions = questions.filter((q) => q.isUserCorrect);
    const missedCards = missedQuestions.map((q) => q.card);

    const displayedQuestions =
      resultsFilter === "missed"
        ? missedQuestions
        : resultsFilter === "correct"
        ? correctQuestions
        : questions;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto px-4 py-8"
      >
        {/* Victory Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center mb-4 shadow-md">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Quiz Complete!
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            Performance Level: <span className="font-semibold text-zinc-900 dark:text-zinc-100">{grade}</span>
          </p>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center shadow-xs">
            <div className="text-xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              {score} / {questions.length}
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Total Score</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center shadow-xs">
            <div className="text-xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {accuracy}%
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Accuracy</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center shadow-xs">
            <div className="text-xl sm:text-3xl font-bold text-amber-500">
              {streak}
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-400 mt-1">Max Streak</div>
          </div>
        </div>

        {/* Missed Questions Recovery Banner */}
        {missedQuestions.length > 0 && (
          <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <span>{missedQuestions.length} Questions Missed</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-700 dark:text-amber-300">
                      Focus Review
                    </span>
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
                    Review these missed questions in 3D interactive flashcards or save them as a focused study deck.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0 w-full sm:w-auto">
                {onStartStudy && (
                  <button
                    onClick={() => {
                      sounds.playSelect();
                      const fallbackDeck =
                        decks.find((d) => selectedDeckIds.includes(d.id)) ||
                        decks[0] || {
                          id: "deck-review",
                          title: "Quiz Mistakes Review",
                          description: "Focused session",
                          icon: "🎯",
                          color: "#111111",
                          tags: ["Review"],
                          createdAt: Date.now(),
                          updatedAt: Date.now(),
                        };
                      onStartStudy(fallbackDeck, "srs", missedCards, `Review ${missedCards.length} Quiz Mistakes`);
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer min-h-[44px]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Review in 3D Cards
                  </button>
                )}
                <button
                  onClick={handleSaveMissedAsDeck}
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium text-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px]"
                >
                  <FolderPlus className="w-3.5 h-3.5" />
                  Save as Deck
                </button>
              </div>
            </div>

            {savedDeckNotice && (
              <div className="mt-3 pt-3 border-t border-amber-500/20 text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {savedDeckNotice}
              </div>
            )}
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 w-full">
          <button
            onClick={() => startQuiz()}
            className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer min-h-[46px]"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <button
            onClick={() => {
              sounds.playSelect();
              setIsQuizActive(false);
            }}
            className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center cursor-pointer min-h-[46px]"
          >
            Configure New Quiz
          </button>
          {onExit && (
            <button
              onClick={onExit}
              className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl text-zinc-500 hover:text-zinc-900 text-sm font-medium transition-colors cursor-pointer flex items-center justify-center min-h-[46px]"
            >
              Exit to Decks
            </button>
          )}
        </div>

        {/* Review Answers Breakdown */}
        <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span>Question Review</span>
              <span className="text-xs font-normal text-zinc-400">({questions.length} items)</span>
            </h3>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl text-xs font-medium">
              <button
                onClick={() => {
                  sounds.playSelect();
                  setResultsFilter("all");
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  resultsFilter === "all"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                All ({questions.length})
              </button>
              <button
                onClick={() => {
                  sounds.playSelect();
                  setResultsFilter("missed");
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  resultsFilter === "missed"
                    ? "bg-white dark:bg-zinc-900 text-rose-600 dark:text-rose-400 shadow-xs font-semibold"
                    : "text-zinc-500 hover:text-rose-600"
                }`}
              >
                <XCircle className="w-3 h-3" />
                Missed ({missedQuestions.length})
              </button>
              <button
                onClick={() => {
                  sounds.playSelect();
                  setResultsFilter("correct");
                }}
                className={`px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  resultsFilter === "correct"
                    ? "bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-xs font-semibold"
                    : "text-zinc-500 hover:text-emerald-600"
                }`}
              >
                <CheckCircle2 className="w-3 h-3" />
                Correct ({correctQuestions.length})
              </button>
            </div>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {displayedQuestions.map((q, i) => (
              <div key={q.card.id} className="py-4 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                    <span className="text-zinc-400 font-mono text-xs mr-2">{i + 1}.</span>
                    <FormattedText text={q.prompt} />
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {q.isUserCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded-full">
                        <XCircle className="w-3.5 h-3.5" /> Missed
                      </span>
                    )}
                  </div>
                </div>

                {q.card.codeSnippet && (
                  <div className="my-2 max-w-xl">
                    <CodeBlockView
                      code={q.card.codeSnippet}
                      language={q.card.codeLanguage || "pseudocode"}
                    />
                  </div>
                )}

                <div className="text-xs space-y-2 pl-5">
                  <div className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-medium">
                    <span className="font-semibold">Correct Answer:</span>
                    <span>{q.options.find((o) => o.isCorrect)?.text}</span>
                  </div>

                  {!q.isUserCorrect && q.selectedOptionId && (
                    <div className="text-rose-600 dark:text-rose-400 font-medium">
                      <span className="font-semibold">Your Selection:</span>{" "}
                      <span className="line-through">{q.options.find((o) => o.id === q.selectedOptionId)?.text}</span>
                    </div>
                  )}

                  {q.explanation && (
                    <div className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed italic bg-zinc-50 dark:bg-zinc-800/50 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800">
                      <FormattedText text={q.explanation} />
                    </div>
                  )}

                  {/* Option Inspector in Review */}
                  {q.options.length > 1 && (() => {
                    const breakdown = getOptionBreakdown(q.prompt, q.options);
                    const meaningfulDistractors = breakdown.filter((b) => !b.isCorrect && b.meaning);
                    if (meaningfulDistractors.length === 0) return null;
                    return (
                      <details className="group pt-1">
                        <summary className="text-[11px] font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer list-none flex items-center gap-1 transition-colors">
                          <Info className="w-3 h-3 text-blue-500 shrink-0" />
                          <span>Inspect other options ({meaningfulDistractors.length} distractors)</span>
                        </summary>
                        <div className="mt-2 space-y-1.5 pl-2.5 border-l-2 border-zinc-200 dark:border-zinc-700">
                          {breakdown
                            .filter((opt) => opt.isCorrect || opt.meaning)
                            .map((opt) => (
                              <div key={opt.id} className="text-[11px] text-zinc-600 dark:text-zinc-400">
                                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                                  [{opt.id}] <FormattedText text={opt.text} as="span" className="inline text-inherit font-semibold" />:
                                </span>{" "}
                                <FormattedText text={opt.isCorrect ? "Correct answer." : (opt.meaning || "")} />
                              </div>
                            ))}
                        </div>
                      </details>
                    );
                  })()}

                  {/* Category & Status on Card */}
                  <div className="pt-1.5 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400 font-mono">
                    <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                      <DeckIcon deckId={q.card.deckId} className="w-3 h-3" />
                      <span>{decks.find((d) => d.id === q.card.deckId)?.title || "Accenture Technical"}</span>
                    </span>
                    {(() => {
                      const meta = getCardRecallMetadata(q.card, logsByCard);
                      const styles = {
                        forgot: "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300",
                        hard: "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300",
                        good: "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300",
                        easy: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
                        new: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                      }[meta.difficulty];
                      return (
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${styles}`}>
                          Past: {meta.difficulty === "new" ? "Unseen" : meta.difficulty.toUpperCase()}
                        </span>
                      );
                    })()}
                    {q.userRating && (
                      <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                        New: {q.userRating === 1 ? "Forgot" : q.userRating === 2 ? "Hard" : q.userRating === 3 ? "Good" : "Easy"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // ================= 3. ACTIVE QUESTION SCREEN =================
  return (
    <div className="max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
      {/* Top Header Bar */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-4">
        <button
          onClick={() => {
            sounds.playSelect();
            setIsQuizActive(false);
          }}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[36px]"
        >
          ← Quit Quiz
        </button>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Streak Counter */}
          {streak > 1 && (
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-500 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>{streak} Streak!</span>
            </div>
          )}

          {/* Timed Circular / Glowing Progress Countdown */}
          {isTimed && (
            <div
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border text-xs font-mono font-semibold shadow-xs transition-colors ${
                timeLeft <= 5
                  ? "bg-rose-50 text-rose-600 border-rose-300 dark:bg-rose-950/50 dark:border-rose-800 animate-pulse"
                  : timeLeft <= 10
                  ? "bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/40 dark:border-amber-800"
                  : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700"
              }`}
            >
              <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 -rotate-90" viewBox="0 0 20 20">
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    className="opacity-25"
                  />
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 8}
                    strokeDashoffset={2 * Math.PI * 8 * (1 - timeLeft / timerSeconds)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
              </div>
              <span>{timeLeft}s</span>
            </div>
          )}

          {/* Score Pill */}
          <div className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            Score: {score}
          </div>

          <span className="text-xs font-mono text-zinc-400">
            {currentIndex + 1}/{questions.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-4 sm:mb-6">
        <div
          className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-sm mb-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1.5">
              <DeckIcon deckId={currentQ?.card.deckId || ""} className="w-3.5 h-3.5" />
              <span>Question {currentIndex + 1}</span>
            </span>
            {(() => {
              if (!currentQ) return null;
              const meta = getCardRecallMetadata(currentQ.card, logsByCard);
              if (meta.difficulty === "new") {
                return (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    Unseen
                  </span>
                );
              }
              const styles = {
                forgot: "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60",
                hard: "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60",
                good: "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60",
                easy: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60",
              }[meta.difficulty];
              return (
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${styles}`}>
                  Past: {meta.difficulty.toUpperCase()}
                </span>
              );
            })()}
          </div>
          {syncWithSRS && (
            <div className="flex items-center gap-1 text-[11px] font-medium text-zinc-400">
              <Zap className="w-3 h-3 text-amber-500" />
              <span>SRS Active</span>
            </div>
          )}
        </div>

        <div className="text-base sm:text-lg md:text-xl font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed mb-4">
          {currentQ && <FormattedText text={currentQ.prompt} />}
        </div>

        {/* Code Snippet View */}
        {currentQ?.card.codeSnippet && (
          <div className="mb-5 sm:mb-6 overflow-x-auto">
            <CodeBlockView
              code={currentQ.card.codeSnippet}
              language={currentQ.card.codeLanguage || "pseudocode"}
            />
          </div>
        )}

        {/* Options */}
        <div className="flex flex-col gap-2.5">
          {currentQ?.options.map((opt, idx) => {
            const isSelected = selectedOptionId === opt.id;
            let btnStyle =
              "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-400 text-zinc-800 dark:text-zinc-200";

            if (isAnswered) {
              if (opt.isCorrect) {
                btnStyle =
                  "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium";
              } else if (isSelected && !opt.isCorrect) {
                btnStyle =
                  "border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-medium";
              } else {
                btnStyle =
                  "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-400 opacity-60";
              }
            }

            return (
              <button
                key={opt.id}
                disabled={isAnswered}
                onClick={() => handleSelectOption(opt.id)}
                className={`p-3 sm:p-3.5 rounded-xl border text-sm text-left transition-all flex items-center justify-between shadow-xs cursor-pointer min-h-[48px] ${btnStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono font-medium flex items-center justify-center shrink-0">
                    {opt.id && ["A", "B", "C", "D"].includes(opt.id.toUpperCase())
                      ? opt.id.toUpperCase()
                      : String.fromCharCode(65 + idx)}
                  </span>
                  <FormattedText text={opt.text} as="span" className="inline text-sm leading-normal text-inherit" />
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

        {/* Answer Explanation & Recall Rating */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 sm:mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-4"
            >
              {/* Recall Self-Rating Controls */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Rate recall:
                  </span>
                  <span className="hidden sm:inline text-[11px] text-zinc-400">
                    Keys <kbd className="px-1 py-0.2 bg-zinc-200 dark:bg-zinc-700 rounded font-mono text-[10px]">1</kbd>–<kbd className="px-1 py-0.2 bg-zinc-200 dark:bg-zinc-700 rounded font-mono text-[10px]">4</kbd>
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => handleUserSelfRate(1)}
                    className={`py-2 px-1 rounded-lg border text-xs font-medium transition-all flex flex-col items-center justify-center cursor-pointer ${
                      currentQ?.userRating === 1
                        ? "bg-rose-600 text-white border-rose-600 shadow-xs"
                        : "border-rose-200 dark:border-rose-900/60 bg-white dark:bg-zinc-900 text-rose-700 dark:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                    }`}
                  >
                    <span className="font-semibold">Forgot</span>
                    <span className="text-[10px] opacity-75 font-mono">Reset</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleUserSelfRate(2)}
                    className={`py-2 px-1 rounded-lg border text-xs font-medium transition-all flex flex-col items-center justify-center cursor-pointer ${
                      currentQ?.userRating === 2
                        ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                        : "border-amber-200 dark:border-amber-900/60 bg-white dark:bg-zinc-900 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40"
                    }`}
                  >
                    <span className="font-semibold">Hard</span>
                    <span className="text-[10px] opacity-75 font-mono">Tricky</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleUserSelfRate(3)}
                    className={`py-2 px-1 rounded-lg border text-xs font-medium transition-all flex flex-col items-center justify-center cursor-pointer ${
                      currentQ?.userRating === 3
                        ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                        : "border-blue-200 dark:border-blue-900/60 bg-white dark:bg-zinc-900 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                    }`}
                  >
                    <span className="font-semibold">Good</span>
                    <span className="text-[10px] opacity-75 font-mono">Solid</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleUserSelfRate(4)}
                    className={`py-2 px-1 rounded-lg border text-xs font-medium transition-all flex flex-col items-center justify-center cursor-pointer ${
                      currentQ?.userRating === 4
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                        : "border-emerald-200 dark:border-emerald-900/60 bg-white dark:bg-zinc-900 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                    }`}
                  >
                    <span className="font-semibold">Easy</span>
                    <span className="text-[10px] opacity-75 font-mono">Mastered</span>
                  </button>
                </div>
              </div>

              {/* SRS Real-time Feedback Pill (If SRS is enabled) */}
              {syncWithSRS && lastSrsStatus && (
                <div
                  className={`p-3 rounded-xl border text-xs flex items-center justify-between gap-2 ${
                    lastSrsStatus.isLapse
                      ? "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-300"
                      : "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {lastSrsStatus.isLapse ? (
                      <Zap className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 fill-current" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                    <span>
                      {lastSrsStatus.isLapse ? (
                        <>
                          <strong>Queued for Spaced Repetition Review:</strong> Interval reset to 0d.
                        </>
                      ) : (
                        <>
                          <strong>SRS Interval Advanced:</strong> Next review in{" "}
                          {lastSrsStatus.interval === 0 ? "< 10m" : `${lastSrsStatus.interval}d`} (Reps: {lastSrsStatus.reps}).
                        </>
                      )}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] opacity-75 shrink-0 hidden sm:inline">
                    {lastSrsStatus.isLapse
                      ? `Lapse #${lastSrsStatus.lapses}`
                      : `Ease: ${currentQ?.card.srs.easeFactor || 2.5}`}
                  </span>
                </div>
              )}

              {/* Conceptual Explanation Box */}
              <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-800/40 p-4 transition-all">
                {/* Header row */}
                <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-zinc-200/60 dark:border-zinc-700/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    Solution & Concept
                  </span>
                </div>

                {/* Explanation Content */}
                {isAiLoading && !quickExplanation && !currentQ?.quickExplanation ? (
                  <div className="flex items-center gap-2 py-2 text-xs text-zinc-500 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                    <span>Analyzing concept...</span>
                  </div>
                ) : (
                  <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <FormattedText
                      text={
                        quickExplanation ||
                        currentQ?.quickExplanation ||
                        currentQ?.explanation ||
                        currentQ?.card.back ||
                        ""
                      }
                    />
                  </div>
                )}

                {/* Option Inspector: What other options mean */}
                {currentQ && currentQ.options.length > 1 && (() => {
                  const breakdown = getOptionBreakdown(currentQ.prompt, currentQ.options);
                  const meaningfulDistractors = breakdown.filter((b) => !b.isCorrect && b.meaning);
                  if (meaningfulDistractors.length === 0) return null;

                  return (
                    <div className="mt-3.5 pt-3 border-t border-zinc-200/60 dark:border-zinc-700/50">
                      <button
                        type="button"
                        onClick={() => {
                          sounds.playSelect();
                          setShowAllOptionsBreakdown((prev) => !prev);
                        }}
                        className="w-full flex items-center justify-between text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 py-1 cursor-pointer transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>
                            {showAllOptionsBreakdown
                              ? "Hide option meanings & roles"
                              : `What do the other options mean? (${meaningfulDistractors.length} distractors)`}
                          </span>
                        </span>
                        {showAllOptionsBreakdown ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {showAllOptionsBreakdown && (
                        <div className="mt-2.5 space-y-2">
                          {breakdown
                            .filter((opt) => opt.isCorrect || opt.meaning)
                            .map((opt) => (
                              <div
                                key={opt.id}
                                className={`p-2.5 rounded-xl border text-xs leading-relaxed transition-all ${
                                  opt.isCorrect
                                    ? "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-950 dark:text-emerald-100"
                                    : opt.id === selectedOptionId
                                    ? "border-rose-200 dark:border-rose-900/60 bg-rose-50/60 dark:bg-rose-950/20 text-rose-950 dark:text-rose-100"
                                    : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1.5 font-semibold">
                                  <span className="flex items-center gap-1.5">
                                    <span className="font-mono text-[11px] px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800">
                                      [{opt.id}]
                                    </span>
                                    <FormattedText text={opt.text} as="span" className="inline text-inherit font-semibold" />
                                  </span>
                                  {opt.isCorrect && (
                                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40">
                                      Correct Answer
                                    </span>
                                  )}
                                  {opt.id === selectedOptionId && !opt.isCorrect && (
                                    <span className="text-[10px] text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-900/40">
                                      Your Choice
                                    </span>
                                  )}
                                </div>
                                {opt.meaning && (
                                  <div className="mt-1 text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal pl-6">
                                    <FormattedText text={opt.meaning} />
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Navigation & Next Button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="hidden sm:inline text-xs text-zinc-400">
                  Press <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[10px]">Space</kbd> or <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 font-mono text-[10px]">Enter</kbd> to continue
                </span>
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer min-h-[48px]"
                >
                  <span>{currentIndex + 1 < questions.length ? "Next Question" : "View Summary"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
