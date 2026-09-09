'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Download, Upload, Copy, CheckCircle2, AlertCircle } from 'lucide-react';
import { Deck } from '../lib/types';
import { storage } from '../lib/storage';

interface ImportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  decks: Deck[];
  onDataChanged: () => void;
}

export const ImportExportModal: React.FC<ImportExportModalProps> = ({
  isOpen,
  onClose,
  decks,
  onDataChanged,
}) => {
  const [activeTab, setActiveTab] = useState<'export' | 'import-json' | 'import-csv'>('export');
  const [selectedDeckId, setSelectedDeckId] = useState<string>(decks[0]?.id || '');
  const [csvText, setCsvText] = useState<string>('');
  const [jsonText, setJsonText] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  // Download JSON backup
  const handleExportJSON = () => {
    const json = storage.exportData();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flashfire-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatusMessage({ type: 'success', text: 'Full JSON backup downloaded successfully.' });
  };

  // Import JSON
  const handleImportJSON = () => {
    if (!jsonText.trim()) return;
    const res = storage.importJSON(jsonText, selectedDeckId);
    if (res.success) {
      setStatusMessage({
        type: 'success',
        text: `Imported successfully! (${res.decksCount > 0 ? `${res.decksCount} deck(s), ` : ''}${res.cardsCount} card(s))`,
      });
      setJsonText('');
      onDataChanged();
    } else {
      setStatusMessage({ type: 'error', text: res.error || 'Failed to parse JSON.' });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setJsonText(content);
        setStatusMessage({ type: 'success', text: `Loaded "${file.name}". Click "Import JSON Data" to finish.` });
      }
    };
    reader.onerror = () => {
      setStatusMessage({ type: 'error', text: 'Error reading selected file.' });
    };
    reader.readAsText(file);
  };

  const copyTemplateJSON = () => {
    const template = [
      {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris",
        explanation: "Paris is the capital and largest city of France.",
        tags: ["Geography"]
      },
      {
        question: "Which data structure operates on a First-In, First-Out (FIFO) basis?",
        options: ["Stack", "Queue", "Binary Tree", "Priority Heap"],
        answer: "Queue",
        hint: "Think of waiting in a line",
        tags: ["Data Structures"]
      },
      {
        question: "Which of the following sorting algorithms has worst-case O(n^2) time complexity?",
        options: ["Merge Sort", "Quick Sort", "Heap Sort", "Tim Sort"],
        answer: "Quick Sort",
        explanation: "Quick sort degrades to O(n^2) with worst-case pivot selections.",
        tags: ["Algorithms"]
      }
    ];
    navigator.clipboard.writeText(JSON.stringify(template, null, 2));
    setStatusMessage({ type: 'success', text: 'Template Quiz JSON copied to clipboard!' });
  };

  // Import CSV/TSV
  const handleImportCSV = () => {
    if (!csvText.trim() || !selectedDeckId) return;
    const count = storage.importCSV(selectedDeckId, csvText);
    if (count > 0) {
      setStatusMessage({ type: 'success', text: `Imported ${count} cards into deck successfully!` });
      setCsvText('');
      onDataChanged();
    } else {
      setStatusMessage({ type: 'error', text: 'Could not import cards. Please check format.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Import & Export Data
          </h3>
          <button onClick={onClose} className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab pills */}
        <div className="flex px-6 pt-4 gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-3">
          <button
            onClick={() => {
              setActiveTab('export');
              setStatusMessage(null);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              activeTab === 'export'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Export Backup
          </button>
          <button
            onClick={() => {
              setActiveTab('import-json');
              setStatusMessage(null);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              activeTab === 'import-json'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Import JSON
          </button>
          <button
            onClick={() => {
              setActiveTab('import-csv');
              setStatusMessage(null);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
              activeTab === 'import-csv'
                ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                : 'text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Import CSV / Anki
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {statusMessage && (
            <div
              className={`p-3 rounded-xl text-xs font-medium flex items-center gap-2 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4 text-center py-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center justify-center">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                  Complete Data Backup
                </h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
                  Export all your decks, flashcards, SRS study intervals, review history, and stats into a single JSON file.
                </p>
              </div>
              <button
                onClick={handleExportJSON}
                className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
              >
                Download Backup JSON
              </button>
            </div>
          )}

          {activeTab === 'import-json' && (
            <div className="space-y-4">
              {/* Optional Target Deck */}
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
                  Target Deck (For card lists without a deck specified)
                </label>
                <select
                  value={selectedDeckId}
                  onChange={(e) => setSelectedDeckId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100"
                >
                  {decks.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.icon} {d.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload file button or paste */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold uppercase text-zinc-500">
                    Select JSON File or Paste Text
                  </label>
                  <button
                    type="button"
                    onClick={copyTemplateJSON}
                    className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-1 underline underline-offset-2"
                  >
                    <Copy className="w-3 h-3" />
                    Copy Template JSON
                  </button>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-200 transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload .json file</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  <span className="text-[11px] text-zinc-400">or paste directly below</span>
                </div>

                <textarea
                  value={jsonText}
                  onChange={(e) => setJsonText(e.target.value)}
                  rows={6}
                  placeholder={`[\n  {\n    "front": "What is the speed of light?",\n    "back": "Approximately 300,000 km/s in a vacuum.",\n    "hint": "Physics constant c",\n    "tags": ["Physics"]\n  }\n]`}
                  className="w-full p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-mono text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
                />
              </div>

              <button
                onClick={handleImportJSON}
                disabled={!jsonText.trim()}
                className="w-full py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-40"
              >
                Import JSON Data
              </button>
            </div>
          )}

          {activeTab === 'import-csv' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-500 mb-1">
                  Target Deck
                </label>
                <select
                  value={selectedDeckId}
                  onChange={(e) => setSelectedDeckId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100"
                >
                  {decks.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.icon} {d.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold uppercase text-zinc-500">
                    CSV / TSV Text
                  </label>
                  <span className="text-[11px] text-zinc-400 font-mono">Format: Front, Back, Tags</span>
                </div>
                <textarea
                  value={csvText}
                  onChange={(e) => setCsvText(e.target.value)}
                  rows={6}
                  placeholder={`What is osmosis?,Movement of water through semipermeable membrane,Biology\n"Mitochondria","Powerhouse of the cell","Organelles;Cell"`}
                  className="w-full p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-mono text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
                />
              </div>

              <button
                onClick={handleImportCSV}
                disabled={!csvText.trim()}
                className="w-full py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-40"
              >
                Import Cards into Deck
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
