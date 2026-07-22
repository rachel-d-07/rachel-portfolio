'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv: any = motion.div;
const MotionSpan: any = motion.span;

export default function Loader({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
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
      <MotionDiv
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {stage >= 1 && (
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <MotionSpan
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
              />
            ))}
          </div>
        )}

        {stage >= 2 && (
          <MotionDiv
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
        </MotionDiv>
    </AnimatePresence>
  );
}