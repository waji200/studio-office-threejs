export interface PriceTriangleProps {
  change: number;
}

export default function PriceTriangle({ change }: PriceTriangleProps) {
  const isUp = change >= 0;
  const color = isUp ? '#22c55e' : '#ef4444';

  return (
    <span className="price-triangle-wrap">
      <svg
        width="14"
        height="12"
        viewBox="0 0 14 12"
        style={{
          marginRight: '4px',
          transform: isUp ? 'none' : 'rotate(180deg)',
          transition: 'transform 0.3s ease',
        }}
      >
        <polygon points="7,0 14,12 0,12" fill={color} />
      </svg>
      <span
        style={{
          color,
          fontSize: '0.35em',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          letterSpacing: '0',
        }}
      >
        {isUp ? '+' : ''}{change.toFixed(1)}%
      </span>
    </span>
  );
}
