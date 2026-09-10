'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Code2,
  Minimize2,
  Maximize2,
  Sparkles,
} from 'lucide-react';
import { sounds } from '../lib/sound';

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_SCRATCH_NOTE = `// ⚡ ACCENTURE EXAM SCRATCHPAD & TRACER
// Use this pad for variable tracing, loop tables, or calculating expressions:
// Example: let a = 14 ^ 5; console.log(a);

`;

export const ScratchpadModal: React.FC<ScratchpadModalProps> = ({ isOpen, onClose }) => {
  const [content, setContent] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('flashfire_quiz_scratchpad') || DEFAULT_SCRATCH_NOTE;
    }
    return DEFAULT_SCRATCH_NOTE;
  });

  const [output, setOutput] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('flashfire_quiz_scratchpad', content);
    }
  }, [content]);

  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const value = target.value;

      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      setContent(newValue);

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
        }
      }, 0);
    }
  };

  const handleEvaluate = () => {
    sounds.playFlip();
    const logs: string[] = [];
    const origLog = console.log;
    console.log = (...args: any[]) => {
      logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
      origLog(...args);
    };

    try {
      // Evaluate last line or all executable lines
      const evalResult = new Function(content)();
      if (evalResult !== undefined) {
        logs.push(`=> ${typeof evalResult === 'object' ? JSON.stringify(evalResult) : String(evalResult)}`);
      }
      setOutput(logs.join('\n') || 'Executed with no output.');
      sounds.playSuccess();
    } catch (err: any) {
      setOutput(`Error: ${err.message || String(err)}`);
      sounds.playError();
    } finally {
      console.log = origLog;
    }
  };

  const handleClear = () => {
    sounds.playFlip();
    setContent('');
    setOutput('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    sounds.playFlip();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className={`pointer-events-auto bg-zinc-950/95 backdrop-blur-md text-zinc-100 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all ${
            isMinimized ? 'w-80 h-12' : 'w-96 sm:w-[460px] h-[520px]'
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-900/90 border-b border-zinc-800 cursor-move select-none">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold tracking-tight text-zinc-100 flex items-center gap-1.5">
                Coding Scratchpad
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-blue-950/80 text-blue-400 border border-blue-800">
                  Live
                </span>
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                title="Close Scratchpad"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900/40 border-b border-zinc-800/80 text-xs">
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleEvaluate}
                    className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] flex items-center gap-1 transition-colors shadow-2xs cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Run JS</span>
                  </button>
                  <button
                    onClick={handleClear}
                    className="px-2 py-1 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  className="px-2 py-1 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Textarea */}
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type variable traces, bitwise calculations, or scratch notes here..."
                spellCheck={false}
                className="flex-1 p-3.5 bg-transparent text-zinc-100 font-mono text-xs leading-relaxed resize-none outline-hidden focus:outline-hidden overflow-y-auto"
                style={{ tabSize: 2 }}
              />

              {/* Quick Math / Operator Chips */}
              <div className="px-3 py-1.5 bg-zinc-900/60 border-t border-zinc-800 flex items-center gap-1 overflow-x-auto text-[10px] text-zinc-400">
                <span className="font-semibold text-zinc-500">Quick Ops:</span>
                <button
                  onClick={() => setContent((c) => c + ' ^ ')}
                  className="px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono"
                  title="XOR Operator"
                >
                  ^ XOR
                </button>
                <button
                  onClick={() => setContent((c) => c + ' & ')}
                  className="px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono"
                  title="AND Operator"
                >
                  & AND
                </button>
                <button
                  onClick={() => setContent((c) => c + ' | ')}
                  className="px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono"
                  title="OR Operator"
                >
                  | OR
                </button>
                <button
                  onClick={() => setContent((c) => c + ' % ')}
                  className="px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono"
                  title="Modulo Operator"
                >
                  % MOD
                </button>
                <button
                  onClick={() => setContent((c) => c + ' << ')}
                  className="px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono"
                  title="Left Shift"
                >
                  &lt;&lt;
                </button>
              </div>

              {/* Output Console */}
              {output && (
                <div className="p-3 bg-zinc-900 border-t border-zinc-800 max-h-32 overflow-y-auto font-mono text-[11px]">
                  <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-sans mb-1">
                    <Terminal className="w-3 h-3" />
                    <span>Console Output:</span>
                  </div>
                  <pre className="text-zinc-200 whitespace-pre-wrap">{output}</pre>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
