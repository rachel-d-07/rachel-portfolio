'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Straw hat placeholder - top left, will animate later */}
      <div className="absolute top-24 left-10 w-16 h-16 opacity-80">
        {/* Replace this div with your real straw hat image later */}
        <div className="w-full h-full rounded-full border-4 border-yellow-600 bg-yellow-500/20" />
      </div>

      {/* Nav placeholder text, staggered fade-in */}
      <motion.nav
        className="absolute top-8 flex gap-8 text-sm tracking-widest text-yellow-100/80"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'JOURNEY', 'CONTACT'].map((item) => (
          <motion.span
            key={item}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.nav>

      {/* Hero title, word by word */}
      <motion.h1
        className="text-4xl md:text-6xl font-serif font-bold text-yellow-50 mt-20"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
        }}
      >
        {'The Grand Line of Artificial Intelligence'.split(' ').map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-3"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="text-yellow-100/70 mt-6 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Sailing through data, building intelligent systems, and crafting solutions that create real-world impact.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition">
          Explore My Journey
        </button>
        <button className="px-6 py-3 border border-yellow-200/40 text-yellow-100 rounded-md hover:bg-white/5 transition">
          View My Work
        </button>
      </motion.div>
    </section>
  );
}