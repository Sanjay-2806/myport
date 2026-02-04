import React from 'react'
import './About.css'
import SocialIcons from './SocialIcons'


const About = ({ onBack }) => {
  const aboutText = `Hi I'm Sanjay, a software engineer with a passion for building web applications and AI/ML Engineer. I'm a quick learner and I'm always looking for new challenges and opportunities to grow. I'm a team player and I'm always looking for new challenges and opportunities to grow.`

  return (
    <div className="about-page">
      {/* Background Watermark */}
      <div className="about-watermark">ABOUT</div>

      {/* Top Left - HR Logo */}
      <div className="about-top-left">
        <span className="about-logo">Sanjay</span>
      </div>

      {/* Top Center - Back Arrow */}
      <button className="about-back-button" onClick={onBack} aria-label="Go back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Left Sidebar - Social Icons */}
      <div className="about-social-sidebar">
        <SocialIcons />
      </div>

      {/* Main Content Container */}
      <div className="about-content-wrapper">
        <div className="about-container">
          <pre className="about-text">{aboutText}</pre>
        </div>

        {/* Right Side - Developer Avatar */}
        {/* <div className="about-avatar-container">
          <DeveloperAvatar />
        </div> */}

        
      </div>
    </div>
  )
}

export default About

