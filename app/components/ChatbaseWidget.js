'use client'

import { useEffect } from 'react'

export default function ChatbaseWidget({ chatbotId, domain }) {
  useEffect(() => {
    // Load Chatbase script
    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.js'
    script.setAttribute('chatbotId', chatbotId || 'YOUR_CHATBOT_ID')
    script.setAttribute('domain', domain || 'YOUR_DOMAIN')
    script.async = true
    
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector(`script[chatbotId="${chatbotId}"]`)
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [chatbotId, domain])

  return null // Chatbase widget is injected via script
}

