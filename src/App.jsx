import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Journey from './components/Journey'
import Rituals from './components/Rituals'
import Features from './components/Features'
import Timeline from './components/Timeline'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <Journey />
      <Rituals />
      <Features />
      <Timeline />
      <Testimonials />
      <Pricing />
      <CTA />

      <footer className="border-t border-white/10 bg-slate-950/60 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center text-sm text-violet-200/60">
            © {new Date().getFullYear()} 50 Wochen Hotwife – Eine achtsame Reise in Sinnlichkeit, Präsenz und Spiel.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
