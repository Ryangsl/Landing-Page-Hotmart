import { useEffect, useState } from "react"

export default function PopupProof() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true)
      setTimeout(() => setShow(false), 3000)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-20 left-4 bg-black text-white px-4 py-3 rounded-lg shadow-lg border border-green-500 text-sm font-semibold animate-pulse">
      🟢 Alguém acabou de adquirir o material!
    </div>
  )
}