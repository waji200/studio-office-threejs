'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InteractiveEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link
      href="/projects"
      className="block bg-gradient-to-br from-[#081026] to-[#0d1b3a] rounded-2xl min-h-96 relative overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl no-underline"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Envelope scene container */}
      <div className="flex flex-col items-center justify-center flex-1 relative p-12">
        {/* Glow effect */}
        <div
          className="absolute w-56 h-56 bg-[#3ecdfa] rounded-full blur-3xl pointer-events-none"
          style={{
            opacity: isOpen ? 0.4 : 0.15,
            transition: 'opacity 0.5s ease',
          }}
        />

        {/* Envelope SVG */}
        <svg
          viewBox="0 0 240 180"
          className="w-52 h-40 z-10 relative"
          style={{
            filter: `drop-shadow(0 0 ${isOpen ? '30' : '15'}px rgba(96,213,251,0.5))`,
          }}
        >
          {/* Envelope body */}
          <rect
            x="20"
            y="50"
            width="200"
            height="120"
            rx="6"
            fill="rgba(10,20,50,0.9)"
            stroke="#60d5fb"
            strokeWidth="1.5"
          />

          {/* Envelope flap (animated) */}
          <g
            style={{
              transformOrigin: '120px 50px',
              transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
            }}
          >
            <polygon
              points="20,50 120,10 220,50"
              fill={isOpen ? 'rgba(96,213,251,0.15)' : 'rgba(10,20,50,0.95)'}
              stroke="#60d5fb"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>

          {/* V-lines on envelope */}
          <line
            x1="20"
            y1="50"
            x2="120"
            y2="120"
            stroke="#60d5fb"
            strokeWidth="0.6"
            opacity="0.4"
          />
          <line
            x1="220"
            y1="50"
            x2="120"
            y2="120"
            stroke="#60d5fb"
            strokeWidth="0.6"
            opacity="0.4"
          />

          {/* Letter peeking out when open */}
          <g
            style={{
              transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s, opacity 0.4s ease 0.15s',
              transform: isOpen ? 'translateY(-55px)' : 'translateY(0px)',
              opacity: isOpen ? 1 : 0,
            }}
          >
            <rect
              x="40"
              y="55"
              width="160"
              height="100"
              rx="4"
              fill="rgba(255,255,255,0.95)"
            />
            <text
              x="55"
              y="80"
              fontFamily="Georgia, serif"
              fontSize="11"
              fill="#111"
              fontWeight="600"
            >
              Heir
            </text>
            <text
              x="55"
              y="100"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill="#999"
            >
              Coming
            </text>
            <text
              x="55"
              y="114"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill="#999"
            >
              Soon
            </text>
            <text
              x="55"
              y="128"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill="#999"
            >
              ...
            </text>
            <line
              x1="55"
              y1="140"
              x2="140"
              y2="140"
              stroke="#eee"
              strokeWidth="0.5"
            />
          </g>
        </svg>

        {/* Labels */}
        <div className="flex flex-col items-center gap-2 mt-8 z-10">
          <span className="text-white text-lg font-semibold">Heir</span>
          <span className="text-sm text-cyan-300">
            {isOpen ? 'View Project →' : 'Hover to Open'}
          </span>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500 pointer-events-none"
        style={{
          opacity: isOpen ? 0.25 : 0.12,
          transition: 'opacity 0.3s ease',
        }}
      />
    </Link>
  );
}
