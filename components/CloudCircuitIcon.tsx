export default function CloudCircuitIcon({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      width="400"
      height="400"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 75 C 50 60, 65 50, 80 50 C 105 50, 115 65, 115 80 C 130 80, 130 100, 115 100 L 50 100 C 30 100, 30 75, 50 75 Z"
        stroke="#d0d0d0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 100 L45 115 L25 115"
        stroke="#d0d0d0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="115" r="5" fill="#d0d0d0" />
      <path
        d="M65 100 L65 130 L45 130"
        stroke="#d0d0d0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="130" r="5" fill="#d0d0d0" />
      <path
        d="M85 100 L85 130"
        stroke="#d0d0d0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="85" cy="135" r="5" fill="#d0d0d0" />
      <path
        d="M105 100 L105 115 L125 115"
        stroke="#d0d0d0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="130" cy="115" r="5" fill="#d0d0d0" />
    </svg>
  );
}
