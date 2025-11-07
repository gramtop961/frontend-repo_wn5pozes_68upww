import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData(e.currentTarget);
      // Formspree endpoint placeholder; replace with your form ID to activate.
      await fetch('https://formspree.io/f/xbldzjvg', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      setSent(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact</h2>
        <p className="text-zinc-300 mt-1">Have an idea or a role in mind? Let’s talk.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <label className="mb-4 block">
            <span className="text-sm text-zinc-300">Name</span>
            <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-400" />
          </label>
          <label className="mb-4 block">
            <span className="text-sm text-zinc-300">Email</span>
            <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-400" />
          </label>
          <label className="mb-4 block">
            <span className="text-sm text-zinc-300">Message</span>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-400" />
          </label>
          <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'Sending…' : 'Send Message'}
          </button>
          {sent && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-sm text-green-400">
              Thanks! I will get back to you shortly.
            </motion.p>
          )}
        </form>
        <div className="space-y-4">
          <a href="mailto:varunassist2005@gmail.com" className="block rounded-xl border border-white/10 bg-white/5 p-4 text-zinc-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400">varunassist2005@gmail.com</a>
          <details className="rounded-xl border border-white/10 bg-white/5 p-4 text-zinc-200">
            <summary className="cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Reveal phone</summary>
            <p className="mt-2 text-zinc-100">+91 8194074668</p>
          </details>
          <div className="flex gap-3">
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400">LinkedIn</a>
            <a href="#" className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
