'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Volume2,
  RotateCcw,
  Tag,
  Clock,
} from 'lucide-react';
import { Deck, Flashcard } from '../lib/types';
import { storage } from '../lib/storage';
import { FormattedText } from './FormattedText';

interface CardBrowserProps {
  decks: Deck[];
  cards: Flashcard[];
  onEditCard: (card: Flashcard) => void;
  onAddCard: () => void;
}

export const CardBrowser: React.FC<CardBrowserProps> = ({
  decks,
  cards,
  onEditCard,
  onAddCard,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeckFilter, setSelectedDeckFilter] = useState<string>('all');
  const [selectedStateFilter, setSelectedStateFilter] = useState<string>('all');

  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      // Deck match
      if (selectedDeckFilter !== 'all' && card.deckId !== selectedDeckFilter) {
        return false;
      }

      // State match
      if (selectedStateFilter !== 'all' && card.srs.state !== selectedStateFilter) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesFront = card.front.toLowerCase().includes(q);
        const matchesBack = card.back.toLowerCase().includes(q);
        const matchesTags = card.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesFront && !matchesBack && !matchesTags) return false;
      }

      return true;
    });
  }, [cards, selectedDeckFilter, selectedStateFilter, searchQuery]);

  const handleDelete = (cardId: string) => {
    if (confirm('Delete this card permanently?')) {
      storage.deleteCard(cardId);
    }
  };

  const handleResetSRS = (card: Flashcard) => {
    const updated: Flashcard = {
      ...card,
      srs: {
        reps: 0,
        interval: 0,
        easeFactor: 2.5,
        lastStudied: null,
        dueDate: Date.now(),
        lapses: 0,
        state: 'new',
      },
      updatedAt: Date.now(),
    };
    storage.saveCard(updated);
  };

  const speak = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, '$1').replace(/[`*_#]/g, '');
    const u = new SpeechSynthesisUtterance(clean);
    window.speechSynthesis.speak(u);
  };

  const getDeckName = (deckId: string) => {
    const d = decks.find((item) => item.id === deckId);
    return d ? `${d.icon} ${d.title}` : 'Unknown';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Card Database
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Browse, search, edit, or reset individual cards across all your decks.
          </p>
        </div>

        <button
          onClick={onAddCard}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
        >
          <Plus className="w-4 h-4" />
          New Flashcard
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions, answers, tags..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-xs"
          />
        </div>

        {/* Deck Filter */}
        <select
          value={selectedDeckFilter}
          onChange={(e) => setSelectedDeckFilter(e.target.value)}
          className="w-full sm:w-48 px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none shadow-xs"
        >
          <option value="all">All Decks ({cards.length})</option>
          {decks.map((d) => (
            <option key={d.id} value={d.id}>
              {d.icon} {d.title}
            </option>
          ))}
        </select>

        {/* SRS Status Filter */}
        <select
          value={selectedStateFilter}
          onChange={(e) => setSelectedStateFilter(e.target.value)}
          className="w-full sm:w-36 px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none shadow-xs"
        >
          <option value="all">All States</option>
          <option value="new">New</option>
          <option value="learning">Learning</option>
          <option value="review">Reviewing</option>
          <option value="mastered">Mastered</option>
        </select>
      </div>

      {/* Cards Table / List */}
      <div className="rounded-2xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs">
        {filteredCards.length === 0 ? (
          <div className="p-12 text-center text-zinc-500 text-sm">
            No cards found matching your criteria.
          </div>
        ) : (
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {filteredCards.map((card) => {
              const stateColors = {
                new: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400',
                learning: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60',
                review: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60',
                mastered: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60',
              };

              return (
                <div
                  key={card.id}
                  className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-zinc-50/70 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  {/* Left: Card Content */}
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {card.type}
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">
                        {getDeckName(card.deckId)}
                      </span>
                      <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${stateColors[card.srs.state]}`}>
                        {card.srs.state}
                      </span>
                      {card.srs.interval > 0 && (
                        <span className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {card.srs.interval}d interval
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 line-clamp-2">
                      <FormattedText text={card.front} />
                    </div>

                    <div className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      <FormattedText text={card.back} />
                    </div>

                    {/* Tags */}
                    {card.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 pt-1">
                        <Tag className="w-3 h-3 text-zinc-400" />
                        {card.tags.map((t) => (
                          <span key={t} className="text-[10px] text-zinc-500 font-medium">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <button
                      onClick={() => speak(card.front)}
                      title="Speak front"
                      className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleResetSRS(card)}
                      title="Reset SRS progress to New"
                      className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onEditCard(card)}
                      title="Edit card"
                      className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(card.id)}
                      title="Delete card"
                      className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-zinc-500 hover:text-rose-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
