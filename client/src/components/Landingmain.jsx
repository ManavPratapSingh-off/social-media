import React from 'react'
import landingMain from "../assets/landing_main.png"

function Landingmain() {
  return (
    <div className='mx-64 my-8 grid grid-cols-2'>
        <div className='col-span-1 flex flex-col items-center text-start my-24 text-xl gap-4 text-[var(--color-surface)]'>
            <span className='text-6xl font-extrabold'>SOCIAL MADE SIMPLE & FUN</span><br/>
            Chat, post, react, and create memories — all with the people who matter to you.
        </div>
        <div>
            <img src={landingMain} alt="main image" className='w-xl'/>
        </div>
    </div>
  )
}

export default Landingmain