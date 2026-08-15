import type { Metadata } from 'next';
import { Bricolage_Grotesque, Manrope, Space_Mono } from 'next/font/google';
import './globals.css';
import GrainOverlay from '@/components/GrainOverlay';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
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
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-void text-white antialiased font-sans">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}