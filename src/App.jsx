import React, { useState } from 'react'
import './App.css'
import AnimatedGreeting from './components/AnimatedGreeting'
import SocialIcons from './components/SocialIcons'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Feats from './components/Feats'
import Experience from './components/Experience'
import YinYangSmall from './components/YinYangSmall'


function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [theme, setTheme] = useState('dark') // dark or light

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

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
    return (
      <div key="projects" className="page-enter">
        <Projects onBack={handleBack} />
      </div>
    )
  }

  if (currentPage === 'about') {
    return (
      <div key="about" className="page-enter">
        <About onBack={handleBack} />
      </div>
    )
  }

  if (currentPage === 'skills') {
    return (
      <div key="skills" className="page-enter">
        <Skills onBack={handleBack} />
      </div>
    )
  }

  if (currentPage === 'feats') {
    return (
      <div key="feats" className="page-enter">
        <Feats onBack={handleBack} />
      </div>
    )
  }

  if (currentPage === 'experience') {
    return (
      <div key="experience" className="page-enter">
        <Experience onBack={handleBack} />
      </div>
    )
  }

  return (

    <div key="home" className={`app page-enter ${theme}-theme`}>

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

      {/* Bottom Right - Yin Yang Toggle */}
      <div className="home-yin-yang-toggle" onClick={toggleTheme} role="button" aria-label="Toggle theme" tabIndex={0}>
        <YinYangSmall theme={theme} />
      </div>


    </div>
  )
}

export default App

