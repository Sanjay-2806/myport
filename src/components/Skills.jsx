import React from 'react'
import './Skills.css'
import SocialIcons from './SocialIcons'

const Skills = ({ onBack }) => {
  return (
    <div className="skills-page">
      {/* Plexus background */}
      <svg
        className="skills-plexus"
        viewBox="0 0 1200 700"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Lines */}
        <g stroke="#E6E6E6" strokeWidth="1">
          <line x1="110" y1="120" x2="260" y2="90" />
          <line x1="260" y1="90" x2="390" y2="170" />
          <line x1="390" y1="170" x2="540" y2="120" />
          <line x1="540" y1="120" x2="680" y2="210" />
          <line x1="680" y1="210" x2="850" y2="160" />
          <line x1="850" y1="160" x2="1020" y2="240" />

          <line x1="180" y1="320" x2="320" y2="280" />
          <line x1="320" y1="280" x2="480" y2="360" />
          <line x1="480" y1="360" x2="640" y2="300" />
          <line x1="640" y1="300" x2="820" y2="360" />
          <line x1="820" y1="360" x2="980" y2="320" />

          <line x1="140" y1="560" x2="300" y2="520" />
          <line x1="300" y1="520" x2="460" y2="600" />
          <line x1="460" y1="600" x2="620" y2="540" />
          <line x1="620" y1="540" x2="790" y2="610" />
          <line x1="790" y1="610" x2="980" y2="540" />

          <line x1="260" y1="90" x2="320" y2="280" />
          <line x1="390" y1="170" x2="480" y2="360" />
          <line x1="540" y1="120" x2="640" y2="300" />
          <line x1="680" y1="210" x2="820" y2="360" />
          <line x1="850" y1="160" x2="980" y2="320" />
          <line x1="320" y1="280" x2="300" y2="520" />
          <line x1="480" y1="360" x2="460" y2="600" />
          <line x1="640" y1="300" x2="620" y2="540" />
          <line x1="820" y1="360" x2="790" y2="610" />
        </g>

        {/* Dots */}
        <g fill="#DADADA">
          <circle cx="110" cy="120" r="4" />
          <circle cx="260" cy="90" r="4" />
          <circle cx="390" cy="170" r="4" />
          <circle cx="540" cy="120" r="4" />
          <circle cx="680" cy="210" r="4" />
          <circle cx="850" cy="160" r="4" />
          <circle cx="1020" cy="240" r="4" />

          <circle cx="180" cy="320" r="4" />
          <circle cx="320" cy="280" r="4" />
          <circle cx="480" cy="360" r="4" />
          <circle cx="640" cy="300" r="4" />
          <circle cx="820" cy="360" r="4" />
          <circle cx="980" cy="320" r="4" />

          <circle cx="140" cy="560" r="4" />
          <circle cx="300" cy="520" r="4" />
          <circle cx="460" cy="600" r="4" />
          <circle cx="620" cy="540" r="4" />
          <circle cx="790" cy="610" r="4" />
          <circle cx="980" cy="540" r="4" />
        </g>
      </svg>

      {/* Watermark */}
      <div className="skills-watermark">Skills</div>

      {/* Header */}
      <div className="skills-top-left">
        <span className="skills-logo">Sanjay</span>
      </div>

      <button className="skills-back-button" onClick={onBack} aria-label="Go back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Social sidebar */}
      <div className="skills-social-sidebar">
        <SocialIcons />
      </div>

      {/* Cards */}
      <div className="skills-cards">
        <div className="skills-card">
          <div className="skills-icon" aria-hidden="true">
            {/* Full-Stack laptop icon */}
            <svg viewBox="0 0 64 64" fill="none">
              <rect x="14" y="18" width="36" height="24" rx="4" stroke="#000" strokeWidth="2" />
              <path d="M10 46h44" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              <path d="M22 42v4m20-4v4" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="skills-title">FrontEnd Developer</h2>
          <p className='p'>I design and develop beautiful web interfaces where design meets functionality. From responsive layouts to smooth animations, I enjoy creating experiences that feel fast, intuitive, and visually pleasing using modern frontend technologies.</p>
        </div>

        <div className="skills-card">
          <div className="skills-icon" aria-hidden="true">
            {/* AI/ML neural-style icon */}
            <svg viewBox="0 0 64 64" fill="none">
              <circle cx="18" cy="20" r="4" fill="#000" />
              <circle cx="46" cy="18" r="4" fill="#000" />
              <circle cx="48" cy="44" r="4" fill="#000" />
              <circle cx="22" cy="46" r="4" fill="#000" />
              <circle cx="32" cy="32" r="5" fill="#000" />
              <path d="M22 22l6 6M42 22l-6 6M28 36l-6 6M36 36l10 8" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="skills-title">AI / ML</h2>
          <p className='p'> I work with Artificial Intelligence and Machine Learning to build smart, data-driven applications. My experience includes data preprocessing, model training, evaluation, and deploying ML solutions for real-world use cases such as prediction, classification, and automation.</p>
        </div>


        <div className="skills-card">
          <div className="skills-icon" aria-hidden="true">
            {/* AI/ML neural-style icon */}
            <svg viewBox="0 0 64 64" fill="none">
              <path d="M22 22l6 6M42 22l-6 6M28 36l-6 6M36 36l10 8" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="skills-title">Languages & Tools </h2>
          <ul className='ul'>
            <li>C</li>
            <li>CPP</li>
            <li>Java</li>
            <li>Python</li>
            <li>Mysql</li>
            <li>JavaScript</li>
            <li>React.js</li>
      
          </ul>
          <p className='p'>Tools :VS Code,Cursor Ai, Anti Gravity, Colab, Figma, Sketchfab.</p>
        </div>

      </div>
    </div>
  )
}

export default Skills

