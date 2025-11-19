import { useState } from 'react'
import { Menu, Robot, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 shadow-[0_0_25px_rgba(139,92,246,0.35)]">
            <Robot className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight leading-none">Tanim AI</p>
            <p className="text-[10px] text-white/60 -mt-0.5">Futuristic Chat Intelligence</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#chat" className="text-white/80 hover:text-white transition-colors">Chat</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="/test" className="text-white/80 hover:text-white transition-colors">System</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/10 transition-colors">
            <Sparkles className="h-4 w-4" />
            Launch App
          </button>
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg bg-white/10 border border-white/10 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-6 -mt-2 mb-4 rounded-xl bg-black/40 backdrop-blur border border-white/10 overflow-hidden">
          <a href="#features" className="block px-4 py-3 text-white/80 hover:bg-white/5">Features</a>
          <a href="#chat" className="block px-4 py-3 text-white/80 hover:bg-white/5">Chat</a>
          <a href="#about" className="block px-4 py-3 text-white/80 hover:bg-white/5">About</a>
          <a href="/test" className="block px-4 py-3 text-white/80 hover:bg-white/5">System</a>
        </div>
      )}
    </header>
  )
}
