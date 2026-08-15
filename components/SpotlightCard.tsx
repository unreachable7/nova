'use client';

import { motion } from 'framer-motion';
import { CSSProperties, MouseEvent, ReactNode, useRef } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(192,132,252,0.16)',
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      data-cursor-hover
      className={`group relative overflow-hidden ${className}`}
      style={
        {
          '--mx': '50%',
          '--my': '50%',
        } as CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(280px circle at var(--mx) var(--my), ${spotlightColor}, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
