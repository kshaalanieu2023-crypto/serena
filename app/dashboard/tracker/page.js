'use client'

import { useState } from 'react'

export default function MindfulnessTracker() {
  const [mood, setMood] = useState('')
  const [energy, setEnergy] = useState(5)
  const [sleep, setSleep] = useState(7)
  const [meditation, setMeditation] = useState(false)
  const [exercise, setExercise] = useState(false)
  const [notes, setNotes] = useState('')
  const [entries, setEntries] = useState([])

  const moods = [
    { emoji: '😊', label: 'Great', value: 'great' },
    { emoji: '🙂', label: 'Good', value: 'good' },
    { emoji: '😐', label: 'Okay', value: 'okay' },
    { emoji: '😔', label: 'Low', value: 'low' },
    { emoji: '😢', label: 'Struggling', value: 'struggling' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      mood,
      energy,
      sleep,
      meditation,
      exercise,
      notes,
    }
    setEntries([entry, ...entries])
    // Reset form
    setMood('')
    setEnergy(5)
    setSleep(7)
    setMeditation(false)
    setExercise(false)
    setNotes('')
    alert('Entry saved! Keep tracking your progress.')
  }

  return (
    <div className="tracker-page">
      <div className="tracker-header">
        <h1>Mindfulness Tracker</h1>
        <p>Track your daily mood, activities, and wellness metrics</p>
      </div>

      <div className="tracker-content">
        <form className="tracker-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <label className="section-label">How are you feeling today?</label>
            <div className="mood-selector">
              {moods.map((m) => (
                <button
                  key={m.value}
                  type="button"
                  className={`mood-option ${mood === m.value ? 'selected' : ''}`}
                  onClick={() => setMood(m.value)}
                >
                  <span className="mood-emoji">{m.emoji}</span>
                  <span className="mood-label">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-section">
            <label className="section-label">
              Energy Level: {energy}/10
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={energy}
              onChange={(e) => setEnergy(parseInt(e.target.value))}
              className="slider"
            />
          </div>

          <div className="form-section">
            <label className="section-label">
              Hours of Sleep Last Night: {sleep} hours
            </label>
            <input
              type="range"
              min="0"
              max="12"
              value={sleep}
              onChange={(e) => setSleep(parseInt(e.target.value))}
              className="slider"
            />
          </div>

          <div className="form-section">
            <label className="section-label">Today's Activities</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={meditation}
                  onChange={(e) => setMeditation(e.target.checked)}
                />
                <span>Meditation / Mindfulness</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={exercise}
                  onChange={(e) => setExercise(e.target.checked)}
                />
                <span>Exercise / Physical Activity</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <label className="section-label">Notes (optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How was your day? What are you grateful for? Any thoughts you'd like to record?"
              rows="4"
              className="notes-input"
            />
          </div>

          <button type="submit" className="tracker-submit-btn">
            Save Entry
          </button>
        </form>

        {entries.length > 0 && (
          <div className="tracker-history">
            <h2>Your Recent Entries</h2>
            <div className="entries-list">
              {entries.map((entry) => (
                <div key={entry.id} className="entry-card">
                  <div className="entry-header">
                    <span className="entry-date">{entry.date}</span>
                    <span className="entry-mood">
                      {moods.find((m) => m.value === entry.mood)?.emoji}
                    </span>
                  </div>
                  <div className="entry-stats">
                    <div className="entry-stat">
                      <span>Energy:</span> {entry.energy}/10
                    </div>
                    <div className="entry-stat">
                      <span>Sleep:</span> {entry.sleep}h
                    </div>
                    <div className="entry-stat">
                      <span>Activities:</span>{' '}
                      {entry.meditation && '🧘 '}
                      {entry.exercise && '🏃 '}
                      {!entry.meditation && !entry.exercise && 'None'}
                    </div>
                  </div>
                  {entry.notes && (
                    <div className="entry-notes">
                      <p>{entry.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


