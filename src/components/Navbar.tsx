'use client';

import React, { useState, useEffect } from 'react';
import {
  Flame,
  Volume2,
  VolumeX,
  Command,
  Layers,
  BarChart3,
  CreditCard,
  Download,
  HelpCircle,
  Code2,
} from 'lucide-react';
import { sounds } from '../lib/sound';

interface NavbarProps {
  currentTab: 'decks' | 'cards' | 'quiz' | 'analytics' | 'coding';
  onSelectTab: (tab: 'decks' | 'cards' | 'quiz' | 'analytics' | 'coding') => void;
  streak: number;
  onOpenImportExport: () => void;
  onOpenShortcuts: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  streak,
  onOpenImportExport,
  onOpenShortcuts,
}) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    setIsMuted(sounds.isMuted());
  }, []);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div
          onClick={() => onSelectTab('quiz')}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-base shadow-xs group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div>
            <span className="font-semibold text-base tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              flashfire
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-medium">
                QUIZ & SRS
              </span>
            </span>
          </div>
        </div>

        {/* Center Pill-in-Pill Nav (Cal.com signature component) */}
        <nav className="flex items-center p-1 rounded-xl bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 text-xs font-medium">
          <button
            onClick={() => onSelectTab('quiz')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              currentTab === 'quiz'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Quiz</span>
          </button>

          <button
            onClick={() => onSelectTab('decks')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              currentTab === 'decks'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Decks</span>
          </button>

          <button
            onClick={() => onSelectTab('cards')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              currentTab === 'cards'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Cards</span>
          </button>

          <button
            onClick={() => onSelectTab('coding')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              currentTab === 'coding'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Coding</span>
          </button>

          <button
            onClick={() => onSelectTab('analytics')}
            className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              currentTab === 'analytics'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Analytics</span>
          </button>
        </nav>

        {/* Right Tools */}
        <div className="flex items-center gap-2">
          {/* Streak Pill */}
          <div
            title={`${streak} day study streak`}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 text-xs font-semibold select-none shadow-2xs"
          >
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>{streak}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Import / Export */}
          <button
            onClick={onOpenImportExport}
            title="Import or Export Decks"
            className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Shortcuts Info */}
          <button
            onClick={onOpenShortcuts}
            title="Keyboard Shortcuts (?)"
            className="hidden sm:flex p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Command className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
