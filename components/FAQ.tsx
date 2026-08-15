'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    q: 'Does Nova ever hold my private keys?',
    a: 'No. Nova is non-custodial — your wallet keys are encrypted client-side and never leave your device unencrypted. Nova cannot move funds without your explicit confirmation on every transaction.',
  },
  {
    q: 'What fees does Nova charge?',
    a: 'Nova charges a small percentage fee only on successful trades. There are no subscription costs, no hidden charges, and failed transactions are never billed.',
  },
  {
    q: 'Which networks are supported?',
    a: 'Nova currently supports Solana, Base, and Ethereum, with private RPC routing tuned for each chain. More chains are added as demand grows.',
  },
  {
    q: 'How does the MEV protection actually work?',
    a: 'Trades are routed through private, encrypted RPC endpoints instead of the public mempool, so frontrunning bots and sandwich attackers never see your transaction before it lands.',
  },
  {
    q: 'Can I use Nova on multiple wallets at once?',
    a: 'Yes. Nova supports multi-wallet management from a single Telegram chat, letting you split allocations, snipe from several wallets in parallel, and track combined PnL in one view.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-lavender/70">
            faq
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            questions, answered.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold text-white/90">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-lavender"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
