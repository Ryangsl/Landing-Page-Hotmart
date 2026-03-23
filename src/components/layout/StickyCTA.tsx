import { useEffect, useState } from "react"

export default function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!show) return null

  return (
    <a
      href="#"
      className="
        fixed bottom-0 left-0 w-full
        bg-green-600 text-white
        text-center py-4 font-bold
        shadow-lg z-50
      "
    >
      GARANTIR ACESSO AGORA
    </a>
  )
}