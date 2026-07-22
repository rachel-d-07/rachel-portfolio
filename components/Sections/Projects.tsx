'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    tag: 'Featured',
    tagColor: 'bg-emerald-500/80',
    title: 'Query-Aware RAG Pipeline',
    desc: 'Optimized RAG pipeline with FAISS, BM25 & Groq API to improve accuracy and reduce hallucinations.',
    stack: ['Python', 'LangChain', 'FAISS', 'Groq'],
  },
  {
    tag: 'Live',
    tagColor: 'bg-red-500/80',
    title: 'AI Resume to Job Matcher',
    desc: 'Intelligent matching engine that compares resumes with job descriptions using NLP.',
    stack: ['Python', 'NLP', 'FastAPI', 'Scikit-learn'],
  },
  {
    tag: 'In Progress',
    tagColor: 'bg-blue-500/80',
    title: 'BizInsight-AI',
    desc: 'AI-powered analytics platform that turns business data into actionable insights.',
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
  },
  {
    tag: 'Open Source',
    tagColor: 'bg-yellow-600/80',
    title: 'Leetcode Journey Tracker',
    desc: 'Track DSA progress, visualize patterns, and stay consistent with daily goals.',
    stack: ['Python', 'Streamlit', 'SQLite', 'Plotly'],
  },
];

export default function Projects() {
  return (
    <section className="relative py-32 px-6">
      <motion.h2
        className="text-3xl font-serif font-bold text-center text-yellow-50 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Islands of Innovation
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="relative rounded-xl border border-yellow-500/20 bg-white/5 backdrop-blur-sm p-6 overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 0 30px rgba(59,130,246,0.15)' }}
          >
            <span
              className={`inline-block text-[10px] uppercase tracking-wide px-2 py-1 rounded ${project.tagColor} text-white mb-3`}
            >
              {project.tag}
            </span>
            <h3 className="text-lg font-semibold text-yellow-50 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-yellow-100/70 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-white/10 text-yellow-100/80 group-hover:bg-blue-400/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <button className="text-yellow-300 text-sm hover:underline">
          View All Projects →
        </button>
      </motion.div>
    </section>
  );
}