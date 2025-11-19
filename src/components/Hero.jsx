import { motion } from 'framer-motion'

const HERO_BG = "https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Soft gradient wash to match the mood (pointer-events-none so it doesn't block) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-fuchsia-900/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-fuchsia-100 backdrop-blur"
        >
          50 Wochen Hotwife – Transformation
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Entfalte Deine feminine Energie
          <span className="block bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">in 50 Wochen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-violet-100/90"
        >
          Ein moderner, achtsamer Weg zu Selbstvertrauen, Sinnlichkeit und Klarheit – mit wöchentlichen Impulsen, Ritualen und Support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="group inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-6 py-3 text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-400"
          >
            Jetzt starten
            <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#programm"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-fuchsia-100 backdrop-blur transition hover:bg-white/20"
          >
            Mehr erfahren
          </a>
        </motion.div>
      </div>
    </section>
  )
}
