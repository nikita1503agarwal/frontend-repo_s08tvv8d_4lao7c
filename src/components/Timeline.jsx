import { motion } from 'framer-motion'

const weeks = [
  { w: 1, t: 'Ankommen & Intention' },
  { w: 2, t: 'Körperkarte & Genuss' },
  { w: 3, t: 'Kommunikation & Consent' },
  { w: 4, t: 'Rollen & Archetypen' },
  { w: 5, t: 'Berührung & Rhythmus' },
  { w: 6, t: 'Scham wandeln' },
  { w: 7, t: 'Selbstführung' },
  { w: 8, t: 'Hingabe kultivieren' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            50 Wochen – ein sanfter Bogen
          </motion.h2>
          <p className="mt-4 text-violet-100/80">Ein Auszug der ersten Stationen.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {weeks.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-violet-100/90"
            >
              <div className="text-xs uppercase tracking-wider text-fuchsia-200">Woche {w.w}</div>
              <div className="mt-1 text-white">{w.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
