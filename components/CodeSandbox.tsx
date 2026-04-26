'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw } from 'lucide-react';

interface Token {
  text: string;
  color: string;
}

interface CodeLine {
  indent: number;
  tokens: Token[];
}

const codeLines: CodeLine[] = [
  { indent: 0, tokens: [{ text: 'function ', color: '#e78a4e' }, { text: 'InteractiveEnvelope', color: '#333' }, { text: '() {', color: '#555' }] },
  { indent: 1, tokens: [{ text: 'const ', color: '#e78a4e' }, { text: '[isOpen, setIsOpen]', color: '#333' }, { text: ' = ', color: '#555' }, { text: 'useState', color: '#e78a4e' }, { text: '(', color: '#555' }, { text: 'false', color: '#c75a4e' }, { text: ');', color: '#555' }] },
  { indent: 1, tokens: [] },
  { indent: 1, tokens: [{ text: 'return ', color: '#e78a4e' }, { text: '(', color: '#555' }] },
  { indent: 2, tokens: [{ text: '<', color: '#888' }, { text: 'div', color: '#e78a4e' }, { text: ' className=', color: '#888' }, { text: '"envelope"', color: '#6a8759' }, { text: '>', color: '#888' }] },
  { indent: 3, tokens: [{ text: '<', color: '#888' }, { text: 'svg', color: '#e78a4e' }, { text: ' viewBox=', color: '#888' }, { text: '"0 0 240 180"', color: '#6a8759' }, { text: '>', color: '#888' }] },
  { indent: 4, tokens: [{ text: '<', color: '#888' }, { text: 'rect', color: '#e78a4e' }, { text: ' x=', color: '#888' }, { text: '"20"', color: '#6a8759' }, { text: ' y=', color: '#888' }, { text: '"50"', color: '#6a8759' }] },
  { indent: 5, tokens: [{ text: 'width=', color: '#888' }, { text: '"200"', color: '#6a8759' }, { text: ' height=', color: '#888' }, { text: '"120"', color: '#6a8759' }, { text: ' />', color: '#888' }] },
  { indent: 4, tokens: [{ text: '<', color: '#888' }, { text: 'polygon', color: '#e78a4e' }] },
  { indent: 5, tokens: [{ text: 'points=', color: '#888' }, { text: '"20,50 120,10 220,50"', color: '#6a8759' }] },
  { indent: 5, tokens: [{ text: 'style=', color: '#888' }, { text: '{', color: '#555' }, { text: '{', color: '#555' }] },
  { indent: 6, tokens: [{ text: 'transform: isOpen', color: '#333' }] },
  { indent: 7, tokens: [{ text: '? ', color: '#555' }, { text: '"rotateX(180deg)"', color: '#6a8759' }] },
  { indent: 7, tokens: [{ text: ': ', color: '#555' }, { text: '"rotateX(0)"', color: '#6a8759' }] },
  { indent: 5, tokens: [{ text: '}} />', color: '#555' }] },
  { indent: 3, tokens: [{ text: '</', color: '#888' }, { text: 'svg', color: '#e78a4e' }, { text: '>', color: '#888' }] },
  { indent: 2, tokens: [{ text: '</', color: '#888' }, { text: 'div', color: '#e78a4e' }, { text: '>', color: '#888' }] },
  { indent: 1, tokens: [{ text: ');', color: '#555' }] },
  { indent: 0, tokens: [{ text: '}', color: '#555' }] },
];

export default function CodeSandbox() {
  const [visibleLines, setVisibleLines] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startPlayback();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startPlayback = () => {
    setVisibleLines(1);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          setTimeout(() => {
            setVisibleLines(1);
          }, 2000);
          return codeLines.length;
        }
        return prev + 1;
      });
    }, 350);
  };

  const resetPlayback = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startPlayback();
  };

  return (
    <div className="bg-white border-4 border-[#e78a4e] rounded-2xl p-8 flex flex-col gap-6 h-96">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <span className="font-mono text-sm text-gray-600">InteractiveEnvelope.tsx</span>
        <button
          onClick={resetPlayback}
          className="flex items-center gap-2 bg-[#e78a4e] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#d47a3e] transition-colors cursor-pointer border-none"
          title="Replay"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Code display */}
      <div className="font-mono text-sm flex-1 overflow-hidden">
        {codeLines.slice(0, visibleLines).map((line, idx) => (
          <div key={idx} className="leading-6 h-6 flex">
            <span className="inline-block w-8 text-gray-400 text-right pr-4 select-none">
              {idx + 1}
            </span>
            <span className="inline-block" style={{ marginLeft: `${line.indent * 20}px` }}>
              {line.tokens.map((token, tidx) => (
                <span key={tidx} style={{ color: token.color }}>
                  {token.text}
                </span>
              ))}
            </span>
          </div>
        ))}
        {visibleLines < codeLines.length && (
          <div className="animate-pulse">
            <span className="inline-block w-1 h-5 bg-[#e78a4e]" />
          </div>
        )}
      </div>

      {/* Footer with play button */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <span className="text-xs text-gray-500">
          {visibleLines} / {codeLines.length} lines
        </span>
        <button
          onClick={resetPlayback}
          className="flex items-center gap-2 bg-[#e78a4e] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[#d47a3e] transition-colors cursor-pointer border-none"
          title="Play"
        >
          <Play size={16} />
          Play
        </button>
      </div>
    </div>
  );
}
