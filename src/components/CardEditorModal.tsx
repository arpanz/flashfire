'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Eye, Edit3 } from 'lucide-react';
import { CardType, Deck, Flashcard, MCQOption } from '../lib/types';
import { storage } from '../lib/storage';
import { FormattedText } from './FormattedText';

interface CardEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  deckId?: string;
  initialCard?: Flashcard | null;
  onSaved?: () => void;
}

export const CardEditorModal: React.FC<CardEditorModalProps> = ({
  isOpen,
  onClose,
  deckId,
  initialCard,
  onSaved,
}) => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [selectedDeckId, setSelectedDeckId] = useState<string>(deckId || '');
  const [type, setType] = useState<CardType>('basic');
  const [front, setFront] = useState<string>('');
  const [back, setBack] = useState<string>('');
  const [hint, setHint] = useState<string>('');
  const [explanation, setExplanation] = useState<string>('');
  const [codeSnippet, setCodeSnippet] = useState<string>('');
  const [codeLanguage, setCodeLanguage] = useState<string>('typescript');
  const [tagsInput, setTagsInput] = useState<string>('');
  const [mcqOptions, setMcqOptions] = useState<MCQOption[]>([
    { id: '1', text: '', isCorrect: true },
    { id: '2', text: '', isCorrect: false },
    { id: '3', text: '', isCorrect: false },
    { id: '4', text: '', isCorrect: false },
  ]);
  const [previewTab, setPreviewTab] = useState<'edit' | 'preview'>('edit');

  useEffect(() => {
    const loadedDecks = storage.getDecks();
    setDecks(loadedDecks);
    if (!selectedDeckId && loadedDecks.length > 0) {
      setSelectedDeckId(deckId || loadedDecks[0].id);
    }
  }, [deckId, selectedDeckId]);

  // Load initial card data if editing
  useEffect(() => {
    if (initialCard) {
      setSelectedDeckId(initialCard.deckId);
      setType(initialCard.type);
      setFront(initialCard.front);
      setBack(initialCard.back);
      setHint(initialCard.hint || '');
      setExplanation(initialCard.explanation || '');
      setCodeSnippet(initialCard.codeSnippet || '');
      setCodeLanguage(initialCard.codeLanguage || 'typescript');
      setTagsInput(initialCard.tags.join(', '));
      if (initialCard.mcqOptions && initialCard.mcqOptions.length >= 2) {
        setMcqOptions(initialCard.mcqOptions);
      }
    } else {
      // Reset form
      setFront('');
      setBack('');
      setHint('');
      setExplanation('');
      setCodeSnippet('');
      setCodeLanguage('typescript');
      setTagsInput('');
      setMcqOptions([
        { id: '1', text: '', isCorrect: true },
        { id: '2', text: '', isCorrect: false },
        { id: '3', text: '', isCorrect: false },
        { id: '4', text: '', isCorrect: false },
      ]);
    }
  }, [initialCard, isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!front.trim() || !selectedDeckId) return;

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const cardToSave: Flashcard = {
      id: initialCard ? initialCard.id : `card-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      deckId: selectedDeckId,
      type,
      front: front.trim(),
      back: back.trim(),
      hint: hint.trim() || undefined,
      explanation: explanation.trim() || undefined,
      codeSnippet: type === 'code' ? codeSnippet.trim() : undefined,
      codeLanguage: type === 'code' ? codeLanguage : undefined,
      mcqOptions: type === 'mcq' ? mcqOptions : undefined,
      tags: tags.length > 0 ? tags : ['General'],
      createdAt: initialCard ? initialCard.createdAt : Date.now(),
      updatedAt: Date.now(),
      srs: initialCard
        ? initialCard.srs
        : {
            reps: 0,
            interval: 0,
            easeFactor: 2.5,
            lastStudied: null,
            dueDate: Date.now(),
            lapses: 0,
            state: 'new',
          },
    };

    storage.saveCard(cardToSave);
    if (onSaved) onSaved();
    onClose();
  };

  const handleMCQTextChange = (id: string, text: string) => {
    setMcqOptions((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, text } : opt))
    );
  };

  const handleMCQCorrectChange = (id: string) => {
    setMcqOptions((prev) =>
      prev.map((opt) => ({ ...opt, isCorrect: opt.id === id }))
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              {initialCard ? 'Edit Flashcard' : 'Create Flashcard'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Edit / Preview Tabs */}
            <div className="flex rounded-lg bg-zinc-100 dark:bg-zinc-800 p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setPreviewTab('edit')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  previewTab === 'edit'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                    : 'text-zinc-500'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5 inline mr-1" />
                Edit
              </button>
              <button
                type="button"
                onClick={() => setPreviewTab('preview')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  previewTab === 'preview'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs'
                    : 'text-zinc-500'
                }`}
              >
                <Eye className="w-3.5 h-3.5 inline mr-1" />
                Preview
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        {previewTab === 'edit' ? (
          <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Deck & Card Type Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                  Deck
                </label>
                <select
                  value={selectedDeckId}
                  onChange={(e) => setSelectedDeckId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  required
                >
                  {decks.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.icon} {d.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                  Card Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as CardType)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                >
                  <option value="basic">Standard (Front & Back)</option>
                  <option value="cloze">Cloze Deletion ({"{{c1::term}}"})</option>
                  <option value="reversed">Reversed (Bidirectional)</option>
                  <option value="mcq">Multiple Choice Question</option>
                  <option value="code">Code Snippet</option>
                </select>
              </div>
            </div>

            {/* Front Prompt */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {type === 'cloze' ? 'Sentence with Cloze Deletion' : 'Front (Question / Prompt)'}
                </label>
                {type === 'cloze' && (
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Use {"{{c1::answer}}"} syntax
                  </span>
                )}
              </div>
              <textarea
                value={front}
                onChange={(e) => setFront(e.target.value)}
                rows={3}
                placeholder={
                  type === 'cloze'
                    ? 'The {{c1::mitochondria}} is the powerhouse of the cell.'
                    : 'What is the speed of light?'
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 leading-relaxed font-sans"
                required
              />
            </div>

            {/* Code Fields */}
            {type === 'code' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Code Snippet
                  </label>
                  <input
                    type="text"
                    value={codeLanguage}
                    onChange={(e) => setCodeLanguage(e.target.value)}
                    placeholder="Language (e.g. tsx, python, css)"
                    className="w-36 px-2.5 py-1 text-xs rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 font-mono text-zinc-800 dark:text-zinc-200"
                  />
                </div>
                <textarea
                  value={codeSnippet}
                  onChange={(e) => setCodeSnippet(e.target.value)}
                  rows={4}
                  placeholder="// Paste code here..."
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-200 focus:outline-none"
                />
              </div>
            )}

            {/* MCQ Options */}
            {type === 'mcq' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                  Options (select radio for correct answer)
                </label>
                <div className="space-y-2">
                  {mcqOptions.map((opt, i) => (
                    <div key={opt.id} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="correct-option"
                        checked={opt.isCorrect}
                        onChange={() => handleMCQCorrectChange(opt.id)}
                        className="w-4 h-4 text-zinc-900 focus:ring-zinc-900 accent-zinc-900"
                      />
                      <input
                        type="text"
                        value={opt.text}
                        onChange={(e) => handleMCQTextChange(opt.id, e.target.value)}
                        placeholder={`Option ${String.fromCharCode(65 + i)}`}
                        className="flex-1 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Answer */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                {type === 'cloze' ? 'Extra Answer Context / Summary' : 'Back (Answer)'}
              </label>
              <textarea
                value={back}
                onChange={(e) => setBack(e.target.value)}
                rows={3}
                placeholder="Detailed answer or key takeaway..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-900 leading-relaxed"
                required={type !== 'cloze'}
              />
            </div>

            {/* Hint & Explanation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                  Hint (Optional)
                </label>
                <input
                  type="text"
                  value={hint}
                  onChange={(e) => setHint(e.target.value)}
                  placeholder="Subtle clue for active recall..."
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                  Tags (Comma-separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Exam2026, Chapter1, HighYield"
                  className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none"
                />
              </div>
            </div>

            {/* Explanation */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                Explanation / Deep Notes (Optional)
              </label>
              <input
                type="text"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
                placeholder="Why is this correct? Additional mnemonics..."
                className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none"
              />
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                Save Card
              </button>
            </div>
          </form>
        ) : (
          /* Preview Tab */
          <div className="p-6 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Front Preview
              </div>
              <div className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                <FormattedText text={front || 'Empty Front'} isCloze={type === 'cloze'} />
              </div>

              {type === 'code' && codeSnippet && (
                <div className="w-full mt-4 text-left rounded-xl bg-zinc-950 p-3 border border-zinc-800 font-mono text-xs text-zinc-200">
                  <pre>
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Back Preview
              </div>
              <div className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                <FormattedText text={back || 'Empty Back'} />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setPreviewTab('edit')}
                className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium"
              >
                Back to Editing
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
