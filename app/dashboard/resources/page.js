'use client'

export default function Resources() {
  const resources = [
    {
      category: 'Articles',
      items: [
        { title: 'Understanding Anxiety in Students', description: 'Learn about common anxiety triggers and coping strategies', link: '#' },
        { title: 'Building Healthy Sleep Habits', description: 'Tips for improving your sleep quality and routine', link: '#' },
        { title: 'Managing Academic Stress', description: 'Strategies to handle pressure and maintain balance', link: '#' },
      ],
    },
    {
      category: 'Guides',
      items: [
        { title: 'Mindfulness Meditation Guide', description: 'Step-by-step guide to starting your meditation practice', link: '#' },
        { title: 'Breathing Exercises', description: 'Simple techniques to help you relax and refocus', link: '#' },
        { title: 'Journaling for Mental Health', description: 'How to use journaling as a tool for self-reflection', link: '#' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { title: 'Mood Tracker Template', description: 'Download our printable mood tracking worksheet', link: '#' },
        { title: 'Stress Assessment Quiz', description: 'Evaluate your current stress levels', link: '#' },
        { title: 'Wellness Checklist', description: 'Daily checklist for maintaining mental wellness', link: '#' },
      ],
    },
    {
      category: 'Support',
      items: [
        { title: 'Crisis Hotlines', description: '24/7 support lines for immediate help', link: '#' },
        { title: 'Find a Therapist', description: 'Resources to connect with mental health professionals', link: '#' },
        { title: 'Support Groups', description: 'Join communities of students supporting each other', link: '#' },
      ],
    },
  ]

  return (
    <div className="resources-page">
      <div className="resources-header">
        <h1>Resources</h1>
        <p>Explore articles, guides, and tools to support your mental health journey</p>
      </div>

      <div className="resources-grid">
        {resources.map((section, sectionIndex) => (
          <div key={sectionIndex} className="resource-section">
            <h2 className="resource-category">{section.category}</h2>
            <div className="resource-items">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="resource-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} className="resource-link">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


