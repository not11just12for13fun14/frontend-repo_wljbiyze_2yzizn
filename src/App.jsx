import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Chat from './components/Chat'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b12] text-white relative overflow-hidden">
      {/* soft grid / lines background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden>
        <div className="[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] w-full h-full" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Chat />

      <footer id="about" className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
            Built with love for a cyber‑futuristic web. Tanim AI is a conceptual chat experience.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
