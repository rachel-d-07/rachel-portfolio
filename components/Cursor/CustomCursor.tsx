'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MotionDiv: any = motion.div;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <MotionDiv
      className="fixed top-0 left-0 pointer-events-none z-100 w-6 h-6 rounded-full border-2 border-yellow-500"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        rotate: isHovering ? 45 : 0,
        scale: isHovering ? 1.4 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.3 }}
    />
  );
}