import React from 'react'
import Quicklinks from './Quicklinks.jsx'
import Logo from './Logo.jsx'
import MoreLinks from './MoreLinks.jsx'

function Navbar() {
  return (
    <nav className="bg-[var(--color-surface)] border-r border-[var(--color-border)] rounded-md p-4 h-screen">
        <Logo/>
        <Quicklinks/>
        <MoreLinks/>
    </nav>
  )
}

export default Navbar