import { motion } from 'framer-motion'

const items = [
  {
    title: 'Rituale & Aufgaben',
    text: 'Sanfte, wirksame Schritte jede Woche – für Körper, Geist und Beziehung.',
  },
  {
    title: 'Guides & Reflexion',
    text: 'Impulse, Journaling-Prompts und Audio-Übungen für tiefe Innenschau.',
  },
  {
    title: 'Begleitung & Community',
    text: 'Austausch auf Augenhöhe und motivierende Unterstützung auf dem Weg.',
  },
]

export default function Features() {
  return (
    <section id="programm" className="relative bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.2),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Was dich erwartet
          </motion.h2>
          <p className="mt-4 text-violet-100/80">
            Ein klarer, moderner Rahmen – inspiriert von Weiblichkeit, Präsenz und Freiheit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-violet-100/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-sm"
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
