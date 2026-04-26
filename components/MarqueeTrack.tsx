'use client';

import PriceTriangle from './PriceTriangle';

export interface MarqueeItem {
  name: string;
  change: number;
}

export interface MarqueeTrackProps {
  items: MarqueeItem[];
  direction: 'left' | 'right';
}

export default function MarqueeTrack({ items, direction }: MarqueeTrackProps) {
  const content = items.map((item, i) => (
    <span key={i} className="marquee-company-item">
      {item.name}
      <PriceTriangle change={item.change} />
    </span>
  ));

  return (
    <div className={`logo-track track-${direction}`} style={{
      fontFamily: 'Georgia, serif',
      fontSize: '72px',
      fontWeight: 400,
      color: '#000',
      letterSpacing: '1px',
      whiteSpace: 'nowrap',
      animation: direction === 'left' ? 'scroll-left 50s linear infinite' : 'scroll-right 50s linear infinite',
    }}>
      <span>{content}</span>
      <span>{content}</span>
    </div>
  );
}
