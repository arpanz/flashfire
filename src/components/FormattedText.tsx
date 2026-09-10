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

    // Process Markdown Tables:
    processed = processed.replace(
      /((?:\|[^\r\n]+\|\r?\n)(?:\|[^\r\n-]*-[^\r\n]*\|\r?\n)(?:\|[^\r\n]+\|(?:\r?\n|$))+)/g,
      (tableBlock) => {
        const rows = tableBlock.trim().split(/\r?\n/);
        if (rows.length < 2) return tableBlock;

        const parseRow = (rowStr: string) => {
          return rowStr
            .split('|')
            .slice(1, -1)
            .map((c) => c.trim());
        };

        const headerCells = parseRow(rows[0]);
        const bodyRows = rows.slice(2).map(parseRow);

        const headerHtml = `<thead><tr class="bg-zinc-100/90 dark:bg-zinc-800/90 border-b border-zinc-200 dark:border-zinc-700">${headerCells
          .map(
            (c) =>
              `<th class="px-2.5 py-1.5 text-left font-semibold text-zinc-900 dark:text-zinc-100 text-xs">${c}</th>`
          )
          .join('')}</tr></thead>`;

        const bodyHtml = `<tbody>${bodyRows
          .map(
            (r, i) =>
              `<tr class="${
                i % 2 === 0 ? 'bg-transparent' : 'bg-zinc-50/60 dark:bg-zinc-800/30'
              } border-b border-zinc-100 dark:border-zinc-800/60">${r
                .map(
                  (c) =>
                    `<td class="px-2.5 py-1.5 text-zinc-700 dark:text-zinc-300 text-xs leading-normal">${c}</td>`
                )
                .join('')}</tr>`
          )
          .join('')}</tbody>`;

        return `<div class="my-2.5 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700/80 shadow-2xs"><table class="w-full border-collapse">${headerHtml}${bodyHtml}</table></div>`;
      }
    );

    // Process Fenced Code Blocks: ```lang ... ```
    processed = processed.replace(/```([a-zA-Z0-9_-]*)\r?\n([\s\S]*?)```/g, (_match, lang, code) => {
      const displayLang = (lang || 'code').toUpperCase();
      const rawLines = code.trimEnd().split(/\r?\n/);
      
      const TOKEN_REGEX = /(".*?"|'.*?'|\/\/.*$|#.*$|\b\d+\b|\b[a-zA-Z_]\w*\b|[+\-*/%^&|!<>=]+|[^\s\w"'+*/%^&|!<>=]+|\s+)/g;
      const CONTROL_KEYWORDS = new Set(['if', 'else', 'then', 'while', 'for', 'to', 'down', 'do', 'return', 'function', 'def', 'break', 'continue', 'end']);
      const TYPE_KEYWORDS = new Set(['integer', 'string', 'boolean', 'array', 'set', 'let', 'const', 'var', 'static', 'int', 'char', 'float', 'void']);
      const OP_KEYWORDS = new Set(['AND', 'OR', 'XOR', 'NOT', 'MOD']);
      const IO_KEYWORDS = new Set(['print', 'document', 'write', 'console', 'log', 'printf', 'alert']);

      const linesHtml = rawLines
        .map((line: string, i: number) => {
          if (!line.trim()) {
            return `<tr><td class="w-7 pr-3 text-right select-none font-mono text-zinc-600 text-xs align-top border-r border-zinc-800">${i + 1}</td><td class="pl-3 text-zinc-200 font-mono whitespace-pre align-top">&nbsp;</td></tr>`;
          }

          if (/^\s*(\/\/|#)/.test(line)) {
            const esc = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return `<tr><td class="w-7 pr-3 text-right select-none font-mono text-zinc-600 text-xs align-top border-r border-zinc-800">${i + 1}</td><td class="pl-3 text-zinc-500 italic font-mono whitespace-pre align-top">${esc}</td></tr>`;
          }

          const highlighted = line.replace(TOKEN_REGEX, (token) => {
            if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'"))) {
              const esc = token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
              return `<span class="text-amber-300">${esc}</span>`;
            }
            if (token.startsWith('//') || token.startsWith('#')) {
              const esc = token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
              return `<span class="text-zinc-500 italic">${esc}</span>`;
            }
            if (/^\d+$/.test(token)) {
              return `<span class="text-emerald-400 font-mono">${token}</span>`;
            }
            const lower = token.toLowerCase();
            if (CONTROL_KEYWORDS.has(lower)) {
              return `<span class="text-pink-400 font-semibold">${token}</span>`;
            }
            if (TYPE_KEYWORDS.has(lower)) {
              return `<span class="text-purple-400 font-semibold">${token}</span>`;
            }
            if (OP_KEYWORDS.has(token.toUpperCase())) {
              return `<span class="text-cyan-400 font-bold">${token}</span>`;
            }
            if (IO_KEYWORDS.has(lower)) {
              return `<span class="text-sky-400 font-semibold">${token}</span>`;
            }
            if (/^[+\-*/%^&|!<>=]+$/.test(token)) {
              const esc = token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
              return `<span class="text-cyan-400 font-medium">${esc}</span>`;
            }
            return token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          });

          return `<tr><td class="w-7 pr-3 text-right select-none font-mono text-zinc-600 text-xs align-top border-r border-zinc-800">${i + 1}</td><td class="pl-3 text-zinc-200 font-mono whitespace-pre align-top">${highlighted}</td></tr>`;
        })
        .join('');

      return `<div class="w-full my-3 rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-xl text-left font-mono select-text"><div class="flex items-center justify-between px-3.5 py-2 bg-zinc-900/90 border-b border-zinc-800/80"><div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span><span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span><span class="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span><span class="ml-2 text-[10px] font-semibold text-zinc-400 tracking-wider uppercase">${displayLang}</span></div></div><div class="p-3.5 overflow-x-auto text-xs sm:text-[13px] leading-relaxed"><table class="w-full border-collapse"><tbody>${linesHtml}</tbody></table></div></div>`;
    });

    // Markdown Blockquotes: > quote
    processed = processed.replace(/^>\s+(.*$)/gim, '<div class="pl-2.5 border-l-2 border-amber-500 my-1.5 text-zinc-600 dark:text-zinc-300 italic text-xs">$1</div>');

    // Markdown Headings: ### and ##
    processed = processed.replace(/^###\s+(.*$)/gim, '<h4 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mt-3 mb-1 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"></span>$1</h4>');
    processed = processed.replace(/^##\s+(.*$)/gim, '<h3 class="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-3 mb-1.5">$1</h3>');

    // Bullet points: - item or * item
    processed = processed.replace(/^[*-]\s+(.*$)/gim, '<div class="flex items-start gap-2 my-1 pl-1 text-zinc-700 dark:text-zinc-300"><span class="text-amber-500 font-bold leading-none mt-1 shrink-0">•</span><span>$1</span></div>');

    // Basic inline markdown: `code`, **bold**, *italic*
    processed = processed.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono text-xs border border-zinc-200 dark:border-zinc-700">$1</code>');
    processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Clean remaining regular newlines (avoid double-breaking around block elements)
    processed = processed.replace(/(<\/h[34]>|<\/div>|<\/table>)\n+/gi, '$1');
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
