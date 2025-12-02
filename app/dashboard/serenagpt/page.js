'use client'

import { useState, useEffect } from 'react'

export default function SerenaGPT() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Set sidebar to closed on mobile by default, open on desktop
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="serenagpt-page">
      {sidebarOpen && typeof window !== 'undefined' && window.innerWidth <= 768 && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
      <div className={`chat-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-info">
          <p className="sidebar-title">SerenaGPT</p>
          <p className="sidebar-subtitle">Your mental health companion</p>
        </div>
        <div className="chat-history">
          <div className="chat-history-header">Chat History</div>
          <div className="no-chats" style={{ padding: '16px', color: '#64748b', fontSize: '14px' }}>
            Chat history is managed by Chatbase
          </div>
        </div>
      </div>
      
      <div className="chat-main">
        <div className="chat-header">
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <h2>SerenaGPT</h2>
        </div>

        <div className="chat-messages-container">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/Gdf1-JdvGrV7XTWScbscD"
            width="100%"
            style={{ 
              height: '100%',
              minHeight: '500px',
              border: 'none',
              borderRadius: '0',
              display: 'block'
            }}
            frameBorder="0"
            title="SerenaGPT Chat"
            allow="microphone"
          />
        </div>

        <div className="chat-input-container" style={{ 
          padding: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <p className="disclaimer-text" style={{ 
            textAlign: 'center',
            fontSize: '12px',
            color: '#64748b',
            margin: 0
          }}>
            ⚠️ Not a replacement for professional mental health care. In crisis? Contact emergency services immediately.
          </p>
        </div>
      </div>
    </div>
  )
}


