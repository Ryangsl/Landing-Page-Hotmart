import { useEffect, useState } from "react"

export default function useCountdown(initial: number) {
  const [time, setTime] = useState(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return time
}