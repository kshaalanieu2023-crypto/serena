'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/dashboard', label: 'Home' },
    { href: '/dashboard/serenagpt', label: 'SerenaGPT' },
    { href: '/dashboard/resources', label: 'Resources' },
    { href: '/dashboard/tracker', label: 'Mindfulness Tracker' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToFooter = (e) => {
    e.preventDefault()
    const footer = document.getElementById('contact-footer')
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Serena</h1>
        </div>
        <div className="navbar-divider navbar-divider-1"></div>
        <div className="navbar-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
        <div className="navbar-divider navbar-divider-2"></div>
        <button className="navbar-contact-btn" onClick={scrollToFooter}>Get in Touch</button>
        <button 
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {isMenuOpen && (
          <div className="navbar-dropdown">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`dropdown-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}

