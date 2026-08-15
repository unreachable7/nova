'use client';

import { motion } from 'framer-motion';
import { LineChart, Settings2, Shield, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Snipe',
    desc: 'Instant transaction routing for brand new token launches and liquidity pools — before anyone else.',
    span: 'lg:col-span-2 lg:row-span-2',
    big: true,
  },
  {
    icon: LineChart,
    title: 'Advanced Tracking',
    desc: 'Real-time wallet monitoring, automated PnL calculators, and deep holder analytics.',
    span: 'lg:col-span-1',
  },
  {
    icon: Shield,
    title: 'MEV Protection',
    desc: 'Private RPC integration shields your trades from frontrunning bots and sandwich attacks.',
    span: 'lg:col-span-1',
  },
  {
    icon: Settings2,
    title: 'Smart Portfolio Management',
    desc: 'Automated take-profit, stop-loss, trailing stops, and multi-wallet management in a single chat.',
    span: 'lg:col-span-2',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-lavender/70">
            core features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            built for traders who can&apos;t afford to be second.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative glass rounded-2xl p-7 overflow-hidden transition-shadow duration-300 hover:shadow-glow hover:border-violet-400/30 ${f.span} ${
                f.big ? 'flex flex-col justify-between' : ''
              }`}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-lavender mb-5">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className={`font-bold tracking-tight ${f.big ? 'text-2xl' : 'text-lg'}`}>
                  {f.title}
                </h3>
                <p className={`mt-2.5 text-white/55 leading-relaxed ${f.big ? 'text-base max-w-sm' : 'text-sm'}`}>
                  {f.desc}
                </p>
              </div>
              {f.big && (
                <div className="relative mt-8 flex items-center gap-1.5 opacity-70">
                  {Array.from({ length: 24 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="w-1 rounded-full bg-gradient-to-t from-violet-500/30 to-fuchsia-300/70"
                      style={{ height: `${8 + ((idx * 7) % 26)}px` }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
