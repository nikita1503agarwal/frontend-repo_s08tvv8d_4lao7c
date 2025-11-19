import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="preise" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Wähle deinen Weg
          </motion.h2>
          <p className="mt-4 text-violet-100/80">Flexibel, liebevoll, klar.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-violet-100/90">
            <div className="text-sm text-fuchsia-200">Selbst</div>
            <div className="mt-1 text-2xl text-white">49 € / Monat</div>
            <p className="mt-3 text-sm">Alle Inhalte, Wochenimpulse, Audio-Übungen.</p>
            <a href="#cta" className="mt-6 inline-block rounded-xl bg-white/10 px-4 py-2 text-fuchsia-100 backdrop-blur transition hover:bg-white/20">Starten</a>
          </div>

          <div className="relative rounded-2xl border border-fuchsia-400/30 bg-white/10 p-6 text-violet-100/90 shadow-[0_0_0_1px_rgba(244,114,182,0.2)]">
            <span className="absolute -top-3 right-4 rounded-full bg-fuchsia-500 px-3 py-1 text-xs text-white">Empfohlen</span>
            <div className="text-sm text-fuchsia-200">Begleitet</div>
            <div className="mt-1 text-2xl text-white">99 € / Monat</div>
            <p className="mt-3 text-sm">Zusätzliche Live-Q&A, Mini-Coachings, Community-Calls.</p>
            <a href="#cta" className="mt-6 inline-block rounded-xl bg-fuchsia-500 px-4 py-2 text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-400">Anmelden</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-violet-100/90">
            <div className="text-sm text-fuchsia-200">Intim</div>
            <div className="mt-1 text-2xl text-white">249 € / Monat</div>
            <p className="mt-3 text-sm">Limitierte 1:1-Begleitung, individuelle Rituale & Debrief.</p>
            <a href="#cta" className="mt-6 inline-block rounded-xl bg-white/10 px-4 py-2 text-fuchsia-100 backdrop-blur transition hover:bg-white/20">Anfrage</a>
          </div>
        </div>
      </div>
    </section>
  )
}
