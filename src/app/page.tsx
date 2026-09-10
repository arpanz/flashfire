'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Deck, Flashcard, StudyStats, DailyActivity } from '../lib/types';
import { storage } from '../lib/storage';
import { sounds } from '../lib/sound';
import { Navbar } from '../components/Navbar';
import { DeckManager } from '../components/DeckManager';
import { CardBrowser } from '../components/CardBrowser';
import { AnalyticsView } from '../components/AnalyticsView';
import { StudySession } from '../components/StudySession';
import { MatchGame } from '../components/MatchGame';
import { QuizHub } from '../components/QuizHub';
import { RevisionHub } from '../components/RevisionHub';
import { CardEditorModal } from '../components/CardEditorModal';
import { ImportExportModal } from '../components/ImportExportModal';
import { KeyboardShortcutsModal } from '../components/KeyboardShortcutsModal';

export default function Home() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [stats, setStats] = useState<StudyStats>({
    totalReviews: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: null,
    totalCardsMastered: 0,
  });
  const [activity, setActivity] = useState<DailyActivity[]>([]);

  // Navigation & Study States
  const [currentTab, setCurrentTab] = useState<'quiz' | 'decks' | 'revision' | 'cards' | 'analytics'>('quiz');
  const [activeStudy, setActiveStudy] = useState<{
    deck: Deck;
    mode: 'srs' | 'cram';
    customCards?: Flashcard[];
    sessionTitle?: string;
  } | null>(null);
  const [activeMatchDeck, setActiveMatchDeck] = useState<Deck | null>(null);
  const [activeQuizConfig, setActiveQuizConfig] = useState<{
    deck?: Deck | null;
    customCards?: Flashcard[];
    title?: string;
  } | null>(null);

  // Modals
  const [isCardEditorOpen, setIsCardEditorOpen] = useState(false);
  const [editorDeckId, setEditorDeckId] = useState<string | undefined>(undefined);
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);
  const [isImportExportOpen, setIsImportExportOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  // Synchronize state from storage
  const syncState = useCallback(() => {
    setDecks(storage.getDecks());
    setCards(storage.getCards());
    setStats(storage.getStats());
    setActivity(storage.getDailyActivity());
  }, []);

  useEffect(() => {
    syncState();
    const unsubscribe = storage.subscribe(syncState);
    return () => unsubscribe();
  }, [syncState]);

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.key === '?') {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsCardEditorOpen(false);
        setIsImportExportOpen(false);
        setIsShortcutsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleStartStudy = (deck: Deck, mode: 'srs' | 'cram', customCards?: Flashcard[], sessionTitle?: string) => {
    setActiveMatchDeck(null);
    setActiveQuizConfig(null);
    setActiveStudy({ deck, mode, customCards, sessionTitle });
  };

  const handleStartMatch = (deck: Deck) => {
    setActiveStudy(null);
    setActiveQuizConfig(null);
    setActiveMatchDeck(deck);
  };

  const handleStartQuiz = (deck: Deck, customCards?: Flashcard[], title?: string) => {
    setActiveStudy(null);
    setActiveMatchDeck(null);
    setActiveQuizConfig({ deck, customCards, title });
    setCurrentTab('quiz');
  };

  const handleOpenAddCard = (deckId?: string) => {
    setEditingCard(null);
    setEditorDeckId(deckId);
    setIsCardEditorOpen(true);
  };

  const handleEditCard = (card: Flashcard) => {
    setEditingCard(card);
    setEditorDeckId(card.deckId);
    setIsCardEditorOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setActiveStudy(null);
          setActiveMatchDeck(null);
          setActiveQuizConfig(null);
          setCurrentTab(tab);
        }}
        streak={stats.currentStreak}
        onOpenImportExport={() => setIsImportExportOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-20 md:pb-0">
        {activeStudy ? (
          <StudySession
            deck={activeStudy.deck}
            mode={activeStudy.mode}
            customCards={activeStudy.customCards}
            sessionTitle={activeStudy.sessionTitle}
            onBack={() => setActiveStudy(null)}
            onSwitchToMatch={() => handleStartMatch(activeStudy.deck)}
            onSwitchToQuiz={() => handleStartQuiz(activeStudy.deck)}
          />
        ) : activeMatchDeck ? (
          <MatchGame
            deck={activeMatchDeck}
            onBack={() => setActiveMatchDeck(null)}
          />
        ) : (
          <AnimatePresence mode="wait">
            {currentTab === 'decks' && (
              <motion.div
                key="decks"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <DeckManager
                  decks={decks}
                  cards={cards}
                  onStartStudy={handleStartStudy}
                  onStartMatch={handleStartMatch}
                  onStartQuiz={handleStartQuiz}
                  onOpenCardEditor={(dId) => handleOpenAddCard(dId)}
                />
              </motion.div>
            )}

            {currentTab === 'cards' && (
              <motion.div
                key="cards"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <CardBrowser
                  decks={decks}
                  cards={cards}
                  onEditCard={handleEditCard}
                  onAddCard={() => handleOpenAddCard()}
                />
              </motion.div>
            )}

            {currentTab === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <QuizHub
                  decks={decks}
                  cards={cards}
                  initialDeckId={activeQuizConfig?.deck?.id}
                  customCards={activeQuizConfig?.customCards}
                  customTitle={activeQuizConfig?.title}
                  onStartStudy={(deck, mode, customCards, title) => {
                    setActiveQuizConfig(null);
                    setActiveMatchDeck(null);
                    setActiveStudy({ deck, mode, customCards, sessionTitle: title });
                  }}
                  onExit={() => {
                    setActiveQuizConfig(null);
                    setCurrentTab('decks');
                  }}
                />
              </motion.div>
            )}

            {currentTab === 'revision' && (
              <motion.div
                key="revision"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <RevisionHub
                  decks={decks}
                  cards={cards}
                  onStartStudy={handleStartStudy}
                  onStartQuiz={handleStartQuiz}
                  onSwitchToQuiz={() => {
                    setActiveQuizConfig(null);
                    setCurrentTab('quiz');
                  }}
                />
              </motion.div>
            )}

            {currentTab === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                <AnalyticsView stats={stats} cards={cards} activity={activity} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>

      {/* Modals */}
      <CardEditorModal
        isOpen={isCardEditorOpen}
        onClose={() => setIsCardEditorOpen(false)}
        deckId={editorDeckId}
        initialCard={editingCard}
        onSaved={syncState}
      />

      <ImportExportModal
        isOpen={isImportExportOpen}
        onClose={() => setIsImportExportOpen(false)}
        decks={decks}
        onDataChanged={syncState}
      />

      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      {/* Footer */}
      <footer className="w-full bg-zinc-100 dark:bg-[#101010] text-zinc-600 dark:text-[#a1a1aa] border-t border-zinc-200 dark:border-zinc-800 mt-16 py-10 pb-24 md:pb-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <div className="text-zinc-900 dark:text-white font-semibold text-sm tracking-tight">Flashfire</div>
              <div className="text-xs text-zinc-500">Spaced repetition, FSRS & tactile active recall.</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <button
              onClick={() => {
                sounds.playSelect();
                setIsShortcutsOpen(true);
              }}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Shortcuts
            </button>
            <button
              onClick={() => {
                sounds.playSelect();
                setIsImportExportOpen(true);
              }}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              Backup & Restore
            </button>
            <span className="text-zinc-400 dark:text-zinc-600">Built with Cal.com Design System & Next.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
