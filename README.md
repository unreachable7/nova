# nova — landing page

Lightning-fast Telegram trading bot landing page. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx      # fonts, metadata
  page.tsx         # section order
  globals.css      # theme tokens, glass/gradient utilities, dot-grid
components/
  Navbar.tsx        # sticky glass nav
  Hero.tsx           # headline + floating glass card w/ live tx ticks
  StatsBar.tsx        # animated counters
  Features.tsx         # bento grid
  HowItWorks.tsx         # 3-step process
  FAQ.tsx                  # accordion
  Footer.tsx                 # socials + risk disclosure
  NovaLogo.tsx                # 8-point star mark (SVG)
```

## Before going live

- Swap `BOT_URL` (in `Hero.tsx` and `Navbar.tsx`) and the social links in `Footer.tsx` for your real handles.
- Update `metadataBase` in `app/layout.tsx` to your production domain, and add an OG image.
- Wire the live stats in `StatsBar.tsx` and the ticker feed in `Hero.tsx` to a real data source if you want them to reflect live activity rather than illustrative numbers.

## Deploy

```bash
npx vercel
```

`vercel.json` is preconfigured for the Next.js framework preset with baseline security headers.
