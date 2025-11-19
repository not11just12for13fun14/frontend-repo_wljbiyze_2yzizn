import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(1000px_500px_at_110%_10%,rgba(99,102,241,0.25),transparent)] pointer-events-none" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-sm/0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Live • AI Chat Interface
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Tanim AI
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            A next‑gen conversational model wrapped in a cyber‑futuristic interface. Chat, ideate, and build with immersive visuals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#chat" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white px-5 py-3 shadow-[0_0_25px_rgba(139,92,246,0.35)]">
              Start chatting
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 border border-white/10">
              Explore features
            </a>
          </div>
        </div>

        {/* Spacer to ensure readability over 3D */}
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
