import OceanBackground from '@/components/Background/OceanBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <OceanBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Hero section coming next</h1>
      </div>
    </main>
  );
}