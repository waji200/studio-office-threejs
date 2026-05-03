'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InteractiveEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link
      href="/projects"
      className="flex items-center justify-center h-full relative overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-[-4px] no-underline"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
        {/* Envelope SVG */}
        <svg
          viewBox="0 0 240 180"
          className="w-full h-full z-10 relative"
          style={{
            filter: `drop-shadow(0 0 ${isOpen ? '20' : '0'}px rgba(0,0,0,0.1))`,
          }}
        >
          {/* Envelope body */}
          <rect
            x="20"
            y="50"
            width="200"
            height="120"
            rx="6"
            fill="#fff"
            stroke="#000"
            strokeWidth="1"
          />

          {/* Envelope flap (animated) */}
          <g
            style={{
              transformOrigin: '120px 50px',
              transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
              transform: isOpen ? 'rotateX(0deg)' : 'rotateX(180deg)',
            }}
          >
            <polygon
              points="20,50 120,10 220,50"
              fill={isOpen ? '#f8f8f8' : '#fff'}
              stroke="#000"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </g>

          {/* V-lines on envelope */}
          <line
            x1="20"
            y1="50"
            x2="120"
            y2="120"
            stroke="#000"
            strokeWidth="1"
            opacity="0.2"
          />
          <line
            x1="220"
            y1="50"
            x2="120"
            y2="120"
            stroke="#000"
            strokeWidth="1"
            opacity="0.2"
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
              stroke="#eee"
              strokeWidth="0.5"
            />
            <text
              x="55"
              y="80"
              fontFamily="Georgia, serif"
              fontSize="10"
              fill="#111"
              fontWeight="600"
            >
              CFOs Funded AI
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

    </Link>
  );
}
