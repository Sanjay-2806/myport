import React, { useState } from 'react'
import './App.css'
import AnimatedGreeting from './components/AnimatedGreeting'
import SocialIcons from './components/SocialIcons'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Feats from './components/Feats'
import Experience from './components/Experience'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleProjectsClick = () => {
    setCurrentPage('projects')
  }

  const handleAboutClick = () => {
    setCurrentPage('about')
  }

  const handleSkillsClick = () => {
    setCurrentPage('skills')
  }

  const handleFeatsClick = () => {
    setCurrentPage('feats')
  }

  const handleExperienceClick = () => {
    setCurrentPage('experience')
  }

  const handleBack = () => {
    setCurrentPage('home')
  }

  if (currentPage === 'projects') {
    return <Projects onBack={handleBack} />
  }

  if (currentPage === 'about') {
    return <About onBack={handleBack} />
  }

  if (currentPage === 'skills') {
    return <Skills onBack={handleBack} />
  }

  if (currentPage === 'feats') {
    return <Feats onBack={handleBack} />
  }

  if (currentPage === 'experience') {
    return <Experience onBack={handleBack} />
  }

  return (
    <div className="app">
      {/* Top Left - HR Logo */}
      <div className="top-left">
        <span className="logo">Sanjay</span>
      </div>

      {/* Top Right - Say hi */}
      <div className="top-right">
        <span className="say-hi"><a href="mailto:sanjayvinothkumar0@gmail.com">Say hi..</a></span>
      </div>

      {/* Left Navigation */}
      <nav className="nav-left">
        <a
          href="#experience"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            handleExperienceClick()
          }}
        >
          Experience
        </a>
        <a href="#projects" className="nav-link" onClick={(e) => { e.preventDefault(); handleProjectsClick(); }}>Projects</a>
      </nav>

      {/* Right Navigation */}
      <nav className="nav-right">
        <a
          href="#feats"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            handleFeatsClick()
          }}
        >
          Feats
        </a>
      </nav>

      {/* Bottom Center Navigation */}
      <nav className="nav-bottom">
        <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); handleAboutClick(); }}>About</a>
        <a href="#skills" className="nav-link" onClick={(e) => { e.preventDefault(); handleSkillsClick(); }}>My Skills</a>
      </nav>

      {/* Center - Animated Greeting */}
      <div className="center-content" onClick={handleProjectsClick} style={{ cursor: 'pointer' }}>
        <AnimatedGreeting />
        <p className="click-here">click here</p>
      </div>

      {/* Left Bottom - Social Icons */}
      <div className="social-container">
        <SocialIcons />
      </div>


      
    </div>
  )
}

export default App

