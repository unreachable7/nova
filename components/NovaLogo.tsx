'use client';

export default function NovaLogo({ className = 'w-8 h-8', id = 'nova-mark' }: { className?: string; id?: string }) {
  const gradId = `${id}-grad`;
  const glowId = `${id}-glow`;

  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="45%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <polygon
              key={i}
              points="50,50 50,6 61,32"
              fill={`url(#${gradId})`}
              opacity={0.94}
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
        <circle cx="50" cy="50" r="13" fill="#0E071D" opacity="0.85" />
        <circle cx="50" cy="50" r="13" fill="none" stroke={`url(#${gradId})`} strokeWidth="1.4" />
      </g>
    </svg>
  );
}
