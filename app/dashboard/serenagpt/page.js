'use client'

export default function SerenaGPT() {
  return (
    <div className="serenagpt-page">
      <div className="serenagpt-header">
        <h1>SerenaGPT</h1>
        <p>Your AI mental health companion is here to listen and support you</p>
      </div>

      <div className="chat-container">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/Gdf1-JdvGrV7XTWScbscD"
          width="100%"
          style={{
            height: '100%',
            minHeight: '900px',
            border: 'none',
            borderRadius: '20px'
          }}
          frameBorder="0"
          allow="microphone"
          title="SerenaGPT Chatbot"
        />
      </div>

      <div className="serenagpt-disclaimer">
        <p>⚠️ This chatbot is not a replacement for professional mental health care. If you're in crisis, please contact emergency services.</p>
      </div>
    </div>
  )
}


