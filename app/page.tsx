"use client"

import { useEffect, useRef, useState } from "react"
import Logo from "@/components/Logo"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-[var(--color-background)]/70 backdrop-blur-2xl border-b border-white/[0.02] py-5" : "py-8"}`}>
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-8 lg:px-12">
        <a href="#" className="flex items-center gap-3 group opacity-50 hover:opacity-80 transition-opacity duration-700">
          <Logo size={22} className="animate-float" />
          <span className="text-[11px] font-light tracking-[0.3em] uppercase text-white/40">DISSOCIATE</span>
        </a>
        <div className="hidden md:flex items-center gap-12 text-[11px] text-[var(--color-muted)] font-light tracking-[0.2em] uppercase">
          <a href="#outside" className="hover:text-white/30 transition-colors duration-500">Outside</a>
          <a href="#mechanism" className="hover:text-white/30 transition-colors duration-500">Mechanism</a>
          <a href="#return" className="hover:text-white/30 transition-colors duration-500">Return</a>
        </div>
        <a href="https://x.com/DISSOCIATE_sol" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-light tracking-[0.2em] uppercase text-white/20 border border-white/10 px-5 py-2 hover:text-white/40 hover:border-white/20 transition-all duration-700">
          Follow
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
      {/* Very faint ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[500px] animate-watch pointer-events-none" />

      {/* Grid lines suggesting a ceiling view */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px'}} />

      <div className="relative text-center px-8 max-w-5xl mx-auto animate-float">
        <div className="label animate-fade-up delay-1 mb-12">Perspective Shift</div>

        {/* Ghost double effect via stacked text */}
        <div className="relative mb-8 animate-fade-up delay-2">
          <h1 className="display-xl text-white/5 absolute inset-0 select-none" aria-hidden style={{transform: 'translate(4px, 4px)'}}>
            WATCHING<br />FROM<br />ABOVE.
          </h1>
          <h1 className="display-xl text-white/40 relative">
            WATCHING<br />FROM<br />ABOVE.
          </h1>
        </div>

        <p className="body-lg animate-fade-up delay-3 max-w-xs mx-auto text-white/20">
          That number in your wallet. It isn&apos;t yours anymore.
          It&apos;s just a number. You are just observing.
          This is fine.
        </p>

        <div className="mt-16 animate-fade-in delay-4 flex flex-col items-center gap-4">
          <a href="#outside" className="text-[10px] tracking-[0.3em] uppercase text-white/15 hover:text-white/25 transition-colors duration-700">Look down</a>
          <div className="w-px h-14 bg-gradient-to-b from-white/10 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function Outside() {
  const { ref, visible } = useInView()
  return (
    <section id="outside" ref={ref} className="py-40 md:py-56">
      <div className="section-divider mb-40 md:mb-56" />
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-2000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{transitionDuration: '1600ms'}}>
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <div className="label mb-8">The View from Outside</div>
            <h2 className="display-lg text-white/40 font-extralight">
              You are watching<br />yourself<br />from the ceiling.
            </h2>
          </div>
          <div className="flex flex-col gap-10 pt-2">
            <p className="body-lg">
              The chart is red. The number is smaller than it was.
              And somewhere between the first look and the fifth refresh,
              something clicked off.
            </p>
            <p className="body-lg">
              The portfolio isn&apos;t yours anymore. It belongs to the person
              you&apos;re watching — the one sitting at the desk, staring at
              the screen. You&apos;re just a spectator now. Calm. Removed.
              Almost curious.
            </p>
            <p className="body-lg">
              DISSOCIATE is what happens when the loss exceeds what the self
              can hold. The self does what any sensible system does when overloaded.
              It steps outside.
            </p>
            <div className="accent-line" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Mechanism() {
  const { ref, visible } = useInView()
  const items = [
    { num: "i", title: "The Number Becomes Abstract", text: "First it was money. Then it was a score. Then it was a variable. The further the distance, the less the pain. This is by design." },
    { num: "ii", title: "The Observer Persists", text: "Even when the self detaches, something remains watching. That watcher is the part of you that will eventually come back. Don't lose track of it." },
    { num: "iii", title: "Distance Is Temporary", text: "Dissociation is not a destination. It's a transit state — a place to process what the present self cannot. You return. You always return." },
    { num: "iv", title: "The Chart Was Never You", text: "The number was never an identity. The wallet was never a worth. DISSOCIATE exists because too many people forgot this. We remember it for them." },
  ]
  return (
    <section id="mechanism" ref={ref} className="py-40 md:py-56 bg-[var(--color-surface)]">
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{transitionDuration: '1600ms'}}>
        <div className="label mb-6">The Mechanism</div>
        <h2 className="display-lg text-white/30 font-extralight mb-32">Why the mind<br />steps outside.</h2>
        <div>
          {items.map((item, i) => (
            <div key={i} className="group border-t border-white/[0.03] py-12 md:py-16">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-1 text-white/15 text-xs font-light tracking-widest pt-1 italic">{item.num}</div>
                <h3 className="md:col-span-4 text-base font-light text-white/25 group-hover:text-white/45 transition-colors duration-700 leading-relaxed">{item.title}</h3>
                <p className="md:col-span-6 md:col-start-7 body-lg text-xs leading-loose">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.03]" />
        </div>
      </div>
    </section>
  )
}

function Drift() {
  return (
    <div className="py-20 overflow-hidden select-none opacity-[0.04]">
      <div className="flex whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_60s_linear_infinite] items-center gap-16 pr-16">
            {["it isn't yours", "just a number", "step outside", "watch from above", "it isn't yours", "just a number", "step outside", "watch from above"].map((t, i) => (
              <span key={i} className="text-3xl md:text-5xl font-extralight tracking-[0.15em] text-white">{t}</span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

function Return() {
  const { ref, visible } = useInView()
  return (
    <section id="return" ref={ref} className="py-40 md:py-56">
      <div className="section-divider mb-40 md:mb-56" />
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{transitionDuration: '1600ms'}}>
        <div className="max-w-xl">
          <div className="label mb-8">The Return</div>
          <h2 className="display-lg text-white/30 font-extralight mb-14">
            You always<br />come back.
          </h2>
          <div className="space-y-10">
            <p className="body-lg">Eventually the number is just a number again. The portfolio is just a portfolio. You slide back into yourself slowly, like returning to a room you left the lights on in.</p>
            <p className="body-lg">DISSOCIATE doesn&apos;t ask you to stay outside forever. It just holds space for the moments when inside is too much. When you&apos;re ready, the self is waiting.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Join() {
  const { ref, visible } = useInView()
  return (
    <section ref={ref} className="py-40 md:py-56 bg-[var(--color-surface)]">
      <div className={`max-w-[1100px] mx-auto px-8 lg:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{transitionDuration: '1600ms'}}>
        <h2 className="display-lg text-white/25 font-extralight mb-6">Still<br />outside?</h2>
        <p className="body-lg max-w-xs mb-12 text-xs">Come find the others. We are also watching from somewhere nearby.</p>
        <a href="https://x.com/DISSOCIATE_sol" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-4 text-[11px] font-light tracking-[0.2em] uppercase text-white/20 border border-white/10 px-8 py-4 hover:text-white/35 hover:border-white/20 transition-all duration-700">
          <span>𝕏</span><span>Follow on X</span>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.02] py-10 px-8 lg:px-12">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 opacity-20">
        <div className="flex items-center gap-3">
          <Logo size={18} />
          <span className="text-[10px] font-light tracking-[0.3em] uppercase">DISSOCIATE</span>
        </div>
        <p className="text-[10px] font-light">© 2026 DISSOCIATE. The number was never you.</p>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="noise">
      <Nav /><Hero /><Outside /><Mechanism /><Drift /><Return /><Join /><Footer />
    </main>
  )
}
