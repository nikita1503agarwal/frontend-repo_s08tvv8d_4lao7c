import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with full-width cover background matching the provided palette and mood */}
      <Hero />
      <Features />
      <CTA />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/60 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-violet-200/60">
          © {new Date().getFullYear()} 50 Wochen Hotwife – Ein achtsames Transformationsprogramm.
        </div>
      </footer>
    </div>
  )
}

export default App
