import React from 'react'
import Landingnav from '../components/Landingnav.jsx'
import Landingmain from '../components/Landingmain.jsx'
import bgImage from '../assets/gradient-blue-pink-abstract-art-wallpaper-preview.jpg';

function landing() {
  return (
    <div className="h-screen w-screen grid grid-rows-8" style={{backgroundImage : `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <Landingnav/>
      <Landingmain/>
    </div>
  )
}

export default landing