import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section id="philosophie" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300 bg-clip-text text-center text-3xl font-semibold text-transparent sm:text-4xl"
        >
          Feminine Weisheit trifft moderne Praxis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-violet-100/85"
        >
          Dieses Programm vereint die weiche Präsenz des Yoga, die tiefe Hingabe aus dem Tantra und die kraftvolle Selbsterkundung des BDSM – achtsam, konsensbasiert und zutiefst nahbar. Du lernst, deine Grenzen zu fühlen und deine Wünsche zu artikulieren, spielerisch und mit Herz.
        </motion.p>
      </div>
    </section>
  )
}
