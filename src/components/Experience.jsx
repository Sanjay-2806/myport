import React, { useEffect } from 'react'
import './Experience.css'
import SocialIcons from './SocialIcons'

const Experience = ({ onBack }) => {
  useEffect(() => {
    // Initialize particles.js once per mount with a fixed config
    if (window.particlesJS) {
      const container = document.getElementById('experience-particles')
      if (!container) return

      // Clear any existing canvas from HMR or previous mounts
      container.innerHTML = ''

      window.particlesJS('experience-particles', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
          },
          opacity: { value: 0.4, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      })
    }
  }, [])

  return (
    <div className="experience-page">
      {/* Particles background */}
      <div id="experience-particles" className="experience-particles" />

      {/* Watermark */}
      <div className="experience-watermark">EXPERIENCE</div>

      {/* Header */}
      <div className="experience-top-left">
        <span className="experience-logo">Sanjay</span>
      </div>

      <button
        className="experience-back-button"
        onClick={onBack}
        aria-label="Go back"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Social dock */}
      <div className="experience-social-sidebar">
        <SocialIcons />
      </div>

      {/* Main two-panel layout */}
      <div className="experience-content">
        {/* Left: roles */}
        <div className="experience-left">
          <div className="exp-role-card">
            <h2 className="exp-role-title">Full Stack Development</h2>
            <p className="exp-role-company">Adventure Technology Solution Prvt Ltd</p>
            <div className="exp-role-tags">
              <span className="exp-tag">Full Stack Stack</span>
              <span className="exp-tag">React.js</span>
              <span className="exp-tag">Tailwind CSS</span>
              <span className="exp-tag">Bootstrap</span>
            </div>
          </div>

          <div className="exp-role-card">
            <h2 className="exp-role-title">Ai/Ml Development</h2>
            <p className="exp-role-company">Sri Sairam Techno Incubation Foundation</p>
            <div className="exp-role-tags">
              <span className="exp-tag">Python</span>
              <span className="exp-tag">Open Cv</span>
              <span className="exp-tag">LLM's</span>
              <span className="exp-tag">Fine Tunning</span>
              <span className="exp-tag">Socket Programming</span>
            </div>
          </div>
        </div>

        {/* Right: achievements */}
        <div className="experience-right">
          <div className="exp-detail-card">
            <ul className="exp-detail-list">
              <li>
              During my internship, I developed strong frontend skills by working on real-world web applications.
              </li>
              <li>
              I gained practical experience in HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, and React, focusing on responsive design, component-based development, and UI optimization.
              </li>
              <li>
              I collaborated on implementing user-friendly interfaces, handling dynamic content, and ensuring cross-device compatibility
              </li>
            </ul>
          </div>

          <div className="exp-detail-card">
            <ul className="exp-detail-list">
              <li>
              During my internship, I gained hands-on experience in Artificial Intelligence and Machine Learning by working on real-world problems using Python.
              </li>
              <li>
              I learned data preprocessing, feature extraction, and model training using machine learning algorithms.
              </li>
              <li>
              I also explored computer vision techniques using tools like OpenCV, Fine Tunning and deep learning models, focusing on practical implementation and performance evaluation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

