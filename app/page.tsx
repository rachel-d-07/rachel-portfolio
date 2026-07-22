'use client';
import { useState } from 'react';
import OceanBackground from '@/components/Background/OceanBackground';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Skills from '@/components/Sections/Skills';
import Loader from '@/components/Loader/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen text-white">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <OceanBackground />
      {!loading && (
        <>
          <Hero />
          <About />
          <Skills />
        </>
      )}
    </main>
  );
}