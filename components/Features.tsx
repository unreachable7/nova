'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { LineChart, Settings2, Shield, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import SpotlightCard from './SpotlightCard';

const CYCLE_MS = 5200;

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Snipe',
    desc: 'Instant transaction routing for brand new token launches and liquidity pools — before anyone else.',
  },
  {
    icon: LineChart,
    title: 'Advanced Tracking',
    desc: 'Real-time wallet monitoring, automated PnL calculators, and deep holder analytics.',
  },
  {
    icon: Shield,
    title: 'MEV Protection',
    desc: 'Private RPC integration shields your trades from frontrunning bots and sandwich attacks.',
  },
  {
    icon: Settings2,
    title: 'Smart Portfolio Management',
    desc: 'Automated take-profit, stop-loss, trailing stops, and multi-wallet management in a single chat.',
  },
];

function SnipeVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
      <div className="relative w-full max-w-xs">
        {['Pool detected', 'Route computed', 'Bundle landed'].map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.5 }}
            className="flex items-center gap-3 py-2.5"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15 * i + 0.15, type: 'spring', stiffness: 300 }}
              className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"
            />
            <span className="text-sm font-mono text-white/60">{label}</span>
            <span className="ml-auto text-xs font-mono text-lavender">
              {(0.01 + i * 0.025).toFixed(3)}s
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        className="font-mono text-4xl font-bold text-gradient"
      >
        0.04s
      </motion.div>
      <span className="text-xs text-white/40 uppercase tracking-widest">total execution</span>
    </div>
  );
}

function TrackingVisual() {
  const path = 'M0,70 C 30,68 45,40 65,42 C 90,44 100,10 130,14 C 160,18 175,50 200,30';
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      <svg viewBox="0 0 200 90" className="w-full max-w-xs h-28">
        <motion.path
          d={path}
          fill="none"
          stroke="url(#track-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="track-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#E879F9" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="200"
          cy="30"
          r="3.5"
          fill="#E879F9"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1] }}
          transition={{ delay: 1.4, duration: 1.2, repeat: Infinity }}
        />
      </svg>
      <div className="grid grid-cols-3 gap-6 w-full max-w-xs text-center font-mono">
        {[
          ['+128%', '7d PnL'],
          ['4,201', 'holders'],
          ['0.9%', 'wallet share'],
        ].map(([val, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <div className="text-lg font-bold text-emerald-300">{val}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">{label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ShieldVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-40 h-40 flex items-center justify-center">
        <Shield className="w-20 h-20 text-lavender drop-shadow-[0_0_20px_rgba(192,132,252,0.5)]" strokeWidth={1.5} />
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (i * 360) / 5;
          return (
            <motion.span
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-rose-400"
              style={{ top: '50%', left: '50%' }}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [Math.cos((angle * Math.PI) / 180) * 90, 0],
                y: [Math.sin((angle * Math.PI) / 180) * 90, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.35,
                ease: 'easeIn',
              }}
            />
          );
        })}
        <motion.div
          className="absolute inset-0 rounded-full border border-violet-400/30"
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function PortfolioVisual() {
  const rows = [
    { label: 'Take profit', pct: 72, color: 'from-emerald-400 to-emerald-300' },
    { label: 'Stop loss', pct: 34, color: 'from-rose-400 to-rose-300' },
    { label: 'Trailing stop', pct: 55, color: 'from-lavender to-fuchsia-300' },
  ];
  return (
    <div className="w-full max-w-xs mx-auto space-y-6">
      {rows.map((row, i) => (
        <div key={row.label}>
          <div className="flex justify-between text-xs font-mono text-white/50 mb-2">
            <span>{row.label}</span>
            <span>{row.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${row.pct}%` }}
              transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
              className={`h-full rounded-full bg-gradient-to-r ${row.color}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const VISUALS = [SnipeVisual, TrackingVisual, ShieldVisual, PortfolioVisual];

export default function Features() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % FEATURES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const ActiveVisual = VISUALS[active];

  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-lavender/70">
            {'// core features'}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold tracking-tight">
            built for traders who can&apos;t afford to be second.
          </h2>
        </motion.div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="grid lg:grid-cols-[0.85fr_1.15fr] gap-4 lg:gap-6"
        >
          {/* Selector list */}
          <div className="flex flex-col gap-3">
            {FEATURES.map((f, i) => {
              const isActive = active === i;
              return (
                <button
                  key={f.title}
                  data-cursor-hover
                  onClick={() => setActive(i)}
                  className={`group relative text-left rounded-2xl border transition-colors duration-300 overflow-hidden px-5 py-4 ${
                    isActive
                      ? 'border-violet-400/40 bg-white/[0.05]'
                      : 'border-white/[0.07] bg-white/[0.015] hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border shrink-0 transition-colors duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 border-violet-400/30 text-lavender'
                          : 'bg-white/[0.03] border-white/10 text-white/50'
                      }`}
                    >
                      <f.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-display font-semibold text-sm transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {f.title}
                      </h3>
                      <p
                        className={`mt-1 text-xs leading-relaxed transition-all duration-300 overflow-hidden ${
                          isActive ? 'text-white/55 max-h-16 opacity-100' : 'text-white/35 max-h-16 opacity-70'
                        }`}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]">
                      <motion.div
                        key={active}
                        initial={{ width: '0%' }}
                        animate={{ width: paused ? undefined : '100%' }}
                        transition={{ duration: CYCLE_MS / 1000, ease: 'linear' }}
                        className="h-full bg-gradient-to-r from-violet-400 to-fuchsia-300"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Visual showcase panel */}
          <SpotlightCard className="glass rounded-3xl min-h-[24rem] flex items-center justify-center p-8">
            <div className="absolute inset-0 dot-grid opacity-[0.06] pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <ActiveVisual />
              </motion.div>
            </AnimatePresence>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}