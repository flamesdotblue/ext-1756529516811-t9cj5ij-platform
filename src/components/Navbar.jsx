import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#calculator', label: 'Demo' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md">
            <span className="font-bold">BB</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">BuddyBudget</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a href="#" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Sign in
          </a>
        </nav>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-slate-700 hover:bg-slate-50">
                {l.label}
              </a>
            ))}
            <a href="#" className="mt-2 rounded-md bg-slate-900 px-4 py-2 text-white">
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
