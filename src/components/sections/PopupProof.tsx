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
    <div style={styles.popup}>
      🟢 Alguém acabou de adquirir o material!
    </div>
  )
}

const styles = {
  popup: {
    position: "fixed" as const,
    bottom: "80px",
    left: "20px",
    background: "#000",
    color: "#fff",
    padding: "10px",
    borderRadius: "8px"
  }
}