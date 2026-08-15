'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Magnetic from './Magnetic';
import NovaLogo from './NovaLogo';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Performance', href: '#performance' },
  { label: 'Security', href: '#security' },
  { label: 'Docs', href: '#faq' },
];

const BOT_URL = 'https://t.me/NovaTradingBot';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 mt-3 transition-all duration-300 ${
          scrolled ? 'mt-2' : 'mt-3'
        }`}
      >
        <div className="glass rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between shadow-glow">
          <a href="#top" className="flex items-center gap-2.5 group">
            <NovaLogo className="w-8 h-8 transition-transform duration-500 group-hover:rotate-45" />
            <span className="text-lg font-display font-extrabold tracking-tight lowercase text-white">
              nova
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/60 pr-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              bot online
            </div>
            <Magnetic strength={0.25}>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="text-sm font-display font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.55)] transition-shadow"
              >
                Launch Bot
              </motion.a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
