import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#programm', label: 'Programm' },
    { href: '#philosophie', label: 'Philosophie' },
    { href: '#reise', label: 'Reise' },
    { href: '#rituale', label: 'Rituale' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#stimmen', label: 'Stimmen' },
    { href: '#faq', label: 'FAQ' },
    { href: '#preise', label: 'Preise' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur">
          <a href="#" className="text-sm font-semibold tracking-wide text-fuchsia-200">
            50 Wochen Hotwife
          </a>
          <nav className="hidden gap-6 md:flex">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-violet-100/80 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden rounded-lg bg-white/10 p-2 text-violet-100"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-6xl px-6 pb-4 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm text-violet-100/90 transition hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
