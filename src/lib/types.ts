export type CardType = 'basic' | 'cloze' | 'reversed' | 'mcq' | 'code';

export type Rating = 1 | 2 | 3 | 4; // 1: Again, 2: Hard, 3: Good, 4: Easy

export interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Flashcard {
  id: string;
  deckId: string;
  type: CardType;
  front: string;
  back: string;
  hint?: string;
  explanation?: string;
  codeSnippet?: string;
  codeLanguage?: string;
  mcqOptions?: MCQOption[];
  tags: string[];
  createdAt: number;
  updatedAt: number;

  // Spaced Repetition (SuperMemo SM-2 & FSRS parameters)
  srs: {
    reps: number;              // Consecutive successful repetitions
    interval: number;          // Days until next review
    easeFactor: number;        // Multiplier (starts at 2.5)
    lastStudied: number | null;// Timestamp in ms
    dueDate: number;           // Timestamp in ms when card is due
    lapses: number;            // Number of times card was forgotten (rated Again)
    state: 'new' | 'learning' | 'review' | 'mastered';
  };
}

export interface Deck {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
}

export interface ReviewLog {
  id: string;
  cardId: string;
  deckId: string;
  timestamp: number;
  rating: Rating;
  timeSpentMs: number;
  intervalBefore: number;
  intervalAfter: number;
}

export interface DailyActivity {
  date: string; // YYYY-MM-DD
  count: number;
  successCount: number;
}

export interface StudyStats {
  totalReviews: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string | null; // YYYY-MM-DD
  totalCardsMastered: number;
}

export type StudyMode = 'srs' | 'cram' | 'match' | 'quiz' | 'browse';
