'use client'

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome Back</h1>
        <p>Your mental health journey starts here</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">🧘</div>
          <h3>Mindfulness Tracker</h3>
          <p>Track your mood, meditation, and daily wellness</p>
          <a href="/dashboard/tracker" className="card-link">Go to Tracker →</a>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">💬</div>
          <h3>SerenaGPT</h3>
          <p>Chat with our AI assistant for mental health support</p>
          <a href="/dashboard/serenagpt" className="card-link">Start Chatting →</a>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📚</div>
          <h3>Resources</h3>
          <p>Access articles, guides, and helpful tools</p>
          <a href="/dashboard/resources" className="card-link">Browse Resources →</a>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Your Progress</h3>
          <p>View your wellness journey and insights</p>
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-number">7</span>
              <span className="stat-label">Day Streak</span>
            </div>
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">Entries This Week</span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-quote">
        <p>&ldquo;Taking care of your mental health is a journey, not a destination.&rdquo;</p>
      </div>
    </div>
  )
}


