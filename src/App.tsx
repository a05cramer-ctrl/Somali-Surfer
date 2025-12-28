import ShootingStars from './components/ShootingStars'
import FlickeringImage from './components/FlickeringImage'
import SpaceSurfer from './components/SpaceSurfer'
import image1 from './2c1fdc01-2d1b-457c-bd48-592b030f5fb2-removebg-preview.png'
import image2 from './ChatGPT_Image_28_dec._2025_21_47_16-removebg-preview.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <ShootingStars />
      <SpaceSurfer />
      <h1 className="main-title">Somali Surfer</h1>
      <FlickeringImage 
        image1={image1}
        image2={image2}
        alt="Somali Surfer"
      />
      <div className="info-block">
        <h2 className="info-title">Why Somali?</h2>
        <p className="info-subtitle">Here is why you should choose somali to travel</p>
        <ul className="info-list">
          <li>No HealthCare</li>
          <li>No Water</li>
          <li>No Security</li>
          <li>High change of being raped</li>
          <li>Meet Pirates that steal are your valuebels</li>
        </ul>
      </div>
      <div className="social-buttons">
        <a 
          href="https://x.com/SomaliSurfer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="twitter-button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
          Twitter
        </a>
        <div className="ca-text">Ca:</div>
      </div>
    </div>
  )
}

export default App

