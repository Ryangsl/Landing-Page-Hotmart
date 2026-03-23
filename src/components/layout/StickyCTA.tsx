import { useEffect, useState } from "react"

export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <a
      href="#"
      className="
        fixed bottom-0 left-0 w-full z-50
        bg-amber-500 hover:bg-amber-400
        text-slate-900
        flex items-center justify-center gap-3
        py-4 font-black text-sm tracking-wide
        shadow-2xl transition-colors duration-200
      "
    >
      <span>Garantir acesso por</span>
      <span className="bg-slate-900 text-amber-400 px-3 py-1 rounded-lg text-xs font-black">
        R$ 27
      </span>
      <span>→</span>
    </a>
  )
}
