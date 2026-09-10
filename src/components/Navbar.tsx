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
  Sun,
  Moon,
  Zap,
  RotateCcw,
} from 'lucide-react';
import { sounds } from '../lib/sound';
import { getCookie, setCookie } from '../lib/cookies';

import { motion } from 'framer-motion';

interface NavbarProps {
  currentTab: 'decks' | 'cards' | 'quiz' | 'revision' | 'analytics';
  onSelectTab: (tab: 'decks' | 'cards' | 'quiz' | 'revision' | 'analytics') => void;
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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setIsMuted(sounds.isMuted());
    const savedTheme = getCookie('flashfire_theme') || localStorage.getItem('flashfire_theme') || 'dark';
    setTheme(savedTheme as 'dark' | 'light');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const handleToggleTheme = () => {
    sounds.playSelect();
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('flashfire_theme', nextTheme);
    setCookie('flashfire_theme', nextTheme, 365);
  };

  const navItems: { id: 'quiz' | 'decks' | 'revision' | 'cards' | 'analytics'; label: string; icon: React.ReactNode }[] = [
    { id: 'quiz', label: 'Quiz', icon: <HelpCircle className="w-4 h-4 md:w-3.5 md:h-3.5" /> },
    { id: 'decks', label: 'Decks', icon: <Layers className="w-4 h-4 md:w-3.5 md:h-3.5" /> },
    { id: 'revision', label: 'Revision', icon: <RotateCcw className="w-4 h-4 md:w-3.5 md:h-3.5" /> },
    { id: 'cards', label: 'Cards', icon: <CreditCard className="w-4 h-4 md:w-3.5 md:h-3.5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4 md:w-3.5 md:h-3.5" /> },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 w-full bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand */}
          <div
            onClick={() => {
              window.location.href = '/';
            }}
            title="Click to refresh FlashFire"
            className="flex items-center gap-2 cursor-pointer select-none group shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-zinc-800 border border-zinc-800 text-amber-400 flex items-center justify-center font-bold text-base shadow-xs group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 fill-current text-amber-500" />
            </div>
            <div>
              <span className="font-semibold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                flashfire
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-medium">
                  QUIZ & SRS
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Center Pill-in-Pill Nav (Hidden on mobile) */}
          <nav className="hidden md:flex items-center p-1 rounded-xl bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 text-xs font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sounds.playSelect();
                  onSelectTab(item.id);
                }}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentTab === item.id
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs font-semibold'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Streak Pill */}
            <div
              title={`${streak} day study streak`}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 text-xs font-semibold select-none shadow-2xs"
            >
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>{streak}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? 'Unmute UI sounds' : 'Mute UI sounds'}
              className="p-1.5 sm:p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={handleToggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-1.5 sm:p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Import / Export */}
            <button
              onClick={() => {
                sounds.playSelect();
                onOpenImportExport();
              }}
              title="Import or Export Decks"
              className="p-1.5 sm:p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Shortcuts Info */}
            <button
              onClick={() => {
                sounds.playSelect();
                onOpenShortcuts();
              }}
              title="Keyboard Shortcuts (?)"
              className="hidden sm:flex p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              <Command className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Visible only on mobile screens < 768px) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 pb-safe px-1.5 pt-1 flex items-center justify-around shadow-lg">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sounds.playSelect();
                onSelectTab(item.id);
              }}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all min-h-[50px] relative cursor-pointer ${
                isActive
                  ? 'text-zinc-950 dark:text-zinc-100 font-semibold'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeMobileTabIndicator"
                  className="absolute inset-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <div className={`transition-transform ${isActive ? 'scale-110' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] tracking-tight mt-1 leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
