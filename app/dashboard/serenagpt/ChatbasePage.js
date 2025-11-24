'use client'

import { useEffect } from 'react'

export default function ChatbasePage() {
  useEffect(() => {
    // Method 1: If Chatbase provides a script tag
    // Replace 'YOUR_CHATBOT_ID' and 'YOUR_DOMAIN' with your actual values
    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.js'
    script.setAttribute('chatbotId', 'YOUR_CHATBOT_ID')
    script.setAttribute('domain', 'YOUR_DOMAIN')
    script.async = true
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://www.chatbase.co/embed.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <div className="serenagpt-page">
      <div className="serenagpt-header">
        <h1>SerenaGPT</h1>
        <p>Your AI mental health companion is here to listen and support you</p>
      </div>

      {/* Option 1: If Chatbase injects a widget automatically via script */}
      <div className="chat-container">
        <div style={{ 
          width: '100%', 
          height: '600px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}>
          <p style={{ color: '#64748b' }}>Chatbase widget will appear here</p>
        </div>
      </div>

      {/* Option 2: If Chatbase provides an iframe, use this instead: */}
      {/* 
      <div className="chat-container">
        <iframe
          src="YOUR_CHATBASE_IFRAME_URL"
          width="100%"
          height="600px"
          frameBorder="0"
          style={{ borderRadius: '20px' }}
        />
      </div>
      */}

      <div className="serenagpt-disclaimer">
        <p>⚠️ This chatbot is not a replacement for professional mental health care. If you're in crisis, please contact emergency services.</p>
      </div>
    </div>
  )
}

