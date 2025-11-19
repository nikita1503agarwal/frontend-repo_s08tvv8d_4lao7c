import { motion } from 'framer-motion'

const rituals = [
  {
    title: 'Yin Sunday',
    text: 'Sanftes Yin-Set mit Atem, Dehnung & Selbstberührung. Langsamkeit als Luxus.',
  },
  {
    title: 'Tantra Tuesday',
    text: 'Sinnliche Präsenz, Blickkontakt-Spiele, Resonanzatmung, Herzöffnung.',
  },
  {
    title: 'Kink Friday',
    text: 'Achtsame Kink-Exploration: Bondage-Basics, Impact-Play-Framework, Aftercare.',
  },
]

export default function Rituals() {
  return (
    <section id="rituale" className="relative bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(217,70,239,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Wöchentliche Rituale
          </motion.h2>
          <p className="mt-4 text-violet-100/80">
            Ein liebevoller Rhythmus – weich, verspielt, kraftvoll.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rituals.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-violet-100/90 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
