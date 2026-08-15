'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import NovaLogo from './NovaLogo';

const BOT_URL = 'https://t.me/NovaTradingBot';

const TICKS = [
  { pair: 'WIF / SOL', type: 'buy', amount: '2.4 SOL', speed: '0.06s' },
  { pair: 'PNUT / SOL', type: 'snipe', amount: '5.1 SOL', speed: '0.05s' },
  { pair: 'BRETT / ETH', type: 'buy', amount: '0.8 ETH', speed: '0.09s' },
  { pair: 'TOSHI / BASE', type: 'sell', amount: '1.2 ETH', speed: '0.07s' },
  { pair: 'POPCAT / SOL', type: 'snipe', amount: '3.6 SOL', speed: '0.04s' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const [tickIndex, setTickIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTickIndex((i) => (i + 1) % TICKS.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const visibleTicks = [0, 1, 2].map((offset) => TICKS[(tickIndex + offset) % TICKS.length]);

  return (
    <section id="top" className="relative pt-40 pb-28 overflow-hidden">
      {/* atmosphere */}
      <div className="absolute inset-0 bg-nova-radial pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 text-xs font-medium text-lavender/90 glow-border rounded-full px-3.5 py-1.5 mb-7"
          >
            <Zap className="w-3.5 h-3.5" />
            next-gen telegram trading bot
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-gradient"
          >
            lightning-fast memecoin sniping &amp; trading on telegram.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed"
          >
            Dominate the blockchain with zero-latency execution, advanced portfolio
            tracking, and bulletproof MEV protection — right inside Telegram.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 bg-[length:200%_auto] hover:bg-right shadow-glow-lg transition-all duration-500"
            >
              Launch Telegram Bot <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white/90 glass hover:border-white/25 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Explore Documentation
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex items-center gap-3 text-xs text-white/40"
          >
            <span>no downloads</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>non-custodial</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>solana · base · ethereum</span>
          </motion.div>
        </div>

        {/* Hero visual: floating glass card with pulsing star + live ticks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div
            animate={{ rotateX: [0, 2, 0], rotateY: [0, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative glass rounded-3xl p-8 shadow-glow-lg animate-drift"
          >
            <div className="absolute inset-0 rounded-3xl dot-grid opacity-10 pointer-events-none" />

            <div className="relative flex flex-col items-center py-6">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-violet-400/40 animate-pulse-ring" />
                <span className="absolute inset-0 rounded-full border border-fuchsia-400/30 animate-pulse-ring [animation-delay:1s]" />
                <span className="absolute inset-0 rounded-full border border-violet-400/20 animate-pulse-ring [animation-delay:2s]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                >
                  <NovaLogo className="w-28 h-28 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]" id="hero-mark" />
                </motion.div>
              </div>
              <p className="mt-6 text-sm text-white/50 font-mono">avg execution &lt; 0.08s</p>
            </div>

            <div className="relative mt-2 space-y-2">
              {visibleTicks.map((t, i) => (
                <motion.div
                  key={`${t.pair}-${tickIndex}-${i}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1 - i * 0.25, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between text-xs rounded-xl bg-white/[0.03] border border-white/[0.06] px-3.5 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        t.type === 'sell' ? 'bg-rose-400' : 'bg-emerald-400'
                      }`}
                    />
                    <span className="font-mono text-white/70">{t.pair}</span>
                  </div>
                  <span className="text-white/40 font-mono">{t.amount}</span>
                  <span className="text-lavender font-mono">{t.speed}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
