'use client'

import { useState } from 'react'

export default function Footer() {
  const [contactLoading, setContactLoading] = useState(false)

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('contactEmail')

    if (email) {
      setContactLoading(true)
      
      // Simulate API call
      setTimeout(() => {
        alert('Thank you for reaching out! We\'ll get back to you soon.')
        setContactLoading(false)
        e.target.reset()
      }, 1000)
    }
  }

  return (
    <footer id="contact-footer" className="dashboard-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4>Get in Touch</h4>
          <div className="footer-links">
            <a href="mailto:support@serena.com">support@serena.com</a>
            <span>•</span>
            <a href="tel:1800737362">1-800-SERENA</a>
          </div>
        </div>
        <form className="footer-form" onSubmit={handleContactSubmit}>
          <input 
            type="email" 
            name="contactEmail" 
            placeholder="Your email" 
            required 
          />
          <button 
            type="submit" 
            className="footer-btn"
            disabled={contactLoading}
          >
            {contactLoading ? '...' : '→'}
          </button>
        </form>
      </div>
    </footer>
  )
}

