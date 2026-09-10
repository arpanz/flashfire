'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockViewProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
}

// Robust single-pass syntax highlighter for pseudocode, JS, and algorithmic snippets
function highlightCodeLine(line: string): string {
  if (!line.trim()) return '&nbsp;';

  // Full-line comment
  if (/^\s*(\/\/|#)/.test(line)) {
    const escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `<span class="text-zinc-500 italic">${escaped}</span>`;
  }

  // Single-pass tokenizer regex
  const TOKEN_REGEX = /(".*?"|'.*?'|\/\/.*$|#.*$|\b\d+\b|\b[a-zA-Z_]\w*\b|[+\-*/%^&|!<>=]+|[^\s\w"'+*/%^&|!<>=]+|\s+)/g;

  return line.replace(TOKEN_REGEX, (token) => {
    // Strings
    if ((token.startsWith('"') && token.endsWith('"')) || (token.startsWith("'") && token.endsWith("'"))) {
      const esc = token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<span class="text-amber-300">${esc}</span>`;
    }

    // Trailing Comment
    if (token.startsWith('//') || token.startsWith('#')) {
      const esc = token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<span class="text-zinc-500 italic">${esc}</span>`;
    }

    // Number
    if (/^\d+$/.test(token)) {
      return `<span class="text-emerald-400 font-mono">${token}</span>`;
    }

    const lower = token.toLowerCase();
    const CONTROL_KEYWORDS = new Set([
      'if', 'else', 'then', 'while', 'for', 'to', 'down', 'do', 'return', 'function', 'def', 'break', 'continue', 'end'
    ]);
    const TYPE_KEYWORDS = new Set([
      'integer', 'string', 'boolean', 'array', 'set', 'let', 'const', 'var', 'static', 'int', 'char', 'float', 'void'
    ]);
    const OP_KEYWORDS = new Set(['AND', 'OR', 'XOR', 'NOT', 'MOD']);
    const IO_KEYWORDS = new Set(['print', 'document', 'write', 'console', 'log', 'printf', 'alert']);

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

    // Operator symbols
    if (/^[+\-*/%^&|!<>=]+$/.test(token)) {
      const esc = token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<span class="text-cyan-400 font-medium">${esc}</span>`;
    }

    // Default: escape HTML characters
    return token.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  });
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
