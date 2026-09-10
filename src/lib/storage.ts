'use client';

import { Deck, Flashcard, CardType, MCQOption, ReviewLog, DailyActivity, StudyStats } from './types';
import { ACCENTURE_DECKS, ACCENTURE_CARDS } from './accentureData';

const STORAGE_KEYS = {
  DECKS: 'flashfire_decks_v6',
  CARDS: 'flashfire_cards_v6',
  LOGS: 'flashfire_review_logs_v6',
  STATS: 'flashfire_stats_v6',
};

// Initial Pre-loaded Decks & Cards: 587 Real Accenture Technical MCQs across 6 Modules
const INITIAL_DECKS: Deck[] = ACCENTURE_DECKS;
const INITIAL_CARDS: Flashcard[] = ACCENTURE_CARDS;

type StorageListener = () => void;
const listeners: Set<StorageListener> = new Set();

function emitChange() {
  listeners.forEach((l) => l());
}

export const storage = {
  subscribe(listener: StorageListener): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  getDecks(): Deck[] {
    if (typeof window === 'undefined') return INITIAL_DECKS;
    let raw = localStorage.getItem(STORAGE_KEYS.DECKS);
    if (!raw) {
      const legacy =
        localStorage.getItem('flashfire_decks_v5') ||
        localStorage.getItem('flashfire_decks_v4') ||
        localStorage.getItem('flashfire_decks_v3') ||
        localStorage.getItem('flashfire_decks_v2') ||
        localStorage.getItem('flashfire_decks');
      if (legacy) raw = legacy;
    }
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.DECKS, JSON.stringify(INITIAL_DECKS));
      return INITIAL_DECKS;
    }
    try {
      const storedDecks: Deck[] = JSON.parse(raw);
      // Synchronize deck metadata (title, descriptions, questions count, tags) with INITIAL_DECKS
      const initialMap = new Map<string, Deck>();
      INITIAL_DECKS.forEach((d) => initialMap.set(d.id, d));

      const updatedDecks = storedDecks.map((d) => {
        const init = initialMap.get(d.id);
        if (init) {
          return {
            ...d,
            title: init.title,
            description: init.description,
            icon: init.icon,
            color: init.color,
            tags: init.tags,
          };
        }
        return d;
      });

      // Also ensure any newly added default decks exist
      INITIAL_DECKS.forEach((init) => {
        if (!updatedDecks.some((d) => d.id === init.id)) {
          updatedDecks.push(init);
        }
      });

      localStorage.setItem(STORAGE_KEYS.DECKS, JSON.stringify(updatedDecks));
      return updatedDecks;
    } catch {
      localStorage.setItem(STORAGE_KEYS.DECKS, JSON.stringify(INITIAL_DECKS));
      return INITIAL_DECKS;
    }
  },

  saveDecks(decks: Deck[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.DECKS, JSON.stringify(decks));
    emitChange();
  },

  saveDeck(deck: Deck) {
    const decks = this.getDecks();
    const idx = decks.findIndex((d) => d.id === deck.id);
    if (idx >= 0) {
      decks[idx] = { ...deck, updatedAt: Date.now() };
    } else {
      decks.push(deck);
    }
    this.saveDecks(decks);
  },

  deleteDeck(deckId: string) {
    const decks = this.getDecks().filter((d) => d.id !== deckId);
    this.saveDecks(decks);
    // Also delete associated cards
    const cards = this.getCards().filter((c) => c.deckId !== deckId);
    this.saveCards(cards);
  },

  getCards(): Flashcard[] {
    if (typeof window === 'undefined') return INITIAL_CARDS;
    let raw = localStorage.getItem(STORAGE_KEYS.CARDS);
    let needWrite = false;

    // Migrate from v5, v4, v3, v2, or v1 if v6 is not yet created
    if (!raw) {
      const legacy =
        localStorage.getItem('flashfire_cards_v5') ||
        localStorage.getItem('flashfire_cards_v4') ||
        localStorage.getItem('flashfire_cards_v3') ||
        localStorage.getItem('flashfire_cards_v2') ||
        localStorage.getItem('flashfire_cards');
      if (legacy) {
        raw = legacy;
        needWrite = true;
      }
    }

    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.CARDS, JSON.stringify(INITIAL_CARDS));
      return INITIAL_CARDS;
    }

    try {
      const cards: Flashcard[] = JSON.parse(raw);
      const initialMap = new Map<string, Flashcard>();
      INITIAL_CARDS.forEach((c) => initialMap.set(c.id, c));

      // Auto-migrate existing cards with refreshed content, segmented front, and codeSnippets
      const existingIds = new Set<string>();
      const enrichedCards = cards.map((c) => {
        existingIds.add(c.id);
        const initial = initialMap.get(c.id);
        if (!initial) return c;

        // Ensure JS cards moved to deck-web are updated
        if (['card-acc-453', 'card-acc-454', 'card-acc-455', 'card-acc-456'].includes(c.id) && c.deckId !== 'deck-web') {
          c.deckId = 'deck-web';
          needWrite = true;
        }

        const isDummy =
          !c.explanation ||
          c.explanation.trim() === c.back.trim() ||
          /^Option [A-D]:/i.test(c.explanation.trim()) ||
          c.explanation.includes('specifically satisfies the technical criteria') ||
          (c.explanation.length < 50 && initial.explanation && initial.explanation.length > c.explanation.length);

        const needsCodeUpdate =
          initial.codeSnippet !== c.codeSnippet ||
          initial.front !== c.front ||
          initial.codeLanguage !== c.codeLanguage;

        if ((isDummy && initial.explanation) || needsCodeUpdate) {
          needWrite = true;
          return {
            ...c,
            deckId: initial.deckId || c.deckId,
            explanation: initial.explanation || c.explanation,
            front: initial.front || c.front,
            back: initial.back || c.back,
            codeSnippet: initial.codeSnippet,
            codeLanguage: initial.codeLanguage,
            mcqOptions: initial.mcqOptions && initial.mcqOptions.length ? initial.mcqOptions : c.mcqOptions,
          };
        }
        return c;
      });

      // Append any new cards from INITIAL_CARDS that don't exist yet in the user's storage
      for (const initCard of INITIAL_CARDS) {
        if (!existingIds.has(initCard.id)) {
          enrichedCards.push(initCard);
          needWrite = true;
        }
      }

      if (needWrite) {
        localStorage.setItem(STORAGE_KEYS.CARDS, JSON.stringify(enrichedCards));
        try {
          localStorage.removeItem('flashfire_cards_v5');
          localStorage.removeItem('flashfire_cards_v4');
          localStorage.removeItem('flashfire_cards_v3');
          localStorage.removeItem('flashfire_cards_v2');
          localStorage.removeItem('flashfire_cards');
        } catch {}
      }

      return enrichedCards;
    } catch {
      localStorage.setItem(STORAGE_KEYS.CARDS, JSON.stringify(INITIAL_CARDS));
      return INITIAL_CARDS;
    }
  },

  saveCards(cards: Flashcard[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEYS.CARDS, JSON.stringify(cards));
    emitChange();
  },

  saveCard(card: Flashcard) {
    const cards = this.getCards();
    const idx = cards.findIndex((c) => c.id === card.id);
    if (idx >= 0) {
      cards[idx] = { ...card, updatedAt: Date.now() };
    } else {
      cards.unshift(card);
    }
    this.saveCards(cards);
  },

  deleteCard(cardId: string) {
    const cards = this.getCards().filter((c) => c.id !== cardId);
    this.saveCards(cards);
  },

  getReviewLogs(): ReviewLog[] {
    if (typeof window === 'undefined') return [];
    let raw = localStorage.getItem(STORAGE_KEYS.LOGS);
    if (!raw) {
      const legacy =
        localStorage.getItem('flashfire_review_logs_v5') ||
        localStorage.getItem('flashfire_review_logs_v4') ||
        localStorage.getItem('flashfire_review_logs_v3') ||
        localStorage.getItem('flashfire_review_logs_v2') ||
        localStorage.getItem('flashfire_review_logs');
      if (legacy) raw = legacy;
    }
    if (!raw) return [];
    try {
      const logs = JSON.parse(raw);
      localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));
      return logs;
    } catch {
      return [];
    }
  },

  addReviewLog(log: ReviewLog) {
    if (typeof window === 'undefined') return;
    const logs = this.getReviewLogs();
    logs.push(log);
    localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs));

    // Update daily activity and streak stats
    this.recordActivity(log.rating >= 3);
    emitChange();
  },

  getStats(): StudyStats {
    const defaultStats: StudyStats = {
      totalReviews: 48,
      currentStreak: 3,
      longestStreak: 7,
      lastStudyDate: new Date().toISOString().split('T')[0],
      totalCardsMastered: 12,
    };
    if (typeof window === 'undefined') return defaultStats;
    let raw = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!raw) {
      const legacy =
        localStorage.getItem('flashfire_stats_v5') ||
        localStorage.getItem('flashfire_stats_v4') ||
        localStorage.getItem('flashfire_stats_v3') ||
        localStorage.getItem('flashfire_stats_v2') ||
        localStorage.getItem('flashfire_stats');
      if (legacy) raw = legacy;
    }
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(defaultStats));
      return defaultStats;
    }
    try {
      const stats = JSON.parse(raw);
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
      return stats;
    } catch {
      return defaultStats;
    }
  },

  recordActivity(isSuccess: boolean) {
    if (typeof window === 'undefined') return;
    const stats = this.getStats();
    const today = new Date().toISOString().split('T')[0];

    stats.totalReviews += 1;
    if (stats.lastStudyDate !== today) {
      if (stats.lastStudyDate) {
        const yesterday = new Date(Date.now() - 24 * 3600 * 1000).toISOString().split('T')[0];
        if (stats.lastStudyDate === yesterday) {
          stats.currentStreak += 1;
        } else {
          stats.currentStreak = 1;
        }
      } else {
        stats.currentStreak = 1;
      }
      stats.longestStreak = Math.max(stats.longestStreak, stats.currentStreak);
      stats.lastStudyDate = today;
    }

    if (isSuccess) {
      const mastered = this.getCards().filter((c) => c.srs.state === 'mastered').length;
      stats.totalCardsMastered = mastered;
    }

    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  },

  getDailyActivity(): DailyActivity[] {
    const logs = this.getReviewLogs();
    const map: Record<string, { count: number; successCount: number }> = {};

    // Mock initial heatmap trail over past 60 days
    const now = new Date();
    for (let i = 60; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 24 * 3600 * 1000).toISOString().split('T')[0];
      // Seed occasional activity
      if (i % 3 === 0 || i % 7 === 0 || i < 5) {
        const seedCount = ((i * 13) % 15) + (i < 5 ? 8 : 2);
        map[d] = { count: seedCount, successCount: Math.round(seedCount * 0.8) };
      }
    }

    // Merge actual review logs
    logs.forEach((log) => {
      const d = new Date(log.timestamp).toISOString().split('T')[0];
      if (!map[d]) {
        map[d] = { count: 0, successCount: 0 };
      }
      map[d].count += 1;
      if (log.rating >= 3) {
        map[d].successCount += 1;
      }
    });

    return Object.entries(map).map(([date, val]) => ({
      date,
      count: val.count,
      successCount: val.successCount,
    }));
  },

  // Export all data to JSON
  exportData(): string {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      decks: this.getDecks(),
      cards: this.getCards(),
      stats: this.getStats(),
      logs: this.getReviewLogs(),
    };
    return JSON.stringify(data, null, 2);
  },

  // Import data from JSON (supports: full backup, single deck with cards, or raw card array)
  importJSON(jsonString: string, targetDeckId?: string): { success: boolean; decksCount: number; cardsCount: number; error?: string } {
    try {
      const data = JSON.parse(jsonString);

      const normalizeCard = (rawCard: Record<string, unknown>, deckId: string): Flashcard => {
        const front = String(rawCard.front ?? rawCard.question ?? rawCard.prompt ?? '').trim();
        let back = String(rawCard.back ?? rawCard.answer ?? rawCard.correctAnswer ?? '').trim();

        let mcqOptions: MCQOption[] | undefined = undefined;
        const rawOptions = rawCard.mcqOptions || rawCard.options;
        if (Array.isArray(rawOptions) && rawOptions.length >= 2) {
          const correctIdx = typeof rawCard.correctIndex === 'number' ? rawCard.correctIndex : -1;
          mcqOptions = (rawOptions as unknown[]).map((opt, i) => {
            if (typeof opt === 'object' && opt !== null && 'text' in opt) {
              const o = opt as { id?: string; text: unknown; isCorrect?: boolean };
              return {
                id: o.id || String(i + 1),
                text: String(o.text ?? ''),
                isCorrect: Boolean(o.isCorrect),
              };
            }
            const textStr = String(opt);
            const isCorrect = correctIdx === i || (back.length > 0 && textStr.toLowerCase() === back.toLowerCase());
            return {
              id: String(i + 1),
              text: textStr,
              isCorrect,
            };
          });

          // Ensure at least one option is marked correct
          const hasCorrect = mcqOptions.some((o) => o.isCorrect);
          if (!hasCorrect && mcqOptions.length > 0) {
            const matchIdx = mcqOptions.findIndex((o) => o.text.toLowerCase() === back.toLowerCase());
            if (matchIdx >= 0) {
              mcqOptions[matchIdx].isCorrect = true;
            } else {
              if (!back) back = mcqOptions[0].text;
              mcqOptions[0].isCorrect = true;
            }
          } else if (hasCorrect && !back) {
            const correctOpt = mcqOptions.find((o) => o.isCorrect);
            if (correctOpt) back = correctOpt.text;
          }
        } else if (rawOptions && typeof rawOptions === 'object') {
          // Object format: { "A": "...", "B": "...", "C": "...", "D": "..." }
          const entries = Object.entries(rawOptions as Record<string, unknown>);
          if (entries.length >= 2) {
            const rawAns = String(rawCard.answer ?? rawCard.correctAnswer ?? back ?? '').trim();
            mcqOptions = entries.map(([k, v]) => {
              const textVal = String(v ?? '');
              const isCorrect =
                k.toUpperCase() === rawAns.toUpperCase() ||
                (rawAns.length > 0 && textVal.toLowerCase() === rawAns.toLowerCase());
              return {
                id: k,
                text: textVal,
                isCorrect,
              };
            });

            const correctOpt = mcqOptions.find((o) => o.isCorrect);
            if (correctOpt) {
              if (!back || ['A', 'B', 'C', 'D', 'E'].includes(back.toUpperCase())) {
                back = correctOpt.text;
              }
            } else if (mcqOptions.length > 0) {
              mcqOptions[0].isCorrect = true;
              if (!back) back = mcqOptions[0].text;
            }
          }
        }

        const type: CardType = (rawCard.type as CardType) ||
          (mcqOptions && mcqOptions.length >= 2 ? 'mcq' :
           front.includes('{{c') ? 'cloze' :
           rawCard.codeSnippet ? 'code' : 'basic');

        return {
          id: (rawCard.id as string) || `card-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          deckId,
          type,
          front,
          back,
          hint: rawCard.hint ? String(rawCard.hint).trim() : undefined,
          explanation: rawCard.explanation
            ? String(rawCard.explanation).trim()
            : rawCard.answer
            ? `Option ${rawCard.answer}: ${back}`
            : undefined,
          codeSnippet: rawCard.codeSnippet ? String(rawCard.codeSnippet).trim() : undefined,
          codeLanguage: rawCard.codeLanguage ? String(rawCard.codeLanguage).trim() : undefined,
          mcqOptions,
          tags: Array.isArray(rawCard.tags)
            ? (rawCard.tags as string[]).map(String)
            : rawCard.tags
            ? String(rawCard.tags).split(',').map((t) => t.trim())
            : rawCard.topic
            ? [String(rawCard.topic)]
            : ['Quiz'],
          createdAt: (rawCard.createdAt as number) || Date.now(),
          updatedAt: Date.now(),
          srs: (rawCard.srs as Flashcard['srs']) || {
            reps: 0,
            interval: 0,
            easeFactor: 2.5,
            lastStudied: null,
            dueDate: Date.now(),
            lapses: 0,
            state: 'new',
          },
        };
      };

      // Case 1: Full system backup { decks: [...], cards: [...] }
      if (Array.isArray(data.decks) && Array.isArray(data.cards)) {
        this.saveDecks(data.decks);
        this.saveCards(data.cards);
        if (data.stats) {
          localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(data.stats));
        }
        if (data.logs) {
          localStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(data.logs));
        }
        emitChange();
        return { success: true, decksCount: data.decks.length, cardsCount: data.cards.length };
      }

      // Case 2: Deck package { title: "...", cards: [...] or questions: [...] }
      const candidateCards = Array.isArray(data.cards) ? data.cards : Array.isArray(data.questions) ? data.questions : null;
      if (data.title && candidateCards) {
        const newDeckId = (data.id as string) || `deck-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
        const newDeck: Deck = {
          id: newDeckId,
          title: String(data.title),
          description: String(data.description || 'Imported custom deck'),
          icon: String(data.icon || '📝'),
          color: String(data.color || '#111111'),
          tags: Array.isArray(data.tags) ? (data.tags as string[]).map(String) : ['Custom'],
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };

        const existingDecks = this.getDecks();
        const existingCards = this.getCards();
        const parsedCards = (candidateCards as Record<string, unknown>[]).map((c) => normalizeCard(c, newDeckId));

        this.saveDecks([newDeck, ...existingDecks]);
        this.saveCards([...parsedCards, ...existingCards]);
        return { success: true, decksCount: 1, cardsCount: parsedCards.length };
      }

      // Case 3: Raw array of cards or questions [ { front, back }, ... ]
      const rawCardList = Array.isArray(data)
        ? data
        : Array.isArray(data.cards)
        ? data.cards
        : Array.isArray(data.questions)
        ? data.questions
        : null;

      if (rawCardList && rawCardList.length > 0) {
        let deckId = targetDeckId;
        let createdDeck = false;

        if (!deckId) {
          const decks = this.getDecks();
          if (decks.length > 0) {
            deckId = decks[0].id;
          } else {
            deckId = `deck-${Date.now()}`;
            this.saveDecks([{
              id: deckId,
              title: 'Imported Cards',
              description: 'Deck created automatically for imported questions',
              icon: '📥',
              color: '#111111',
              tags: ['Imported'],
              createdAt: Date.now(),
              updatedAt: Date.now(),
            }]);
            createdDeck = true;
          }
        }

        const parsedCards = (rawCardList as Record<string, unknown>[]).map((c) => normalizeCard(c, deckId!));
        const existingCards = this.getCards();
        this.saveCards([...parsedCards, ...existingCards]);
        return { success: true, decksCount: createdDeck ? 1 : 0, cardsCount: parsedCards.length };
      }

      return {
        success: false,
        decksCount: 0,
        cardsCount: 0,
        error: 'JSON must be a full backup ({decks, cards}), a deck object ({title, cards: [...]}), or an array of cards/questions ([{front, back}])',
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown JSON parse error';
      return { success: false, decksCount: 0, cardsCount: 0, error: message };
    }
  },

  // Import cards from CSV text (format: Front, Back, Tags or Tab-separated)
  importCSV(deckId: string, csvContent: string): number {
    const lines = csvContent.split(/\r?\n/).filter((l) => l.trim().length > 0);
    const newCards: Flashcard[] = [];

    for (const line of lines) {
      // Determine separator (comma or tab)
      const separator = line.includes('\t') ? '\t' : ',';
      const parts = line.split(separator).map((s) => s.trim().replace(/^["']|["']$/g, ''));

      if (parts.length >= 2) {
        const front = parts[0];
        const back = parts[1];
        const tags = parts[2] ? parts[2].split(';').map((t) => t.trim()) : ['Imported'];

        if (front && back) {
          newCards.push({
            id: `card-csv-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            deckId,
            type: front.includes('{{c') ? 'cloze' : 'basic',
            front,
            back,
            tags,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            srs: {
              reps: 0,
              interval: 0,
              easeFactor: 2.5,
              lastStudied: null,
              dueDate: Date.now(),
              lapses: 0,
              state: 'new',
            },
          });
        }
      }
    }

    if (newCards.length > 0) {
      const existing = this.getCards();
      this.saveCards([...newCards, ...existing]);
    }

    return newCards.length;
  },
};
