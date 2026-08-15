import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'nova — lightning-fast memecoin trading on Telegram',
  description:
    'Nova is a zero-latency Telegram trading bot for sniping, tracking, and managing memecoins across Solana, Base, and Ethereum — with built-in MEV protection.',
  metadataBase: new URL('https://nova.trade'),
  openGraph: {
    title: 'nova — lightning-fast memecoin trading on Telegram',
    description:
      'Zero-latency sniping, portfolio tracking, and MEV-protected execution, right inside Telegram.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body className="bg-void text-white antialiased">{children}</body>
    </html>
  );
}
