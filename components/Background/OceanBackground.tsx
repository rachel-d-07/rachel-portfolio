'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function OceanBackground() {
  const cloudRef1 = useRef<HTMLDivElement>(null);
  const cloudRef2 = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#0a1128] via-[#0f2a4a] to-[#123a5f]">
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Clouds */}
      <div
        ref={cloudRef1}
        className="absolute top-[10%] left-[5%] w-72 h-20 bg-white/10 rounded-full blur-2xl"
      />
      <div
        ref={cloudRef2}
        className="absolute top-[20%] right-[10%] w-96 h-24 bg-white/5 rounded-full blur-2xl"
      />

      {/* Ocean waves */}
      <div
        ref={waveRef}
        className="absolute bottom-0 left-0 right-0 h-1/3 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, transparent 100px)',
          backgroundSize: '200px 100%',
        }}
      />

      {/* Ocean base */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#02060f] to-transparent" />
    </div>
  );
}