'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Sunset gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Flickering lantern glow */}
      <motion.div
        className="absolute top-10 right-16 w-24 h-24 rounded-full bg-yellow-500/20 blur-2xl"
        animate={{ opacity: [0.3, 0.7, 0.4, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-serif font-bold text-yellow-50 mb-4">
          Let's Set Sail
        </h2>
        <p className="text-yellow-100/70 mb-10">
          Let's connect and build something amazing together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
          >
            Send an Email
          </a>

          <a
            href="https://github.com/rachel-d-07"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-yellow-200/40 text-yellow-100 rounded-md hover:bg-white/5 transition"
          >
            View GitHub
          </a>
        </div>

        <div className="flex justify-center gap-6 text-yellow-100/60 text-sm">
          <a href="#" className="hover:text-yellow-300 transition">LinkedIn</a>
          <a href="https://github.com/rachel-d-07" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">GitHub</a>
          <a href="#" className="hover:text-yellow-300 transition">LeetCode</a>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="relative mt-24 pt-8 border-t border-white/10 text-center text-yellow-100/40 text-xs">
        © {new Date().getFullYear()} Rachel D'Souza. All rights reserved.
      </div>
    </section>
  );
}