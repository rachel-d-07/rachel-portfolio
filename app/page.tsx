import OceanBackground from '@/components/Background/OceanBackground';
import Hero from '@/components/Sections/Hero';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <OceanBackground />
      <Hero />
    </main>
  );
}