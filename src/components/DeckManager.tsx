'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Play,
  Zap,
  Gamepad2,
  ListOrdered,
  MoreVertical,
  PlusCircle,
  Clock,
  Layers,
  Trash2,
  Edit2,
} from 'lucide-react';
import { Deck, Flashcard } from '../lib/types';
import { storage } from '../lib/storage';
import { getDueCards } from '../lib/srs';
import { DeckIcon } from './DeckIcon';

interface DeckManagerProps {
  decks: Deck[];
  cards: Flashcard[];
  onStartStudy: (deck: Deck, mode: 'srs' | 'cram') => void;
  onStartMatch: (deck: Deck) => void;
  onStartQuiz: (deck: Deck) => void;
  onOpenCardEditor: (deckId: string) => void;
}

export const DeckManager: React.FC<DeckManagerProps> = ({
  decks,
  cards,
  onStartStudy,
  onStartMatch,
  onStartQuiz,
  onOpenCardEditor,
}) => {
  const [isCreatingDeck, setIsCreatingDeck] = useState(false);
  const [editingDeck, setEditingDeck] = useState<Deck | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('🔥');
  const [color, setColor] = useState('#111111');
  const [tagsInput, setTagsInput] = useState('');
  const [menuOpenDeckId, setMenuOpenDeckId] = useState<string | null>(null);

  const openCreateModal = () => {
    setEditingDeck(null);
    setTitle('');
    setDescription('');
    setIcon('📚');
    setColor('#111111');
    setTagsInput('');
    setIsCreatingDeck(true);
  };

  const openEditModal = (deck: Deck) => {
    setEditingDeck(deck);
    setTitle(deck.title);
    setDescription(deck.description);
    setIcon(deck.icon);
    setColor(deck.color);
    setTagsInput(deck.tags.join(', '));
    setIsCreatingDeck(true);
    setMenuOpenDeckId(null);
  };

  const handleSaveDeck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const deckData: Deck = {
      id: editingDeck ? editingDeck.id : `deck-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      title: title.trim(),
      description: description.trim(),
      icon: icon || '⚡',
      color,
      tags: tags.length > 0 ? tags : ['General'],
      createdAt: editingDeck ? editingDeck.createdAt : Date.now(),
      updatedAt: Date.now(),
    };

    storage.saveDeck(deckData);
    setIsCreatingDeck(false);
  };

  const handleDeleteDeck = (deckId: string) => {
    if (confirm('Are you sure you want to delete this deck and all of its cards?')) {
      storage.deleteDeck(deckId);
      setMenuOpenDeckId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Decks & Library
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Pick a deck to start your spaced repetition review, match sprint, or multiple-choice test.
          </p>
        </div>

        <button
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
        >
          <Plus className="w-4 h-4" />
          Create Deck
        </button>
      </div>

      {/* Decks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {decks.map((deck) => {
          const deckCards = cards.filter((c) => c.deckId === deck.id);
          const dueCards = getDueCards(deckCards);

          return (
            <motion.div
              key={deck.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="relative flex flex-col justify-between rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 p-5 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Top Row: Icon, Title, More Menu */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center shadow-inner shrink-0">
                      <DeckIcon deckId={deck.id} className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-1">
                        {deck.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        <span className="flex items-center gap-1 font-medium">
                          <Layers className="w-3.5 h-3.5" />
                          {deckCards.length} cards
                        </span>
                        {dueCards.length > 0 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            <Clock className="w-3 h-3 mr-1" />
                            {dueCards.length} due
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Menu Button */}
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpenDeckId(menuOpenDeckId === deck.id ? null : deck.id)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>

                    {menuOpenDeckId === deck.id && (
                      <div className="absolute right-0 top-8 z-30 w-36 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-xl py-1 text-xs font-medium">
                        <button
                          onClick={() => openEditModal(deck)}
                          className="w-full px-3 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center gap-2 text-zinc-700 dark:text-zinc-200"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          Edit Deck
                        </button>
                        <button
                          onClick={() => {
                            onOpenCardEditor(deck.id);
                            setMenuOpenDeckId(null);
                          }}
                          className="w-full px-3 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center gap-2 text-zinc-700 dark:text-zinc-200"
                        >
                          <PlusCircle className="w-3.5 h-3.5" />
                          Add Card
                        </button>
                        <button
                          onClick={() => handleDeleteDeck(deck.id)}
                          className="w-full px-3 py-2 text-left hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center gap-2 text-rose-600 dark:text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Delete Deck
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                  {deck.description || 'No description provided.'}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {deck.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Launch Actions */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-4 gap-1.5 text-xs font-medium">
                {/* SRS Study */}
                <button
                  onClick={() => onStartStudy(deck, 'srs')}
                  title="Spaced Repetition Study"
                  disabled={deckCards.length === 0}
                  className="p-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex flex-col items-center justify-center gap-1 disabled:opacity-40"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[10px]">Study</span>
                </button>

                {/* Cram */}
                <button
                  onClick={() => onStartStudy(deck, 'cram')}
                  title="Cram All Cards"
                  disabled={deckCards.length === 0}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors flex flex-col items-center justify-center gap-1 disabled:opacity-40"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Cram</span>
                </button>

                {/* Match */}
                <button
                  onClick={() => onStartMatch(deck)}
                  title="Speed Match Game"
                  disabled={deckCards.length === 0}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors flex flex-col items-center justify-center gap-1 disabled:opacity-40"
                >
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Match</span>
                </button>

                {/* Quiz */}
                <button
                  onClick={() => onStartQuiz(deck)}
                  title="Multiple Choice Quiz"
                  disabled={deckCards.length === 0}
                  className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors flex flex-col items-center justify-center gap-1 disabled:opacity-40"
                >
                  <ListOrdered className="w-3.5 h-3.5" />
                  <span className="text-[10px]">Quiz</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Create / Edit Deck Modal */}
      {isCreatingDeck && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              {editingDeck ? 'Edit Deck' : 'Create New Deck'}
            </h3>

            <form onSubmit={handleSaveDeck} className="space-y-4">
              <div className="flex gap-3">
                <div className="w-16">
                  <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
                    Icon
                  </label>
                  <input
                    type="text"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    className="w-full text-center text-xl py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                    maxLength={2}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
                    Deck Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Neuroscience, Spanish A1"
                    className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  placeholder="What is this deck about?"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
                  Tags (Comma-separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Medicine, Exam, Anatomy"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100"
                />
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsCreatingDeck(false)}
                  className="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium"
                >
                  Save Deck
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
