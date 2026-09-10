'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockViewProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

// Simple, clean syntax highlighter for pseudocode, JS, and algorithmic snippets
function highlightCodeLine(line: string): string {
  if (!line.trim()) return '&nbsp;';

  let escaped = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Comments (e.g. // ... or # ...)
  if (/^\s*(\/\/|#)/.test(escaped)) {
    return `<span class="text-zinc-500 dark:text-zinc-500 italic">${escaped}</span>`;
  }

  // Strings: "..." or '...'
  escaped = escaped.replace(/(["'])(.*?)\1/g, '<span class="text-amber-400 dark:text-amber-300">$&</span>');

  // Control Flow / Function Keywords: if, else, while, for, to, return, function, etc.
  escaped = escaped.replace(
    /\b(if|else|then|end if|endif|while|end while|endwhile|for|to|down to|end for|endfor|do|return|function|def|break|continue)\b/gi,
    '<span class="text-pink-400 dark:text-pink-400 font-semibold">$1</span>'
  );

  // Data Types & Variable Declarations: Integer, String, Boolean, Set, let, const, var
  escaped = escaped.replace(
    /\b(Integer|String|Boolean|Array|Set|let|const|var|static int|int|char|float|void)\b/g,
    '<span class="text-purple-400 dark:text-purple-300 font-semibold">$1</span>'
  );

  // Built-in output/input commands: Print, print, document.write, alert
  escaped = escaped.replace(
    /\b(Print|print|document\.write|document\.body|document|console\.log|printf)\b/g,
    '<span class="text-sky-400 dark:text-sky-300 font-semibold">$1</span>'
  );

  // Logical & Bitwise Operator words: AND, OR, XOR, NOT, MOD
  escaped = escaped.replace(
    /\b(AND|OR|XOR|NOT|MOD)\b/g,
    '<span class="text-cyan-400 dark:text-cyan-300 font-bold">$1</span>'
  );

  // Numbers (standalone integers and decimals)
  escaped = escaped.replace(
    /\b(\d+)\b/g,
    '<span class="text-emerald-400 dark:text-emerald-300 font-mono">$1</span>'
  );

  return escaped;
}

export const CodeBlockView: React.FC<CodeBlockViewProps> = ({
  code,
  language = 'pseudocode',
  className = '',
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);

  const cleanCode = (code || '').trim();
  const lines = cleanCode ? cleanCode.split('\n') : [];

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API not permitted
    }
  };

  const displayLang = (language || 'pseudocode').toUpperCase();

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-xl text-left my-3 font-mono transition-all ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Mac-style Top Window Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80 select-none">
        {/* Traffic Light Dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-2xs"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-2xs"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-2xs"></span>
          <div className="ml-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
            <Terminal className="w-3.5 h-3.5 text-zinc-500" />
            <span>{displayLang}</span>
          </div>
        </div>

        {/* Copy Snippet Button */}
        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white text-[11px] font-medium transition-all cursor-pointer border border-zinc-700/60 shadow-2xs active:scale-95"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-zinc-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body with Line Numbers */}
      <div className="p-4 overflow-x-auto text-xs sm:text-[13px] leading-relaxed">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                {showLineNumbers && (
                  <td className="w-8 pr-4 text-right select-none font-mono text-zinc-600 text-xs align-top border-r border-zinc-800/80">
                    {idx + 1}
                  </td>
                )}
                <td className={`${showLineNumbers ? 'pl-4' : ''} text-zinc-200 font-mono whitespace-pre align-top`}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightCodeLine(line),
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
