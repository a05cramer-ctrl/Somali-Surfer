import { useEffect, useState } from 'react'

interface ShootingStar {
  id: number
  left: number
  delay: number
  duration: number
}

function ShootingStars() {
  const [stars, setStars] = useState<ShootingStar[]>([])

  useEffect(() => {
    // Create initial shooting stars
    const initialStars: ShootingStar[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2,
    }))
    setStars(initialStars)

    // Add new shooting stars periodically
    const interval = setInterval(() => {
      const newStar: ShootingStar = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: 0,
        duration: 2 + Math.random() * 2,
      }
      setStars((prev) => [...prev.slice(-4), newStar])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.left}%`,
            top: `${Math.random() * 30}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </>
  )
}

export default ShootingStars





