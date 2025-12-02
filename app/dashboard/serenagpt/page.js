'use client'

import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const STORAGE_KEY = 'serenagpt_chats'

export default function SerenaGPT() {
  const [chats, setChats] = useState([])
  const [currentChatId, setCurrentChatId] = useState(null)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m here to listen and support you. How can I help you today?',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Load chats from localStorage on mount
  useEffect(() => {
    const savedChats = localStorage.getItem(STORAGE_KEY)
    if (savedChats) {
      try {
        const parsedChats = JSON.parse(savedChats)
        setChats(parsedChats)
      } catch (e) {
        console.error('Error loading chats:', e)
      }
    }
    
    // Set sidebar to closed on mobile by default
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Save chats to localStorage whenever chats change
  useEffect(() => {
    if (chats.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(chats))
    }
  }, [chats])

  // Save current chat when messages change (but not on initial load)
  useEffect(() => {
    if (currentChatId && messages.length > 1) {
      updateChat(currentChatId, messages)
    }
  }, [messages, currentChatId])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateChatId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9)
  }

  const getChatTitle = (chatMessages) => {
    const firstUserMessage = chatMessages.find(msg => msg.role === 'user')
    if (firstUserMessage) {
      const title = firstUserMessage.content.slice(0, 50)
      return title.length < firstUserMessage.content.length ? title + '...' : title
    }
    return 'New Chat'
  }

  const updateChat = (chatId, chatMessages) => {
    setChats(prevChats => {
      const updated = prevChats.map(chat => 
        chat.id === chatId 
          ? { ...chat, messages: chatMessages, title: getChatTitle(chatMessages), updatedAt: Date.now() }
          : chat
      )
      return updated
    })
  }

  const createNewChat = () => {
    const newMessages = [{
      role: 'assistant',
      content: 'Hello! I\'m here to listen and support you. How can I help you today?',
    }]
    setMessages(newMessages)
    setCurrentChatId(null)
  }

  const loadChat = (chatId) => {
    const chat = chats.find(c => c.id === chatId)
    if (chat) {
      setMessages(chat.messages)
      setCurrentChatId(chatId)
      setSidebarOpen(false) // Close sidebar on mobile when selecting a chat
    }
  }

  const deleteChat = (chatId, e) => {
    e.stopPropagation()
    setChats(prevChats => prevChats.filter(chat => chat.id !== chatId))
    if (currentChatId === chatId) {
      createNewChat()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    // Create new chat if this is the first user message
    let chatId = currentChatId
    if (!chatId) {
      chatId = generateChatId()
      setCurrentChatId(chatId)
      const newChat = {
        id: chatId,
        title: getChatTitle(updatedMessages),
        messages: updatedMessages,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      setChats(prev => [newChat, ...prev])
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      })

      const data = await response.json()
      
      if (data.error) {
        const errorMessage = { 
          role: 'assistant', 
          content: 'I apologize, but I\'m having trouble responding right now. Please try again in a moment.' 
        }
        setMessages(prev => [...prev, errorMessage])
        if (chatId) {
          updateChat(chatId, [...updatedMessages, errorMessage])
        }
      } else {
        const assistantMessage = { 
          role: 'assistant', 
          content: data.message 
        }
        setMessages(prev => [...prev, assistantMessage])
        if (chatId) {
          updateChat(chatId, [...updatedMessages, assistantMessage])
        }
      }
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = { 
        role: 'assistant', 
        content: 'I apologize, but I\'m having trouble responding right now. Please try again in a moment.' 
      }
      setMessages(prev => [...prev, errorMessage])
      if (chatId) {
        updateChat(chatId, [...updatedMessages, errorMessage])
      }
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="serenagpt-page">
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
      <div className={`chat-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="new-chat-btn" onClick={createNewChat}>
          <span>+</span> New Chat
        </button>
        <div className="chat-history">
          <div className="chat-history-header">Chat History</div>
          {chats.length === 0 ? (
            <div className="no-chats">No previous chats</div>
          ) : (
            <div className="chat-list">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${currentChatId === chat.id ? 'active' : ''}`}
                  onClick={() => loadChat(chat.id)}
                >
                  <div className="chat-item-content">
                    <div className="chat-item-title">{chat.title}</div>
                    <div className="chat-item-date">
                      {new Date(chat.updatedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <button
                    className="chat-delete-btn"
                    onClick={(e) => deleteChat(chat.id, e)}
                    aria-label="Delete chat"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="sidebar-info">
          <p className="sidebar-title">SerenaGPT</p>
          <p className="sidebar-subtitle">Your mental health companion</p>
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
          {messages.length === 1 && messages[0].role === 'assistant' && (
            <div className="welcome-message">
              <h1>How can I help you today?</h1>
              <p>I'm here to listen, support, and help you with whatever you need.</p>
            </div>
          )}
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message-wrapper ${message.role}`}>
                <div className="message-container">
                  <div className="message-avatar">
                    {message.role === 'assistant' ? (
                      <div className="avatar-assistant">S</div>
                    ) : (
                      <div className="avatar-user">U</div>
                    )}
                  </div>
                  <div className="message-content">
                    <div className="message-text">
                      {message.role === 'assistant' ? (
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {message.content}
                        </ReactMarkdown>
                      ) : (
                        <p>{message.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="message-wrapper assistant">
                <div className="message-container">
                  <div className="message-avatar">
                    <div className="avatar-assistant">S</div>
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="chat-input-container">
          <form className="chat-input-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
                placeholder="Message SerenaGPT..."
                className="chat-input"
                disabled={loading}
                rows={1}
              />
              <button 
                type="submit" 
                className="chat-send-btn" 
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="input-footer">
              <p className="disclaimer-text">⚠️ Not a replacement for professional mental health care. In crisis? Contact emergency services immediately.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


