import { Flashcard, Rating } from './types';

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;

export interface SRSResult {
  reps: number;
  interval: number;
  easeFactor: number;
  lastStudied: number | null;
  dueDate: number;
  lapses: number;
  state: 'new' | 'learning' | 'review' | 'mastered';
}

/**
 * SuperMemo SM-2 & modern FSRS-inspired interval scheduler
 */
export function calculateNextReview(card: Flashcard, rating: Rating, now = Date.now()): SRSResult {
  const current = card.srs;
  let reps = current.reps;
  let interval = current.interval;
  let easeFactor = current.easeFactor || DEFAULT_EASE_FACTOR;
  let lapses = current.lapses || 0;
  let state = current.state;

  if (rating === 1) {
    // Again: Forgotten
    reps = 0;
    interval = 0; // Immediate re-test / 10 minutes in learning session
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor - 0.2);
    lapses += 1;
    state = 'learning';
  } else if (rating === 2) {
    // Hard: Struggled but recalled
    reps += 1;
    if (interval === 0) {
      interval = 1;
    } else {
      interval = Math.max(1, Math.round(interval * 1.2));
    }
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor - 0.15);
    state = reps >= 4 ? 'review' : 'learning';
  } else if (rating === 3) {
    // Good: Standard correct recall
    reps += 1;
    if (reps === 1) {
      interval = 1;
    } else if (reps === 2) {
      interval = 3;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    state = interval >= 21 ? 'mastered' : reps >= 3 ? 'review' : 'learning';
  } else if (rating === 4) {
    // Easy: Quick effortless recall
    reps += 1;
    if (reps === 1) {
      interval = 3;
    } else if (reps === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor * 1.3 + 1);
    }
    easeFactor = easeFactor + 0.15;
    state = interval >= 14 ? 'mastered' : 'review';
  }

  // Calculate new due date timestamp
  let dueOffsetMs: number;
  if (interval === 0) {
    // 10 minutes for immediate learning
    dueOffsetMs = 10 * 60 * 1000;
  } else {
    // Days to milliseconds
    dueOffsetMs = interval * 24 * 60 * 60 * 1000;
  }

  const dueDate = now + dueOffsetMs;

  return {
    reps,
    interval,
    easeFactor: Number(easeFactor.toFixed(2)),
    lastStudied: now,
    dueDate,
    lapses,
    state,
  };
}

/**
 * Generates user-friendly preview strings for interval buttons (e.g., "< 1m", "1d", "3d", "8d")
 */
export function getIntervalPreview(card: Flashcard): Record<Rating, string> {
  const ratings: Rating[] = [1, 2, 3, 4];
  const previews: Record<Rating, string> = {
    1: '< 10m',
    2: '1d',
    3: '3d',
    4: '6d',
  };

  for (const r of ratings) {
    const res = calculateNextReview(card, r);
    if (res.interval === 0) {
      previews[r] = '< 10m';
    } else if (res.interval === 1) {
      previews[r] = '1d';
    } else if (res.interval < 30) {
      previews[r] = `${res.interval}d`;
    } else if (res.interval < 365) {
      previews[r] = `${(res.interval / 30).toFixed(1)}mo`;
    } else {
      previews[r] = `${(res.interval / 365).toFixed(1)}y`;
    }
  }

  return previews;
}

/**
 * Filter due cards from a list
 */
export function getDueCards(cards: Flashcard[], now = Date.now()): Flashcard[] {
  return cards
    .filter((c) => c.srs.dueDate <= now || c.srs.state === 'new')
    .sort((a, b) => {
      // Prioritize new cards or cards with higher lapses and older due dates
      if (a.srs.state === 'new' && b.srs.state !== 'new') return -1;
      if (b.srs.state === 'new' && a.srs.state !== 'new') return 1;
      return a.srs.dueDate - b.srs.dueDate;
    });
}
