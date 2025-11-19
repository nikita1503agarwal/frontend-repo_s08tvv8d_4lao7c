import { motion } from 'framer-motion'

const voices = [
  {
    name: 'Mara',
    text: 'Ich habe meine Stimme wiedergefunden – weich und klar. Die Mischung aus Zartheit und Spiel hat mich wirklich transformiert.',
  },
  {
    name: 'Lea',
    text: 'So viel Sicherheit in der Exploration. Consent, Aftercare und trotzdem so viel Lust und Lachen. Danke!',
  },
  {
    name: 'Nina',
    text: 'Mein Körper fühlt sich wie Zuhause an. Die Wochenstruktur ist genau richtig – kleine, liebevolle Schritte.',
  },
]

export default function Testimonials() {
  return (
    <section id="stimmen" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Stimmen aus der Reise
          </motion.h2>
          <p className="mt-4 text-violet-100/80">Echt, weich und kraftvoll.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {voices.map((v, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-violet-100/90 backdrop-blur-sm"
            >
              <p>“{v.text}”</p>
              <footer className="mt-4 text-sm text-fuchsia-200">— {v.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
