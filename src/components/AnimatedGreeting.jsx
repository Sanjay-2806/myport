import React from 'react'
import './AnimatedGreeting.css'

const AnimatedGreeting = () => {
  return (
    <div className="animated-greeting">
      <span className="greeting-text">
        <span className="word">Hi,</span>
        <span className="word">I'm</span>
        <span className="word name">Sanjay</span>
      </span>
    </div>
  )
}

export default AnimatedGreeting

