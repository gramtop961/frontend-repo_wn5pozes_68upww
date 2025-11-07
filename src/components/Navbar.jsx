import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div style={{ scaleX }} className="h-0.5 bg-blue-500/80 origin-left" aria-hidden />
      <nav
        aria-label="Primary"
        className={`mx-auto max-w-6xl rounded-b-xl px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 ${
          isScrolled ? 'shadow-lg ring-1 ring-white/10' : ''
        } flex items-center justify-between`}
      >
        <a href="#home" className="text-white font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">
          Varun<span className="text-blue-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="#" className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="#" className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="mailto:varunassist2005@gmail.com" className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
