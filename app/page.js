'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [loginLoading, setLoginLoading] = useState(false)
  const [contactLoading, setContactLoading] = useState(false)

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')

    if (email && password) {
      setLoginLoading(true)
      
      // Simulate API call
      setTimeout(() => {
        setLoginLoading(false)
        // Redirect to dashboard
        router.push('/dashboard')
      }, 1000)
    }
  }

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
    <div className="container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="logo">
          <h1>Serena</h1>
        </div>
        
        <div className="welcome-content">
          <h2>Welcome to a calmer mind</h2>
          <p className="subtitle">Supporting students on their mental health journey</p>
        </div>

        {/* Login Form */}
        <div className="login-container">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email address" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Password" 
                required 
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <button 
              type="submit" 
              className="login-btn"
              disabled={loginLoading}
            >
              {loginLoading ? 'Signing in...' : 'Sign In'}
            </button>
            <p className="signup-link">Don&apos;t have an account? <a href="#">Sign up</a></p>
          </form>
        </div>
      </div>

      {/* Footer - Get in Touch */}
      <footer className="footer">
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
    </div>
  )
}

