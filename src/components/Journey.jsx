import { motion } from 'framer-motion'

const items = [
  {
    title: 'Atem & Erdung',
    text: 'Weiche in den Körper, finde Stabilität und ein JA zu dir.',
  },
  {
    title: 'Hingabe & Führung',
    text: 'Spiel mit Dynamiken: Vertrauen, Loslassen, Macht in Liebe.',
  },
  {
    title: 'Grenzen & Wünsche',
    text: 'Klare Kommunikation, Safewords, Nachsorge – sinnlich und sicher.',
  },
  {
    title: 'Rituale & Integration',
    text: 'Wöchentliche Mikro-Experimente, Journaling & Körperpraxis.',
  },
]

export default function Journey() {
  return (
    <section id="reise" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Deine Reise
          </motion.h2>
          <p className="mt-4 text-violet-100/80">
            Eine sanfte, klare Struktur – zum Erkunden, Spielen und Wachsen.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-violet-100/90 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
