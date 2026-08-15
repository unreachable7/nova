'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Marquee from './Marquee';

function Counter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (isInView) motionVal.set(to);
  }, [isInView, to, motionVal]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const STATS = [
  { label: 'Total Volume Processed', value: <Counter to={140} prefix="$" suffix="M+" /> },
  { label: 'Active Traders', value: <Counter to={45} suffix="k+" /> },
  { label: 'Avg. Execution Speed', value: <Counter to={0.08} prefix="<" decimals={2} suffix="s" /> },
  { label: 'Supported Chains', value: 'SOL · BASE · ETH' },
];

export default function StatsBar() {
  return (
    <section id="performance" className="relative border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center lg:text-left"
          >
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-gradient tracking-tight">
              {stat.value}
            </div>
            <div className="mt-1.5 text-xs text-white/45 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-white/[0.05]">
        <Marquee />
      </div>
    </section>
  );
}
