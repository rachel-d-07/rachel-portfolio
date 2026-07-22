'use client';
import { useEffect } from 'react';
import { initLenis } from '@/lib/lenis';
import CustomCursor from '@/components/Cursor/CustomCursor';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}