export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Varun Sharma. All rights reserved.</p>
        <p className="text-zinc-500">Built with React, Tailwind, and a touch of motion.</p>
      </div>
    </footer>
  );
}
