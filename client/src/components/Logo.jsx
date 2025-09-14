import React from 'react'
import logo from "../assets/minigram.png"

function Logo() {
  return (
    <div className='logo-container'>
      <img src={logo} alt="Minigram Logo" className="w-[90%] h-auto object-contain cursor-pointer" />
    </div>
  )
}

export default Logo