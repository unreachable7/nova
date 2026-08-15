import { Github, MessageCircle, Send, Twitter } from 'lucide-react';
import NovaLogo from './NovaLogo';

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Performance', href: '#performance' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
];

const SOCIALS = [
  { icon: Send, href: 'https://t.me/NovaTradingBot', label: 'Telegram' },
  { icon: Twitter, href: 'https://x.com/novatradingbot', label: 'Twitter / X' },
  { icon: MessageCircle, href: 'https://discord.gg/nova', label: 'Discord' },
  { icon: Github, href: 'https://github.com/nova-labs', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <NovaLogo className="w-7 h-7" id="footer-mark" />
              <span className="text-lg font-display font-extrabold lowercase">nova</span>
            </div>
            <p className="mt-4 text-sm text-white/45 leading-relaxed">
              Zero-latency memecoin trading, built for Telegram. Snipe, track, and manage
              your positions without ever leaving the chat.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                Navigate
              </h4>
              <ul className="space-y-2.5">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                Community
              </h4>
              <div className="flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    data-cursor-hover
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/60 hover:text-lavender hover:border-violet-400/30 hover:-translate-y-0.5 transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} Nova. All rights reserved.</p>
          <p className="text-xs text-white/35 max-w-xl leading-relaxed">
            Risk disclosure: Trading cryptocurrencies, and memecoins in particular, carries
            substantial risk of loss due to extreme volatility, low liquidity, and smart
            contract risk. Nova is a software tool only and does not provide financial advice.
            Only trade with funds you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}
