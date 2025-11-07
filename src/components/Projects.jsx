import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Air Cargo Booking & Tracking System',
    impact: 'Redis caching, distributed locks, real-time tracking API',
    stack: ['Node.js','Express','MySQL','Redis','REST','Tailwind'],
    image: '/projects/air-cargo.jpg',
    links: { code: '#', demo: '#' }
  },
  {
    title: 'Resume Builder',
    impact: 'Photo upload, client PDF generation, formatted downloads',
    stack: ['Java', 'Servlets', 'JSP', 'html2pdf.js'],
    image: '/projects/resume-builder.jpg',
    links: { code: '#', demo: '#' }
  },
  {
    title: 'Pinterest Clone',
    impact: 'AuthN/Z, REST API, multi-format image upload',
    stack: ['Node.js','JavaScript'],
    image: '/projects/pinterest.jpg',
    links: { code: '#', demo: '#' }
  }
];

function Badge({ children }) {
  return <span className="text-[11px] text-zinc-300/90 rounded-full border border-white/10 bg-white/5 px-2 py-1">{children}</span>;
}

function Card({ p }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 focus-within:ring-2 focus-within:ring-blue-400"
    >
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-800">
        <img src={p.image} alt="Project preview" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-lg font-medium text-white">{p.title}</h3>
        <p className="text-sm text-zinc-300">{p.impact}</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        <div className="mt-3 flex gap-3">
          <a href={p.links.code} className="text-sm text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Code</a>
          <a href={p.links.demo} className="text-sm text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1">Demo</a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Projects</h2>
        <p className="text-zinc-300 mt-1">Selected work that balances impact and craft.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
