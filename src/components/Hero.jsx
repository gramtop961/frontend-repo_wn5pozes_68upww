import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [reduced, setReduced] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0" ref={canvasRef} aria-hidden>
        {!reduced && (
          <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/50 to-zinc-950" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 pt-28 pb-16 text-left">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          Based in Punjab, India
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Varun Sharma
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-2xl text-lg text-zinc-300">
          Software Developer — I build fast, reliable web apps and APIs.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-wrap gap-3">
          <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            <span>View Projects</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Contact
          </a>
          <a href="/Varun_Sharma_Resume.pdf" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Download Resume
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-300">
          {['Java','Spring Boot','Node.js','Express','MySQL','REST APIs'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
