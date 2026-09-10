'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Command } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'Space / Enter', desc: 'Flip flashcard between Front and Back' },
    { key: '1', desc: 'Rate "Again" (re-queues card for immediate review)' },
    { key: '2', desc: 'Rate "Hard" (slight interval increase)' },
    { key: '3', desc: 'Rate "Good" (standard optimal SM-2 interval)' },
    { key: '4', desc: 'Rate "Easy" (extended interval & ease bonus)' },
    { key: 'H', desc: 'Toggle hint accordion on front of card' },
    { key: 'R', desc: 'Replay audio pronunciation via Text-to-Speech' },
    { key: '?', desc: 'Toggle keyboard shortcuts cheatsheet' },
    { key: 'Esc', desc: 'Close dialogs or return to previous screen' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-t-3xl sm:rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden p-5 sm:p-6 pb-safe sm:pb-6 max-h-[90vh] flex flex-col my-0 sm:my-8"
      >
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 mb-4">
          <div className="flex items-center gap-2">
            <Command className="w-4 h-4 text-zinc-500" />
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              Keyboard Shortcuts
            </h3>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2.5">
          {shortcuts.map((s) => (
            <div key={s.key} className="flex items-center justify-between text-xs py-1">
              <span className="text-zinc-600 dark:text-zinc-400">{s.desc}</span>
              <kbd className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-mono text-[11px] text-zinc-800 dark:text-zinc-200 shrink-0 ml-3">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium"
          >
            Got it
          </button>
        </div>
      </motion.div>
    </div>
  );
};
