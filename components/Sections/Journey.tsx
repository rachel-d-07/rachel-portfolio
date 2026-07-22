'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { cert: 'Python for Data Science', title: 'Started my journey', desc: 'Began Computer Science studies' },
  { cert: 'Machine Learning Specialization', title: 'Discovered my passion', desc: 'Found direction in AI & ML' },
  { cert: 'Deep Learning with TensorFlow', title: 'Built projects', desc: 'Explored data, solved problems' },
  { cert: 'LangChain & RAG Systems', title: 'Contributed to Open Source', desc: 'Joined GSSoC \'26' },
  { cert: 'Advanced NLP Certification', title: 'Building intelligent solutions', desc: 'Preparing for the next adventure' },
];

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 50%'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="relative py-32 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        className="text-3xl font-serif font-bold text-center text-yellow-50 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Voyage Log
      </motion.h2>

      <div className="relative">
        {/* Base line (dim) */}
        <div className="absolute top-6 left-0 right-0 h-[2px] bg-white/10" />

        {/* Animated draw-in line */}
        <motion.div
          className="absolute top-6 left-0 h-[2px] bg-yellow-500"
          style={{ width: lineWidth }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">
          {milestones.map((m, i) => (
            <motion.div
              key={m.cert}
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Node */}
              <motion.div
                className="w-4 h-4 rounded-full bg-yellow-500 mb-4 relative z-10"
                whileInView={{ boxShadow: '0 0 12px rgba(234,179,8,0.8)' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3 }}
              />
              <span className="text-yellow-400 font-bold text-xs leading-tight max-w-[140px]">{m.cert}</span>
              <p className="text-yellow-50 text-sm font-semibold mt-1">{m.title}</p>
              <p className="text-yellow-100/60 text-xs mt-1 max-w-[160px]">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}