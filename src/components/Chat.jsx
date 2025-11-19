import { useEffect, useMemo, useRef, useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

export default function Chat() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [sessionId] = useState(() => crypto.randomUUID())
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    // Load history on mount
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/history?session_id=${sessionId}`)
        if (res.ok) {
          const data = await res.json()
          setMessages(data.messages || [])
        }
      } catch (e) {
        // ignore
      }
    }
    load()
  }, [baseUrl, sessionId])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async (e) => {
    e?.preventDefault()
    if (!input.trim()) return

    const optimistic = [
      ...messages,
      { role: 'user', content: input, created_at: new Date().toISOString() },
    ]
    setMessages(optimistic)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message: input })
      })
      if (res.ok) {
        const data = await res.json()
        setMessages(data.messages || [])
      } else {
        setMessages(optimistic.concat({ role: 'assistant', content: 'Something went wrong. Please try again.', created_at: new Date().toISOString() }))
      }
    } catch (e) {
      setMessages(optimistic.concat({ role: 'assistant', content: 'Network error. Please try again.', created_at: new Date().toISOString() }))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="relative py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur overflow-hidden">
          <div className="h-[480px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-white/60">Say something to begin your conversation.</div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap ${m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white/10 text-white border border-white/10'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={handleSend} className="border-t border-white/10 p-3 flex items-center gap-2 bg-black/30">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
            />
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white h-[44px] w-[44px] disabled:opacity-60">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
