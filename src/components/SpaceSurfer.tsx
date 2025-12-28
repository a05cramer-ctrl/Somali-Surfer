import surferImage from '../4.2__1_-removebg-preview.png'
import flagImage from '../flag-somalia-2-1024x683.jpg'
import './SpaceSurfer.css'

function SpaceSurfer() {
  // Create multiple flags for the trail effect with different offsets
  const flagConfigs = [
    { offset: -200, vertical: 30, rotation: -15 },
    { offset: -400, vertical: -20, rotation: 10 },
    { offset: -600, vertical: 40, rotation: -20 },
    { offset: -800, vertical: -10, rotation: 15 },
    { offset: -1000, vertical: 25, rotation: -10 },
    { offset: -1200, vertical: -30, rotation: 20 },
    { offset: -1400, vertical: 15, rotation: -25 },
    { offset: -1600, vertical: -25, rotation: 12 },
  ]

  return (
    <div className="space-surfer-container">
      <img 
        src={surferImage} 
        alt="Somali Surfer"
        className="space-surfer"
      />
      {flagConfigs.map((config, index) => (
        <img
          key={index}
          src={flagImage}
          alt="Somalia Flag"
          className="flag-trail"
          style={{
            '--flag-offset': `${config.offset}px`,
            '--flag-vertical-offset': `${config.vertical}px`,
            '--flag-rotation': `${config.rotation}deg`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export default SpaceSurfer

