import React, { useState } from 'react'
import './Projects.css'
import SocialIconsFiltered from './SocialIconsFiltered'
import YinYangSmall from './YinYangSmall'

const Projects = ({ onBack }) => {
  const [theme, setTheme] = useState('dark') // dark or light

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const projects = [
    {
      title: 'AirCast',
      description: 'Air Cast is an AI-powered gesture-based screen casting system that allows users to control and cast their screen using hand gestures in the air. Built with computer vision techniques, it leverages real-time hand tracking to enable touch-free interaction, making screen control intuitive, efficient, and futuristic.',
      githubUrl: 'https://github.com/Sanjay-2806/Air-sketch-and-share-the-screen-using-socket',
    },
    {
      title: 'Portfolio',
      description: 'Minimalist portfolio design showcasing creative work and professional achievements.',
      githubUrl: 'https://github.com/Sanjay-2806',
    },
    {
      title: 'Signbridge',
      description: 'Sign Bridge is an AI-based communication system that translates sign language gestures into readable text and speech in real time. Using computer vision and machine learning, it bridges the communication gap between hearing-impaired users and others, enabling more inclusive and accessible interaction.',
      githubUrl: 'https://github.com/Sanjay-2806/odoo',
    },
    
    
  ]

  return (
    <div className={`projects-page ${theme}-theme`}>
      {/* Background Typography */}
      <div className="bg-typography">
        <span className="bg-text bg-work">WORK</span>
        <span className="bg-text bg-swipe"></span>
      </div>

      {/* Top Left - Sanjay Logo */}
      <div className="projects-top-left">
        <span className="projects-logo">Sanjay</span>
      </div>

      {/* Top Center - Back Arrow */}
      <button className="back-button" onClick={onBack} aria-label="Go back">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

     

      {/* Main Content - Project Cards */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card-wrapper">
            <div className="project-card">
              <div className="project-card-front">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-card-back">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Right - Yin Yang Toggle */}
      <div className="projects-yin-yang-toggle" onClick={toggleTheme} role="button" aria-label="Toggle theme" tabIndex={0}>
        <YinYangSmall theme={theme} />
      </div>
    </div>
  )
}

export default Projects

