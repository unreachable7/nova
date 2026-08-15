import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Navbar from '@/components/Navbar';
import StatsBar from '@/components/StatsBar';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-void overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
