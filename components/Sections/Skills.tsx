'use client';
import { motion } from 'framer-motion';

const skillGroups = [
  { title: 'AI & ML', items: ['Python', 'Scikit-learn', 'PyTorch'] },
  { title: 'Deep Learning', items: ['TensorFlow', 'Keras', 'CNN', 'RNN'] },
  { title: 'Backend', items: ['FastAPI', 'Flask', 'REST APIs'] },
  { title: 'Data & Cloud', items: ['AWS', 'MongoDB', 'Docker'] },
  { title: 'Tools', items: ['Git', 'VS Code', 'Postman', 'Linux'] },
  { title: 'Core Skills', items: ['Problem Solving', 'System Design', 'Data Structures'] },
];

export default function Skills() {
  return (
    <section className="relative py-32 px-6">
      <motion.h2
        className="text-3xl font-serif font-bold text-center text-yellow-50 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Arsenal
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="relative overflow-hidden rounded-xl border border-yellow-500/20 bg-white/5 backdrop-blur-sm p-6 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Shine sweep on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            <h3 className="text-yellow-400 font-semibold mb-3 text-sm tracking-wide">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-1 rounded-md bg-white/10 text-yellow-100/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}