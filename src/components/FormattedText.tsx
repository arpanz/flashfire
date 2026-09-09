'use client';

import React, { useMemo } from 'react';
import katex from 'katex';

interface FormattedTextProps {
  text: string;
  className?: string;
  isCloze?: boolean;
  clozeRevealed?: boolean;
  onRevealCloze?: () => void;
}

export const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  className = '',
  isCloze = false,
  clozeRevealed = false,
  onRevealCloze,
}) => {
  const content = useMemo(() => {
    if (!text) return null;

    let processed = text;

    // Handle Cloze Deletion: {{c1::hidden text}} or {{c2::text::hint}}
    if (isCloze) {
      if (!clozeRevealed) {
        // Replace cloze with interactive mask pill
        processed = processed.replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, () => {
          return `<span class="inline-flex items-center px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-mono text-xs border border-dashed border-zinc-400 dark:border-zinc-600 cursor-pointer select-none hover:border-zinc-800 transition-colors">[ ··· ]</span>`;
        });
      } else {
        // Reveal cloze with highlighted badge
        processed = processed.replace(/\{\{c\d+::(.*?)(?:::.*?)?\}\}/g, (_match, val) => {
          return `<span class="inline-flex items-center px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-semibold border border-emerald-300 dark:border-emerald-700">${val}</span>`;
        });
      }
    }

    // Process KaTeX math formulas:
    // Block math: $$ ... $$
    processed = processed.replace(/\$\$([\s\S]*?)\$\$/g, (_match, math) => {
      try {
        return `<div class="my-2 py-1 overflow-x-auto text-center">${katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        })}</div>`;
      } catch {
        return math;
      }
    });

    // Inline math: $ ... $
    processed = processed.replace(/\$(.*?)\$/g, (_match, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return math;
      }
    });

    // Markdown Headings: ### and ##
    processed = processed.replace(/^###\s+(.*$)/gim, '<h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mt-3.5 mb-1.5 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span>$1</h4>');
    processed = processed.replace(/^##\s+(.*$)/gim, '<h3 class="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 mt-4 mb-2">$1</h3>');

    // Bullet points: - item or * item
    processed = processed.replace(/^[*-]\s+(.*$)/gim, '<div class="flex items-start gap-2 my-1 pl-1 text-zinc-700 dark:text-zinc-300"><span class="text-amber-500 font-bold leading-none mt-1 shrink-0">•</span><span>$1</span></div>');

    // Basic inline markdown: `code`, **bold**, *italic*
    processed = processed.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-xs border border-zinc-200 dark:border-zinc-700">$1</code>');
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Clean remaining regular newlines (avoid double-breaking around block elements)
    processed = processed.replace(/(<\/h[34]>|<\/div>)\n+/gi, '$1');
    processed = processed.replace(/\n+/g, '<br/>');

    return processed;
  }, [text, isCloze, clozeRevealed]);

  return (
    <div
      className={`prose prose-zinc dark:prose-invert max-w-none text-inherit leading-relaxed ${className}`}
      onClick={onRevealCloze}
      dangerouslySetInnerHTML={{ __html: content || '' }}
    />
  );
};
