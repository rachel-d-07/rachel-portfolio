'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState(0);
  const [stars, setStars] = useState<{ top: number; left: number; dur: number }[]>([]);

  useEffect(() => {
    setStars(
      [...Array(40)].map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        dur: 2 + Math.random() * 2,
      }))
    );

    const timers = [
      setTimeout(() => setStage(1), 600),
      setTimeout(() => setStage(2), 1400),
      setTimeout(() => setStage(3), 2400),
      setTimeout(() => setStage(4), 3200),
      setTimeout(onDone, 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {stage >= 1 && (
          <div className="absolute inset-0">
            {stars.map((s, i) => (
              <motion.span
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{ top: `${s.top}%`, left: `${s.left}%` }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: s.dur, repeat: Infinity }}
              />
            ))}
          </div>
        )}

        {stage >= 2 && (
          <motion.div
            className="relative w-24 h-24 bg-yellow-500 rounded-full"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: stage >= 3 ? 0.4 : 1,
              rotate: stage >= 3 ? 360 : 0,
            }}
            transition={{ duration: 1 }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}