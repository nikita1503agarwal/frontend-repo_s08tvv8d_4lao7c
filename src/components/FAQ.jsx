import { useState } from 'react'

const faqs = [
  {
    q: 'Ist BDSM hier „hart“?',
    a: 'Nein. Wir arbeiten achtsam, spielerisch und konsensbasiert. Du entscheidest immer, was richtig ist. Sicherheit (Safewords, Grenzen, Aftercare) ist integraler Bestandteil.',
  },
  {
    q: 'Brauche ich Vorerfahrung?',
    a: 'Nein. Das Programm ist für Einsteigerinnen bis Fortgeschrittene geeignet. Du bekommst klare, sanfte Anleitungen und kannst dein Tempo frei wählen.',
  },
  {
    q: 'Gibt es Live-Begleitung?',
    a: 'Es gibt Community-Austausch und optional Q&A-Sessions. Du erhältst wöchentliche Impulse und Übungen mit klarer Struktur.',
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between text-left">
        <span className="text-sm font-medium text-white">{q}</span>
        <svg className={`h-5 w-5 text-violet-200 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && <p className="mt-3 text-sm text-violet-100/85">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">FAQ</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
