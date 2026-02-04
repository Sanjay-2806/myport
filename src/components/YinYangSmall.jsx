import React from 'react'
import './YinYangSmall.css'

const YinYangSmall = ({ theme = 'dark' }) => {
  const isLight = theme === 'light'
  const mainFill = isLight ? '#000000' : '#ffffff'
  const inverseFill = isLight ? '#ffffff' : '#000000'

  return (
    <div className="yin-yang-small-container">
      <svg
        className="yin-yang-small"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill={mainFill} />
        <path
          d="M 100,100 m 0,-100 a 100,100 0 0,1 0,200 a 50,50 0 0,1 0,-100 a 50,50 0 0,0 0,-100 z"
          fill={inverseFill}
        />
        <circle cx="100" cy="50" r="25" fill={mainFill} />
        <circle cx="100" cy="150" r="25" fill={inverseFill} />
      </svg>
    </div>
  )
}

export default YinYangSmall

