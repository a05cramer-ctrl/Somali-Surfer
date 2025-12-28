import { useState, useEffect } from 'react'
import './FlickeringImage.css'

interface FlickeringImageProps {
  image1: string
  image2: string
  alt?: string
}

function FlickeringImage({ image1, image2, alt = 'Somali Surfer' }: FlickeringImageProps) {
  const [currentImage, setCurrentImage] = useState(image2) // Second image is main/default
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
          setCurrentImage(image1)
          
          setTimeout(() => {
            setCurrentImage(image2)
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
  }, [image1, image2])

  return (
    <div className="flickering-image-container">
      <img 
        src={currentImage} 
        alt={alt}
        className={`flickering-image ${isFlickering ? 'flicker' : ''}`}
      />
    </div>
  )
}

export default FlickeringImage

