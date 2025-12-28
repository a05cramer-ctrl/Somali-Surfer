import { useState, useEffect } from 'react'
import './FlickeringImage.css'

interface FlickeringImageProps {
  image1: string
  image2: string
  alt?: string
}

function FlickeringImage({ image1, image2, alt = 'Somali Surfer' }: FlickeringImageProps) {
  const [showImage1, setShowImage1] = useState(false) // Second image is main/default
  const [isFlickering, setIsFlickering] = useState(false)

  useEffect(() => {
    const flickerSequence = () => {
      // Multiple quick flickers like a bad lamp turning on
      const sequence = [
        { delay: 0, duration: 50 },      // Quick flash
        { delay: 100, duration: 30 },     // Very quick flash
        { delay: 200, duration: 80 },     // Longer flash
        { delay: 350, duration: 40 },     // Quick flash
        { delay: 450, duration: 60 },     // Medium flash
        { delay: 600, duration: 20 },     // Very quick flash
        { delay: 700, duration: 100 },    // Longer flash
      ]

      sequence.forEach(({ delay, duration }) => {
        setTimeout(() => {
          setIsFlickering(true)
          setShowImage1(true)
          
          setTimeout(() => {
            setShowImage1(false)
            setIsFlickering(false)
          }, duration)
        }, delay)
      })
    }

    // Start flickering sequence every 6 seconds
    const flickerInterval = setInterval(() => {
      flickerSequence()
    }, 6000)

    return () => clearInterval(flickerInterval)
  }, [])

  return (
    <div className="flickering-image-container">
      <img 
        src={image2} 
        alt={alt}
        className={`flickering-image flickering-image-main ${isFlickering ? 'flicker' : ''}`}
        style={{ opacity: showImage1 ? 0 : 1 }}
      />
      <img 
        src={image1} 
        alt={alt}
        className={`flickering-image flickering-image-alt ${isFlickering ? 'flicker' : ''}`}
        style={{ opacity: showImage1 ? 1 : 0 }}
      />
    </div>
  )
}

export default FlickeringImage

