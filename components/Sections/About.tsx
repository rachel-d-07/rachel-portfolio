'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const controls = animate(0, target, {
            duration: 1.5,
            onUpdate: (v) => setDisplayValue(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="text-2xl font-bold text-yellow-600">
      {displayValue}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="relative py-32 px-6 flex justify-center">
      <motion.div
        className="relative max-w-3xl w-full bg-[#f4ecd8] text-[#3a2e1f] rounded-lg shadow-2xl p-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, rgba(0,0,0,0.03), transparent 60%)',
        }}
      >
        <p className="text-lg italic leading-relaxed">
          "I'm Rachel D'Souza, a passionate AI/ML Engineer who loves turning ideas into real-world impact."
        </p>
        <p className="mt-4 text-sm text-[#5a4a35]">
          From building intelligent systems to exploring new technologies, I'm always ready for the next adventure.
        </p>
        <p className="mt-2 text-sm font-semibold">— R. D'Souza</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <div className="text-center">
            <Counter target={2} suffix="+" />
            <p className="text-xs mt-1 text-[#5a4a35]">Years Experience</p>
          </div>
          <div className="text-center">
            <Counter target={15} suffix="+" />
            <p className="text-xs mt-1 text-[#5a4a35]">Projects Completed</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-yellow-600">M.Sc.</span>
            <p className="text-xs mt-1 text-[#5a4a35]">AI & ML, MIT ADT</p>
          </div>
          <div className="text-center">
            <Counter target={10} suffix="+" />
            <p className="text-xs mt-1 text-[#5a4a35]">Open Source Contributions</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}