import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          Bereit für deine 50 Wochen?
        </motion.h3>
        <p className="mx-auto mt-4 max-w-2xl text-violet-100/80">
          Sichere dir jetzt deinen Platz und erhalte sofort Zugang zu Einführung, Ressourcen und der ersten Woche.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#" className="rounded-xl bg-fuchsia-500 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-400">Platz sichern</a>
          <a href="#programm" className="rounded-xl bg-white/10 px-6 py-3 text-fuchsia-100 backdrop-blur transition hover:bg-white/20">Programm ansehen</a>
        </div>
      </div>
    </section>
  )
}
