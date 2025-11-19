import { Shield, Zap, Sparkles, Database } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="h-5 w-5 text-fuchsia-400" />,
      title: 'Conversational Intelligence',
      desc: 'Real-time, context-aware replies tuned for creation and reasoning.'
    },
    {
      icon: <Zap className="h-5 w-5 text-indigo-400" />,
      title: 'Fast & Fluid',
      desc: 'Smooth interactions with subtle motion and instant feedback.'
    },
    {
      icon: <Database className="h-5 w-5 text-purple-400" />,
      title: 'Persistent Sessions',
      desc: 'Your conversations are saved so you can pick up where you left off.'
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-400" />,
      title: 'Privacy-first',
      desc: 'Your data stays in your session and is handled with care.'
    }
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white">Built for the future</h2>
        <p className="text-center text-white/70 mt-3 max-w-2xl mx-auto">A sleek experience that blends immersive visuals with a capable chat engine.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-black/30 border border-white/10">
                  {it.icon}
                </div>
                <div>
                  <p className="text-white font-semibold">{it.title}</p>
                  <p className="text-white/60 text-sm">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
