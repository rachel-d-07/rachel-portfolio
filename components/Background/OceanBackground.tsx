'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function OceanBackground() {
  const cloudRef1 = useRef<HTMLDivElement>(null);
  const cloudRef2 = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<{ top: number; left: number; dur: number }[]>([]);

  useEffect(() => {
    const generated = [...Array(60)].map(() => ({
      top: Math.random() * 60,
      left: Math.random() * 100,
      dur: 2 + Math.random() * 3,
    }));
    setStars(generated);

    if (cloudRef1.current) {
      gsap.to(cloudRef1.current, {
        x: '+=120',
        duration: 40,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (cloudRef2.current) {
      gsap.to(cloudRef2.current, {
        x: '-=150',
        duration: 55,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (waveRef.current) {
      gsap.to(waveRef.current, {
        backgroundPositionX: '200px',
        duration: 6,
        repeat: -1,
        ease: 'linear',
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-linear-to-b from-[#0a1128] via-[#0f2a4a] to-[#123a5f]">
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              animationDuration: `${s.dur}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={cloudRef1}
        className="absolute top-[10%] left-[5%] w-72 h-20 bg-white/10 rounded-full blur-2xl"
      />
      <div
        ref={cloudRef2}
        className="absolute top-[20%] right-[10%] w-96 h-24 bg-white/5 rounded-full blur-2xl"
      />

      <div
        ref={waveRef}
        className="absolute bottom-0 left-0 right-0 h-1/3 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, transparent 100px)',
          backgroundSize: '200px 100%',
        }}
      />

      {/* Distant island silhouette - placeholder */}
      <div className="absolute bottom-[15%] left-[8%] w-40 h-16 bg-black/30 rounded-t-full blur-sm" />
      <div className="absolute bottom-[15%] right-[15%] w-56 h-20 bg-black/20 rounded-t-full blur-sm" />

      {/* Ship silhouette - placeholder, swap for real art later */}
      <div className="absolute bottom-[18%] right-[20%] w-48 h-32">
        <div className="absolute bottom-0 w-full h-10 bg-black/40 rounded-b-3xl" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1 h-20 bg-black/40" />
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-16 h-16 bg-black/20 rounded-tr-full" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-linear-to-t from-[#02060f] to-transparent" />
    </div>
  );
}
