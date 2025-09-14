import React from 'react'

function Quicklinks() {
  return (
    <ul className="grid grid-cols-5 gap-4 text-center w-full">
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">Search</li>
      <li className="cursor-pointer">Explore</li>
      <li className="cursor-pointer">Notifications</li>
      <li className="cursor-pointer">Profile</li>
    </ul>
  )
}

export default Quicklinks