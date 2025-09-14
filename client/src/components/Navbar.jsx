import React from 'react'
import Quicklinks from './Quicklinks.jsx'
import Logo from './Logo.jsx'

function Navbar() {
  return (
    <nav className="border border-[var(--color-border)] rounded-md p-4 h-screen">
        <Logo/>
        <Quicklinks/>
    </nav>
  )
}

export default Navbar