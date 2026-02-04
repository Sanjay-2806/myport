import React from 'react'
import './YinYang.css'

const YinYang = () => {
  return (
    <div className="yin-yang-container">
      <svg
        className="yin-yang"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#000000" />
        <path
          d="M 100,100 m 0,-100 a 100,100 0 0,1 0,200 a 50,50 0 0,1 0,-100 a 50,50 0 0,0 0,-100 z"
          fill="#ffffff"
        />
        <circle cx="100" cy="50" r="25" fill="#000000" />
        <circle cx="100" cy="150" r="25" fill="#ffffff" />
      </svg>
    </div>
  )
}

export default YinYang

