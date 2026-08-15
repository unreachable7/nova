'use client';

const ITEMS = [
  'SOLANA', 'BASE', 'ETHEREUM', 'PRIVATE RPC', 'JITO BUNDLES', 'ZERO SLIPPAGE GUARD',
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-10 animate-marquee">
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10 shrink-0">
            <span className="font-mono text-xs tracking-[0.25em] text-white/35">{item}</span>
            <span className="w-1 h-1 rounded-full bg-violet-400/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
