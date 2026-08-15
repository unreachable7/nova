'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Send, Wallet } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const STEPS = [
  {
    icon: Send,
    title: 'Open Telegram',
    desc: 'Click launch to open @NovaTradingBot instantly — zero downloads, zero installs.',
  },
  {
    icon: Wallet,
    title: 'Fund & Configure',
    desc: 'Deposit SOL or ETH, or import your wallet. Set your preferred gas and slippage.',
  },
  {
    icon: MessageCircle,
    title: 'Snipe & Profit',
    desc: 'Paste any contract address to instantly buy, track, and manage your memecoins.',
  },
];

export default function HowItWorks() {
  return (
    <section id="security" className="relative py-28 border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-lavender/70">
            // how it works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold tracking-tight">
            three steps between you and the next launch.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-9 left-[16.5%] right-[16.5%] h-px overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-violet-400/25 to-transparent" />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-fuchsia-300 shadow-[0_0_10px_rgba(232,121,249,0.8)]"
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <SpotlightCard className="relative glass rounded-2xl p-7 h-full">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-lavender">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-white/30">
                    {String(i + 1).padStart(2, '0')} / 03
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg tracking-tight">{step.title}</h3>
                <p className="mt-2.5 text-sm text-white/55 leading-relaxed">{step.desc}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
