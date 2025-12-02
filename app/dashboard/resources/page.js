'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Resources() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const articles = {
    'understanding-anxiety': {
      title: 'Understanding Anxiety in Students',
      category: 'Articles',
      content: `# Understanding Anxiety in Students

Anxiety is one of the most common mental health challenges facing students today. Understanding what anxiety is, how it manifests, and effective ways to manage it can make a significant difference in your academic and personal life.

## What is Anxiety?

Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come. While occasional anxiety is normal, persistent and excessive anxiety that interferes with daily activities may indicate an anxiety disorder.

## Common Anxiety Triggers for Students

### Academic Pressure
- **Exams and deadlines**: The pressure to perform well can trigger intense anxiety
- **GPA concerns**: Worrying about maintaining grades
- **Competition**: Comparing yourself to peers
- **Future uncertainty**: Concerns about career prospects

### Social Factors
- **Making friends**: Social anxiety in new environments
- **Public speaking**: Fear of presentations and class participation
- **Social media**: Comparison and fear of missing out (FOMO)
- **Relationships**: Navigating romantic and platonic relationships

### Personal Factors
- **Financial stress**: Worrying about tuition, loans, and expenses
- **Family expectations**: Pressure to meet family standards
- **Time management**: Feeling overwhelmed by responsibilities
- **Perfectionism**: Setting unrealistically high standards

## Recognizing Anxiety Symptoms

### Physical Symptoms
- Rapid heartbeat or palpitations
- Sweating or trembling
- Shortness of breath
- Nausea or stomach discomfort
- Headaches or muscle tension
- Fatigue or difficulty sleeping

### Emotional Symptoms
- Excessive worry or fear
- Feeling restless or on edge
- Difficulty concentrating
- Irritability
- Feeling overwhelmed
- Anticipating the worst

### Behavioral Symptoms
- Avoiding situations that trigger anxiety
- Procrastination
- Difficulty making decisions
- Social withdrawal
- Changes in eating or sleeping patterns

## Effective Coping Strategies

### 1. Breathing Techniques
Practice deep breathing exercises:
- **4-7-8 Technique**: Inhale for 4 counts, hold for 7, exhale for 8
- **Box Breathing**: Inhale (4), hold (4), exhale (4), hold (4)
- Practice regularly, not just during anxious moments

### 2. Cognitive Strategies
- **Challenge negative thoughts**: Question the evidence for anxious thoughts
- **Reframe situations**: Look for alternative, less threatening interpretations
- **Practice self-compassion**: Treat yourself with the kindness you'd show a friend
- **Set realistic expectations**: Perfection is not achievable or necessary

### 3. Lifestyle Modifications
- **Regular exercise**: 30 minutes of physical activity can reduce anxiety
- **Adequate sleep**: Aim for 7-9 hours per night
- **Balanced nutrition**: Avoid excessive caffeine and sugar
- **Time management**: Break tasks into smaller, manageable steps
- **Limit social media**: Set boundaries for screen time

### 4. Mindfulness and Relaxation
- **Meditation**: Start with 5-10 minutes daily
- **Progressive muscle relaxation**: Tense and release muscle groups
- **Yoga or stretching**: Physical movement with mental focus
- **Nature walks**: Spending time outdoors can reduce anxiety

### 5. Social Support
- **Talk to friends**: Share your feelings with trusted peers
- **Family communication**: Keep family informed about your challenges
- **Support groups**: Connect with others facing similar struggles
- **Professional help**: Don't hesitate to seek counseling or therapy

## When to Seek Professional Help

Consider professional support if:
- Anxiety significantly interferes with daily functioning
- You experience panic attacks
- Anxiety persists for weeks or months
- You're using substances to cope
- You have thoughts of self-harm

## Building Resilience

### Develop a Growth Mindset
View challenges as opportunities for growth rather than threats. Understand that setbacks are part of learning.

### Build Healthy Routines
Consistent daily routines provide structure and predictability, which can reduce anxiety.

### Practice Self-Care
Regular self-care isn't selfish—it's essential for mental health. Make time for activities you enjoy.

### Celebrate Small Wins
Acknowledge and celebrate your progress, no matter how small. Every step forward matters.

## Conclusion

Anxiety is manageable with the right tools and support. Remember that experiencing anxiety doesn't mean you're weak or failing—it means you're human. By understanding your anxiety triggers and implementing effective coping strategies, you can navigate your student journey with greater confidence and well-being.

If anxiety feels overwhelming, remember that seeking help is a sign of strength, not weakness. Your mental health matters, and there are resources and people ready to support you.`
    },
    'healthy-sleep': {
      title: 'Building Healthy Sleep Habits',
      category: 'Articles',
      content: `# Building Healthy Sleep Habits

Quality sleep is fundamental to mental health, academic performance, and overall well-being. Yet many students struggle with sleep, often sacrificing rest for studying or social activities. Building healthy sleep habits can transform your daily life.

## Why Sleep Matters for Students

### Cognitive Benefits
- **Memory consolidation**: Sleep helps transfer information from short-term to long-term memory
- **Learning enhancement**: Adequate sleep improves problem-solving and creativity
- **Focus and attention**: Well-rested students perform better academically
- **Decision-making**: Sleep deprivation impairs judgment and critical thinking

### Physical Health
- **Immune function**: Sleep strengthens your immune system
- **Physical recovery**: Your body repairs itself during sleep
- **Hormone regulation**: Sleep affects growth hormones and stress hormones
- **Weight management**: Poor sleep disrupts hunger-regulating hormones

### Mental Health
- **Emotional regulation**: Sleep helps manage stress and emotional responses
- **Mood stability**: Chronic sleep deprivation increases risk of depression and anxiety
- **Stress reduction**: Quality sleep lowers cortisol levels
- **Resilience**: Well-rested individuals handle challenges better

## Common Sleep Challenges for Students

### Academic Pressure
- Late-night studying
- Multiple deadlines
- Exam stress affecting sleep quality
- Irregular schedules

### Lifestyle Factors
- Social activities extending into late hours
- Screen time before bed
- Caffeine consumption
- Inconsistent sleep schedules

### Environmental Factors
- Noisy dorm rooms or apartments
- Uncomfortable mattresses
- Room temperature
- Light pollution

## The Science of Sleep

### Sleep Cycles
Sleep consists of multiple cycles, each lasting about 90 minutes:
- **NREM Stage 1**: Light sleep, easy to wake
- **NREM Stage 2**: Deeper sleep, body temperature drops
- **NREM Stage 3**: Deep sleep, crucial for physical restoration
- **REM Sleep**: Dream sleep, important for memory and learning

### How Much Sleep Do You Need?
- **Teenagers (14-17)**: 8-10 hours per night
- **Young adults (18-25)**: 7-9 hours per night
- **Adults (26+)**: 7-9 hours per night

Quality matters as much as quantity—consistent, uninterrupted sleep is key.

## Building Healthy Sleep Habits

### 1. Maintain a Consistent Schedule
- **Go to bed and wake up at the same time** every day, even on weekends
- Consistency helps regulate your circadian rhythm
- Gradual adjustments work better than sudden changes
- Use alarms for both bedtime and wake time if needed

### 2. Create a Relaxing Bedtime Routine
- **Wind down 30-60 minutes before bed**
- Activities to include:
  - Reading (physical books, not screens)
  - Gentle stretching or yoga
  - Warm bath or shower
  - Journaling or meditation
  - Listening to calming music
- Avoid stimulating activities before bed

### 3. Optimize Your Sleep Environment
- **Temperature**: Keep room cool (around 65-68°F or 18-20°C)
- **Darkness**: Use blackout curtains or eye mask
- **Quiet**: Use earplugs or white noise machine
- **Comfort**: Invest in a good mattress and pillows
- **Clean space**: Keep your bedroom tidy and organized

### 4. Manage Light Exposure
- **Morning light**: Get sunlight exposure in the morning to regulate circadian rhythm
- **Evening dimming**: Reduce bright lights 2-3 hours before bed
- **Blue light**: Avoid screens 1 hour before bed, or use blue light filters
- **Night mode**: Enable night mode on devices if you must use them

### 5. Watch Your Diet and Exercise
- **Caffeine**: Avoid caffeine after 2 PM (it has a 6-hour half-life)
- **Alcohol**: While it may make you sleepy, it disrupts sleep quality
- **Heavy meals**: Avoid large meals 2-3 hours before bed
- **Exercise**: Regular exercise improves sleep, but avoid intense workouts close to bedtime
- **Hydration**: Stay hydrated but reduce fluids 1-2 hours before bed

### 6. Manage Stress and Anxiety
- **Worry journal**: Write down concerns before bed to clear your mind
- **Relaxation techniques**: Practice deep breathing or progressive muscle relaxation
- **Meditation**: Guided meditation apps can help calm your mind
- **Time management**: Plan your day to reduce last-minute stress

### 7. Use Your Bed Only for Sleep
- **Avoid studying in bed**: Your brain should associate bed with sleep
- **No screens in bed**: Keep phones, tablets, and laptops out of the bedroom
- **If you can't sleep**: Get up after 20 minutes and do something relaxing, then return to bed

## Troubleshooting Common Sleep Problems

### Difficulty Falling Asleep
- Check your caffeine intake
- Review your evening routine
- Consider if stress or anxiety is keeping you awake
- Try relaxation techniques
- Avoid clock-watching

### Waking Up Frequently
- Check your sleep environment (noise, temperature, light)
- Review your evening eating and drinking habits
- Consider if stress is causing wakefulness
- Rule out medical issues if persistent

### Feeling Tired Despite Sleeping
- Assess sleep quality, not just quantity
- Check for sleep disorders (sleep apnea, restless legs)
- Review your sleep schedule consistency
- Consider if you're getting enough deep sleep

### Oversleeping
- Set consistent wake times
- Use gradual alarm techniques
- Get morning light exposure
- Check for underlying depression or health issues

## Technology and Sleep

### Helpful Apps
- **Sleep tracking**: Monitor your sleep patterns
- **Meditation**: Calm, Headspace, or Insight Timer
- **White noise**: Nature sounds or white noise generators
- **Blue light filters**: f.lux, Night Shift, or similar

### What to Avoid
- Scrolling social media before bed
- Engaging in stressful conversations
- Checking work or school emails
- Playing stimulating games

## When to Seek Help

Consult a healthcare provider if you experience:
- Chronic insomnia (lasting more than a month)
- Excessive daytime sleepiness affecting daily life
- Loud snoring or breathing interruptions
- Restless legs or unusual movements during sleep
- Persistent nightmares or sleep terrors
- Suspected sleep disorder

## Creating Your Sleep Plan

### Week 1: Foundation
- Set consistent bedtime and wake time
- Create a basic bedtime routine
- Optimize your sleep environment

### Week 2: Habits
- Implement light management
- Adjust diet and exercise timing
- Practice relaxation techniques

### Week 3: Refinement
- Fine-tune your routine based on what's working
- Address any remaining challenges
- Track your progress

### Week 4: Maintenance
- Establish your routine as a habit
- Continue monitoring sleep quality
- Adjust as needed for schedule changes

## Conclusion

Building healthy sleep habits is an investment in your mental health, academic success, and overall quality of life. While it may take time to establish new routines, the benefits are profound and lasting. Remember that good sleep isn't a luxury—it's a necessity for thriving as a student.

Start with small, manageable changes and build from there. Your future self will thank you for prioritizing sleep today.`
    },
    'academic-stress': {
      title: 'Managing Academic Stress',
      category: 'Articles',
      content: `# Managing Academic Stress

Academic stress is an almost universal experience for students. While some stress can be motivating, excessive stress can harm your mental health, physical well-being, and academic performance. Learning to manage academic stress effectively is a crucial skill for student success.

## Understanding Academic Stress

### What is Academic Stress?
Academic stress is the body's response to academic-related demands and pressures. It can manifest physically, emotionally, and behaviorally, affecting your ability to function effectively.

### The Stress Response
When faced with academic challenges, your body activates the "fight-or-flight" response:
- Increased heart rate and blood pressure
- Release of stress hormones (cortisol, adrenaline)
- Heightened alertness
- Energy mobilization

While helpful in short bursts, chronic activation can lead to burnout and health problems.

## Common Sources of Academic Stress

### Academic Demands
- **Heavy course loads**: Too many classes or credits
- **Difficult material**: Challenging subjects or concepts
- **Fast-paced curriculum**: Rapid learning expectations
- **High expectations**: Pressure to excel in every subject

### Assessment Pressure
- **Exams and tests**: Performance anxiety
- **Papers and projects**: Writing and research demands
- **Grading anxiety**: Fear of poor grades
- **Competition**: Comparing yourself to peers

### Time Management Challenges
- **Multiple deadlines**: Overlapping assignments
- **Balancing responsibilities**: School, work, personal life
- **Procrastination**: Delaying work increases stress
- **Time constraints**: Feeling there's never enough time

### External Pressures
- **Family expectations**: Pressure to meet family standards
- **Financial concerns**: Worrying about tuition and loans
- **Future career**: Anxiety about post-graduation plans
- **Social comparison**: Comparing achievements to others

## Recognizing Stress Symptoms

### Physical Symptoms
- Headaches or migraines
- Muscle tension or pain
- Fatigue or exhaustion
- Sleep disturbances
- Digestive issues
- Frequent illness

### Emotional Symptoms
- Anxiety or worry
- Irritability or moodiness
- Feeling overwhelmed
- Depression or sadness
- Lack of motivation
- Emotional exhaustion

### Cognitive Symptoms
- Difficulty concentrating
- Memory problems
- Negative thinking
- Indecisiveness
- Racing thoughts
- Mental fatigue

### Behavioral Symptoms
- Procrastination
- Social withdrawal
- Changes in eating habits
- Increased substance use
- Neglecting responsibilities
- Reduced self-care

## Effective Stress Management Strategies

### 1. Time Management and Organization

#### Prioritization Techniques
- **Eisenhower Matrix**: Categorize tasks by urgency and importance
- **ABC Method**: Rank tasks A (critical), B (important), C (nice to do)
- **80/20 Rule**: Focus on the 20% of tasks that yield 80% of results

#### Planning Strategies
- **Use a planner or digital calendar**: Track all deadlines and commitments
- **Break down large tasks**: Divide projects into smaller, manageable steps
- **Create study schedules**: Allocate specific times for studying
- **Build in buffer time**: Account for unexpected delays

#### Productivity Techniques
- **Pomodoro Technique**: 25-minute focused work sessions with 5-minute breaks
- **Time blocking**: Dedicate specific time slots to different activities
- **Batch similar tasks**: Group related activities together
- **Eliminate distractions**: Create focused work environments

### 2. Study Strategies

#### Active Learning
- **Practice retrieval**: Test yourself regularly
- **Teach others**: Explaining concepts reinforces learning
- **Use multiple methods**: Combine reading, writing, and practice
- **Spaced repetition**: Review material over time, not just before exams

#### Efficient Study Habits
- **Find your optimal study time**: Work when you're most alert
- **Create study groups**: Collaborate with peers
- **Use study guides**: Organize information effectively
- **Take breaks**: Regular breaks improve retention

#### Test Preparation
- **Start early**: Begin studying well before exams
- **Practice tests**: Familiarize yourself with test formats
- **Review systematically**: Cover all material methodically
- **Manage test anxiety**: Use relaxation techniques

### 3. Stress Reduction Techniques

#### Breathing Exercises
- **Deep breathing**: Inhale for 4, hold for 4, exhale for 4
- **Box breathing**: 4-4-4-4 pattern
- **Progressive relaxation**: Tense and release muscle groups

#### Mindfulness and Meditation
- **Mindfulness meditation**: Focus on present moment awareness
- **Body scan**: Progressive awareness of physical sensations
- **Walking meditation**: Mindful movement
- **Apps**: Headspace, Calm, or Insight Timer

#### Physical Activity
- **Regular exercise**: 30 minutes most days
- **Yoga or stretching**: Combines movement with mindfulness
- **Walking**: Simple, accessible stress relief
- **Team sports**: Social connection plus exercise

### 4. Cognitive Strategies

#### Reframing Thoughts
- **Challenge negative thinking**: Question the evidence for stress-inducing thoughts
- **Perspective-taking**: Consider alternative viewpoints
- **Focus on process**: Emphasize effort over outcomes
- **Growth mindset**: View challenges as learning opportunities

#### Realistic Expectations
- **Set achievable goals**: Break large goals into smaller steps
- **Accept imperfection**: Perfectionism increases stress
- **Focus on progress**: Celebrate small wins
- **Self-compassion**: Treat yourself with kindness

#### Problem-Solving
- **Identify the problem**: Clearly define what's causing stress
- **Brainstorm solutions**: Generate multiple options
- **Evaluate options**: Consider pros and cons
- **Take action**: Implement chosen solutions
- **Review and adjust**: Assess effectiveness and modify

### 5. Lifestyle Factors

#### Sleep Hygiene
- **Consistent schedule**: Same bedtime and wake time
- **Adequate duration**: 7-9 hours per night
- **Quality environment**: Dark, cool, quiet room
- **Pre-sleep routine**: Wind down before bed

#### Nutrition
- **Balanced meals**: Regular, nutritious eating
- **Limit caffeine**: Especially in afternoon and evening
- **Stay hydrated**: Drink plenty of water
- **Avoid emotional eating**: Don't use food to manage stress

#### Social Support
- **Maintain relationships**: Connect with friends and family
- **Seek help**: Don't hesitate to ask for support
- **Join communities**: Study groups, clubs, or organizations
- **Professional support**: Counseling or therapy when needed

### 6. Setting Boundaries

#### Learn to Say No
- **Prioritize commitments**: You can't do everything
- **Politely decline**: It's okay to set limits
- **Protect your time**: Guard study and rest time
- **Quality over quantity**: Fewer, meaningful commitments

#### Work-Life Balance
- **Schedule downtime**: Make time for relaxation and hobbies
- **Separate study and leisure**: Create clear boundaries
- **Take breaks**: Regular rest improves productivity
- **Weekend recovery**: Use weekends for restoration

## Preventing Burnout

### Recognize Early Warning Signs
- Chronic fatigue
- Decreased motivation
- Cynicism or negativity
- Reduced performance
- Physical symptoms

### Prevention Strategies
- **Regular breaks**: Don't wait until you're exhausted
- **Variety**: Mix different types of activities
- **Meaning**: Connect work to personal values
- **Support**: Maintain social connections
- **Self-care**: Prioritize your well-being

## When to Seek Additional Help

Consider professional support if:
- Stress significantly impacts daily functioning
- You experience persistent anxiety or depression
- Physical symptoms are severe or persistent
- You're using substances to cope
- You have thoughts of self-harm
- Stress management strategies aren't helping

## Creating Your Stress Management Plan

### Assessment
1. Identify your main stress sources
2. Recognize your stress symptoms
3. Evaluate current coping strategies
4. Determine what's working and what isn't

### Action Plan
1. Choose 2-3 strategies to implement
2. Set specific, achievable goals
3. Create a schedule for practice
4. Track your progress
5. Adjust as needed

### Maintenance
1. Regularly review your plan
2. Add new strategies gradually
3. Celebrate successes
4. Be patient with yourself
5. Seek support when needed

## Conclusion

Managing academic stress is an ongoing process, not a one-time fix. By implementing effective strategies and building healthy habits, you can navigate academic challenges while maintaining your mental health and well-being. Remember that some stress is normal and can even be motivating, but when stress becomes overwhelming, it's important to take action.

Your academic success matters, but so does your mental health. Finding the balance between achievement and well-being is key to thriving as a student. Start with small changes, be patient with yourself, and don't hesitate to seek support when you need it.`
    },
    'mindfulness-meditation': {
      title: 'Mindfulness Meditation Guide',
      category: 'Guides',
      content: `# Mindfulness Meditation Guide

Mindfulness meditation is a powerful practice that can reduce stress, improve focus, and enhance overall well-being. This comprehensive guide will help you start and maintain a meditation practice that fits into your student life.

## What is Mindfulness?

Mindfulness is the practice of paying attention to the present moment with openness, curiosity, and acceptance. It involves:
- **Present-moment awareness**: Focusing on what's happening right now
- **Non-judgmental observation**: Noticing experiences without labeling them as good or bad
- **Acceptance**: Allowing experiences to be as they are
- **Compassion**: Approaching yourself and others with kindness

## Benefits of Mindfulness for Students

### Mental Health Benefits
- **Reduced stress and anxiety**: Lower cortisol levels and decreased worry
- **Improved mood**: Enhanced emotional regulation
- **Better sleep**: Calmer mind leads to better rest
- **Reduced depression**: Lower risk of depressive episodes

### Cognitive Benefits
- **Enhanced focus**: Improved attention and concentration
- **Better memory**: Enhanced working memory capacity
- **Improved academic performance**: Better learning and retention
- **Creative thinking**: Enhanced problem-solving abilities

### Physical Benefits
- **Lower blood pressure**: Reduced cardiovascular stress
- **Stronger immune system**: Better immune function
- **Pain management**: Reduced perception of pain
- **Better sleep quality**: Improved rest and recovery

## Getting Started with Meditation

### Setting Up Your Practice

#### Choose a Time
- **Morning**: Start your day with clarity and calm
- **Evening**: Wind down and process the day
- **Between classes**: Quick reset during busy days
- **Consistency matters more than timing**: Pick a time you can maintain

#### Find Your Space
- **Quiet location**: Minimize distractions
- **Comfortable seating**: Chair, cushion, or floor
- **Pleasant environment**: Make it inviting
- **Consistent spot**: Same place builds habit

#### Duration
- **Start small**: 5-10 minutes is plenty to begin
- **Build gradually**: Add 1-2 minutes weekly
- **Quality over quantity**: Better to do 5 minutes daily than 30 minutes once
- **Be flexible**: Some days you'll have more time than others

### Basic Meditation Posture

#### Sitting Position
- **Comfortable and alert**: Not too relaxed, not too tense
- **Straight but relaxed spine**: Natural curve, not rigid
- **Relaxed shoulders**: Let them drop naturally
- **Hands**: Rest on knees or in your lap
- **Head**: Balanced on top of spine, slightly tilted down
- **Eyes**: Closed or softly focused downward

#### Alternative Positions
- **Lying down**: Good for body scans, but avoid if you tend to fall asleep
- **Walking**: Mindful walking meditation
- **Standing**: If sitting is uncomfortable

## Core Meditation Techniques

### 1. Breath Awareness Meditation

This is the foundation of most meditation practices.

#### Instructions
1. **Settle into your posture**: Get comfortable and alert
2. **Close your eyes** (or soften your gaze)
3. **Bring attention to your breath**: Notice where you feel it most (nose, chest, or abdomen)
4. **Observe naturally**: Don't force or control the breath
5. **Notice when mind wanders**: This is normal and expected
6. **Gently return attention**: Bring focus back to breath without judgment
7. **Repeat**: Continue this cycle throughout your practice

#### Tips
- Start with 5 minutes
- Use counting if helpful (1-10, then repeat)
- Be patient with wandering thoughts
- Each return to breath is a success

### 2. Body Scan Meditation

This practice develops body awareness and relaxation.

#### Instructions
1. **Lie down or sit comfortably**
2. **Close your eyes**
3. **Start with toes**: Notice sensations in your toes
4. **Move systematically**: Progress through each body part
5. **Observe without judgment**: Notice tension, warmth, tingling, or nothing
6. **Spend 10-30 seconds** on each area
7. **Complete the scan**: From toes to head, or head to toes
8. **End with whole-body awareness**: Feel your body as a complete unit

#### Body Parts to Scan
- Toes and feet
- Lower legs
- Knees and thighs
- Hips and pelvis
- Abdomen and lower back
- Chest and upper back
- Hands and arms
- Shoulders and neck
- Face and head

### 3. Loving-Kindness Meditation

This practice cultivates compassion for yourself and others.

#### Instructions
1. **Start with yourself**: "May I be happy, may I be healthy, may I be safe, may I live with ease"
2. **Visualize a loved one**: Repeat phrases for them
3. **Think of a neutral person**: Someone you don't know well
4. **Consider a difficult person**: Someone you have conflict with (start small)
5. **Extend to all beings**: "May all beings be happy, healthy, safe, and live with ease"

#### Phrases to Use
- "May you be happy"
- "May you be healthy"
- "May you be safe"
- "May you live with ease"
- Use your own words that feel authentic

### 4. Walking Meditation

Meditation in motion, perfect for active minds.

#### Instructions
1. **Choose a path**: 10-20 steps in length
2. **Walk slowly**: Much slower than normal walking
3. **Focus on sensations**: Feel of feet on ground, movement of legs
4. **Notice your body**: Posture, balance, rhythm
5. **When mind wanders**: Gently return to walking sensations
6. **Turn mindfully**: At end of path, turn with awareness
7. **Continue**: Walk back and forth

#### Tips
- Can be done indoors or outdoors
- Start with 5-10 minutes
- Eyes can be open, looking ahead
- Natural setting enhances experience

## Common Challenges and Solutions

### "My Mind Won't Stop Thinking"
- **This is normal**: Minds are designed to think
- **Not the goal**: Meditation isn't about stopping thoughts
- **The practice**: Noticing thoughts and returning to focus
- **Each return is success**: You're building awareness muscle

### "I Can't Sit Still"
- **Start shorter**: Even 2-3 minutes counts
- **Try walking meditation**: Movement can help
- **Adjust posture**: Find what's comfortable
- **Use guided meditations**: External guidance helps

### "I Fall Asleep"
- **Sit up straighter**: More alert posture
- **Open eyes slightly**: Soft gaze downward
- **Meditate when alert**: Not when exhausted
- **Try walking meditation**: Movement prevents sleep

### "I Don't Have Time"
- **Start with 2-3 minutes**: Every bit counts
- **Integrate into routine**: Morning or before bed
- **Meditate between classes**: Quick reset
- **Quality over quantity**: Short daily practice beats long occasional

### "I'm Not Doing It Right"
- **There's no perfect**: Every practice is different
- **Wandering is part of practice**: Not a mistake
- **Be patient**: Benefits develop over time
- **Trust the process**: Consistency matters most

## Building a Sustainable Practice

### Start Small
- **Week 1**: 5 minutes daily
- **Week 2**: 7 minutes daily
- **Week 3**: 10 minutes daily
- **Week 4+**: Maintain or gradually increase

### Create a Routine
- **Same time daily**: Builds habit
- **Same place**: Creates association
- **Ritual elements**: Candle, cushion, or specific music
- **Track your practice**: Calendar or app

### Be Flexible
- **Some days are easier**: Accept variation
- **Adjust as needed**: Life changes, so can your practice
- **Don't skip completely**: Even 2 minutes helps
- **Return after breaks**: It's okay to restart

### Find Support
- **Meditation apps**: Headspace, Calm, Insight Timer
- **Online communities**: Connect with other practitioners
- **Classes or groups**: Local or virtual options
- **Books or podcasts**: Learn from teachers

## Integrating Mindfulness into Daily Life

### Informal Practices
- **Mindful eating**: Pay attention to taste, texture, sensations
- **Mindful walking**: Notice your steps and surroundings
- **Mindful listening**: Fully attend to conversations
- **Mindful studying**: Single-tasking with full attention

### Mindful Moments
- **Before classes**: Take 3 deep breaths
- **Between tasks**: 30-second pause
- **During stress**: Notice sensations without reacting
- **Before sleep**: Body scan or breath awareness

### Daily Activities
- **Brushing teeth**: Feel the sensations
- **Showering**: Notice water, temperature, movement
- **Commuting**: Observe without judgment
- **Waiting**: Use as meditation opportunity

## Resources and Tools

### Recommended Apps
- **Headspace**: Guided meditations and courses
- **Calm**: Sleep stories and meditation
- **Insight Timer**: Free library with teachers
- **Ten Percent Happier**: Practical approach
- **Waking Up**: Philosophy and practice

### Books
- "Wherever You Go, There You Are" by Jon Kabat-Zinn
- "The Mindful Student" by David Levy
- "Real Happiness" by Sharon Salzberg
- "Mindfulness in Plain English" by Bhante Gunaratana

### Online Resources
- **Mindfulness-Based Stress Reduction (MBSR)**: 8-week program
- **YouTube channels**: Free guided meditations
- **Podcasts**: Meditation and mindfulness content
- **University resources**: Many schools offer mindfulness programs

## Conclusion

Mindfulness meditation is a journey, not a destination. Every moment of practice, no matter how brief or challenging, contributes to your well-being. Start where you are, be patient with yourself, and trust that consistent practice will yield benefits.

Remember that meditation is a skill that develops over time. There's no such thing as a "bad" meditation session—each practice is an opportunity to cultivate awareness and compassion. Your student life will benefit from the clarity, calm, and resilience that mindfulness brings.

Begin today with just a few minutes, and let your practice grow naturally. The most important step is the first one.`
    },
    'breathing-exercises': {
      title: 'Breathing Exercises',
      category: 'Guides',
      content: `# Breathing Exercises

Breathing exercises are simple, powerful tools you can use anywhere to reduce stress, improve focus, and enhance well-being. This guide provides practical breathing techniques you can use throughout your day as a student.

## Why Breathing Exercises Work

### The Science
- **Nervous system regulation**: Activates the parasympathetic (rest-and-digest) system
- **Stress reduction**: Lowers cortisol and reduces fight-or-flight response
- **Heart rate**: Slows rapid heartbeat
- **Blood pressure**: Can help lower elevated blood pressure
- **Oxygenation**: Improves oxygen delivery to brain and body

### Immediate Benefits
- **Calm**: Reduces anxiety and panic
- **Focus**: Improves concentration and clarity
- **Energy**: Can increase alertness or promote relaxation
- **Emotional regulation**: Helps manage strong emotions
- **Sleep**: Prepares body and mind for rest

## Basic Breathing Principles

### Nasal Breathing
- **Breathe through your nose**: Filters, warms, and humidifies air
- **More efficient**: Better oxygen uptake
- **Calming effect**: Activates parasympathetic nervous system
- **Exception**: Some exercises use mouth breathing for specific effects

### Posture
- **Sit or stand comfortably**: Straight but relaxed spine
- **Relaxed shoulders**: Let them drop naturally
- **Comfortable position**: Don't force any posture
- **Can be done anywhere**: Desk, bed, walking, etc.

### Awareness
- **Focus on breath**: Notice sensations of breathing
- **Present moment**: Bring attention to here and now
- **Non-judgmental**: Observe without trying to change
- **Gentle approach**: Don't force or strain

## Essential Breathing Exercises

### 1. Deep Belly Breathing (Diaphragmatic Breathing)

**Best for**: General relaxation, stress reduction, anxiety management

#### How to Practice
1. **Sit or lie comfortably**
2. **Place one hand on chest, one on abdomen**
3. **Inhale slowly through nose** for 4 counts, feeling abdomen rise
4. **Exhale slowly through nose** for 4 counts, feeling abdomen fall
5. **Chest should move minimally**; focus on belly movement
6. **Repeat for 5-10 cycles**

#### Tips
- Start with 4-4 breathing, adjust to what's comfortable
- Practice 5-10 minutes daily
- Use before exams, presentations, or stressful situations
- Can be done discreetly anywhere

### 2. 4-7-8 Breathing (Relaxing Breath)

**Best for**: Falling asleep, reducing anxiety, calming panic

#### How to Practice
1. **Exhale completely** through your mouth
2. **Inhale through nose** for 4 counts
3. **Hold breath** for 7 counts
4. **Exhale through mouth** for 8 counts (make a "whoosh" sound)
5. **Repeat cycle 4-8 times**

#### Tips
- Don't worry about exact counts; maintain ratio (4:7:8)
- Practice when calm first, then use during stress
- Excellent before bed for sleep
- Can stop panic attacks if caught early

### 3. Box Breathing (Square Breathing)

**Best for**: Focus, performance anxiety, maintaining calm under pressure

#### How to Practice
1. **Inhale through nose** for 4 counts
2. **Hold breath** for 4 counts
3. **Exhale through nose** for 4 counts
4. **Hold breath** for 4 counts
5. **Repeat cycle** for 4-10 rounds

#### Tips
- Used by Navy SEALs for stress management
- Great before exams or presentations
- Can adjust count (3-3-3-3 or 5-5-5-5)
- Visualize drawing a box as you breathe

### 4. Alternate Nostril Breathing (Nadi Shodhana)

**Best for**: Balance, focus, calming the mind, energy regulation

#### How to Practice
1. **Sit comfortably** with straight spine
2. **Place right thumb** over right nostril
3. **Inhale through left nostril** for 4 counts
4. **Close left nostril** with ring finger, release right
5. **Exhale through right nostril** for 4 counts
6. **Inhale through right nostril** for 4 counts
7. **Close right nostril**, release left
8. **Exhale through left nostril** for 4 counts
9. **Repeat cycle** 5-10 times
10. **End by exhaling through left nostril**

#### Tips
- Start slowly; coordination improves with practice
- Use gentle pressure on nostrils
- Maintain smooth, even breaths
- Can balance energy and calm the mind

### 5. Breath Counting

**Best for**: Focus, meditation, quieting the mind

#### How to Practice
1. **Sit comfortably** with eyes closed
2. **Take a natural breath**
3. **Count "one"** on exhale
4. **Count "two"** on next exhale
5. **Continue to "ten"**, then start over
6. **If mind wanders**, gently return to counting
7. **Practice for 5-10 minutes**

#### Tips
- Count only on exhales
- Start over if you lose count
- Not about perfection; about returning attention
- Builds concentration and awareness

### 6. Energizing Breath (Bellows Breath)

**Best for**: Increasing energy, alertness, morning wake-up

#### How to Practice
1. **Sit comfortably** with straight spine
2. **Breathe rapidly through nose** (like bellows)
3. **Equal inhale and exhale** (short, quick breaths)
4. **Start with 15 seconds**, gradually increase to 1 minute
5. **Rest and breathe normally** for 30 seconds
6. **Repeat 2-3 times**

#### Tips
- Use with caution if you have breathing issues
- Don't practice on full stomach
- Stop if you feel lightheaded
- Great for morning energy boost

### 7. Progressive Relaxation Breathing

**Best for**: Deep relaxation, body tension, sleep preparation

#### How to Practice
1. **Lie down comfortably**
2. **Take 3 deep breaths**
3. **With each exhale**, imagine tension leaving body
4. **Start with toes**: Tense, then relax on exhale
5. **Move up body**: Calves, thighs, abdomen, chest, arms, face
6. **End with full-body relaxation** breath
7. **Continue slow, deep breathing**

#### Tips
- Combine with body scan meditation
- Excellent before sleep
- Can be done in 5-10 minutes
- Releases physical and mental tension

## When to Use Breathing Exercises

### Daily Practice
- **Morning**: Energizing or centering breath to start day
- **Midday**: Quick reset between classes or tasks
- **Evening**: Relaxing breath to wind down
- **Before bed**: Deep breathing for sleep preparation

### Stressful Situations
- **Before exams**: Box breathing or 4-7-8 for calm
- **During anxiety**: Deep belly breathing for immediate relief
- **Public speaking**: Box breathing before and during
- **Conflict**: 4-7-8 breathing to stay centered

### Study Sessions
- **Before studying**: Deep breath to transition into focus
- **During breaks**: 2-3 minutes of breathing to reset
- **When stuck**: Breath counting to clear mind
- **After studying**: Progressive relaxation to unwind

## Creating a Breathing Practice Routine

### Week 1: Foundation
- **Learn 2-3 techniques**: Deep belly, 4-7-8, box breathing
- **Practice 5 minutes daily**: Choose consistent time
- **Use when calm**: Build skill before needing it
- **Track practice**: Note what works for you

### Week 2: Integration
- **Add to daily routine**: Morning, study breaks, bedtime
- **Use during mild stress**: Practice in real situations
- **Experiment with timing**: Find optimal durations
- **Notice effects**: Pay attention to how you feel

### Week 3: Expansion
- **Learn additional techniques**: Alternate nostril, breath counting
- **Combine techniques**: Use different ones for different needs
- **Increase duration**: Extend practice times
- **Share with others**: Teach friends or study groups

### Week 4: Mastery
- **Use instinctively**: Natural response to stress
- **Customize techniques**: Adapt to your needs
- **Maintain regular practice**: Keep building skill
- **Teach others**: Share what you've learned

## Tips for Success

### Start Simple
- Master one technique before learning another
- Short practices are better than long, inconsistent ones
- Quality over quantity

### Be Patient
- Benefits accumulate over time
- Some days will be easier than others
- Consistency matters more than perfection

### Practice Regularly
- Daily practice builds skill
- Use breathing exercises preventively, not just reactively
- Make it a habit, like brushing teeth

### Listen to Your Body
- Stop if you feel dizzy or uncomfortable
- Adjust techniques to your comfort level
- Consult healthcare provider if you have breathing conditions

### Combine with Other Practices
- Pair with meditation for deeper benefits
- Use with physical exercise
- Combine with positive affirmations
- Integrate with mindfulness

## Common Questions

### "How long should I practice?"
- **Daily practice**: 5-10 minutes is excellent
- **Quick resets**: 1-3 minutes when needed
- **Stress situations**: Use as long as needed
- **Build gradually**: Start with what's comfortable

### "What if I can't hold my breath that long?"
- **Adjust counts**: Use 3-3-3-3 instead of 4-4-4-4
- **Focus on ratio**: Maintain proportions, not exact counts
- **Build gradually**: Increase duration over time
- **Listen to your body**: Don't force or strain

### "Can I do these with breathing problems?"
- **Consult healthcare provider**: Check with doctor first
- **Start gently**: Use milder techniques
- **Avoid breath-holding**: If you have certain conditions
- **Focus on natural breathing**: Don't force anything

### "When will I see results?"
- **Immediate**: Some calm right away
- **Short-term**: Noticeable benefits within days
- **Long-term**: Significant improvements over weeks
- **Consistency**: Regular practice yields best results

## Conclusion

Breathing exercises are among the most accessible and effective tools for managing stress, improving focus, and enhancing well-being. They require no equipment, can be done anywhere, and provide immediate benefits.

As a student, having these techniques in your toolkit can help you navigate academic pressures, social challenges, and daily stressors with greater ease and resilience. Start with one or two techniques, practice regularly, and gradually expand your breathing practice repertoire.

Remember that breathing is always available to you. In moments of stress, anxiety, or overwhelm, your breath is a powerful anchor to the present moment and a pathway to calm. Begin practicing today, and discover the transformative power of conscious breathing.`
    },
    'journaling-mental-health': {
      title: 'Journaling for Mental Health',
      category: 'Guides',
      content: `# Journaling for Mental Health

Journaling is a powerful, accessible tool for mental health that can help you process emotions, reduce stress, gain clarity, and track your well-being. This guide will help you start and maintain a journaling practice that supports your mental health as a student.

## Why Journaling Works

### Psychological Benefits
- **Emotional processing**: Helps you understand and work through feelings
- **Stress reduction**: Writing about worries can decrease their intensity
- **Problem-solving**: Clarifies thoughts and reveals solutions
- **Self-awareness**: Increases understanding of patterns and triggers
- **Memory consolidation**: Helps process and integrate experiences

### Research-Backed Benefits
- **Reduced anxiety**: Studies show journaling decreases worry
- **Improved mood**: Regular writing can enhance emotional well-being
- **Better sleep**: Processing thoughts before bed improves rest
- **Enhanced immune function**: Expressive writing boosts immunity
- **Academic performance**: Journaling can improve learning and retention

## Types of Journaling

### 1. Gratitude Journaling
Focus on positive aspects of life to shift perspective and enhance well-being.

**How to practice:**
- Write 3-5 things you're grateful for daily
- Be specific: "I'm grateful for my friend Sarah who listened to me today"
- Include small things: A good meal, nice weather, a kind gesture
- Reflect on why you're grateful

**Benefits:**
- Increases positive emotions
- Reduces depression symptoms
- Improves relationships
- Enhances overall life satisfaction

### 2. Stream of Consciousness (Free Writing)
Write continuously without stopping, editing, or censoring.

**How to practice:**
- Set a timer (5-15 minutes)
- Write continuously without stopping
- Don't worry about grammar or structure
- Let thoughts flow naturally
- Write "I don't know what to write" if stuck

**Benefits:**
- Releases pent-up emotions
- Reveals subconscious thoughts
- Reduces mental clutter
- Sparks creativity

### 3. Reflective Journaling
Thoughtfully examine experiences, feelings, and reactions.

**How to practice:**
- Describe an event or situation
- Explore your feelings about it
- Consider what you learned
- Identify patterns or insights
- Plan how to apply learning

**Benefits:**
- Deepens self-understanding
- Promotes personal growth
- Improves decision-making
- Enhances emotional intelligence

### 4. Mood Tracking
Monitor emotional patterns and identify triggers.

**How to practice:**
- Rate your mood (1-10 scale)
- Note factors affecting mood
- Track patterns over time
- Identify triggers and supports
- Celebrate improvements

**Benefits:**
- Identifies emotional patterns
- Reveals triggers and supports
- Tracks progress over time
- Informs treatment decisions

### 5. Problem-Solving Journaling
Systematically work through challenges and decisions.

**How to practice:**
- Clearly define the problem
- Brainstorm possible solutions
- List pros and cons
- Consider resources and obstacles
- Choose and plan action steps
- Reflect on outcomes

**Benefits:**
- Clarifies complex situations
- Generates creative solutions
- Reduces decision paralysis
- Increases confidence

### 6. Goal-Oriented Journaling
Track progress toward personal and academic goals.

**How to practice:**
- Set specific, measurable goals
- Break into smaller steps
- Track daily or weekly progress
- Reflect on successes and challenges
- Adjust plans as needed
- Celebrate achievements

**Benefits:**
- Increases goal achievement
- Maintains motivation
- Provides accountability
- Builds self-efficacy

## Getting Started

### Choose Your Format

#### Physical Journal
**Pros:**
- Tangible, personal connection
- No screen time
- Creative expression (drawing, stickers)
- Privacy and security

**Cons:**
- Requires carrying notebook
- Less searchable
- Can be lost or damaged

#### Digital Journal
**Pros:**
- Always accessible (phone, computer)
- Searchable entries
- Easy to back up
- Can include photos, links

**Cons:**
- Screen time
- Less personal feel
- Privacy concerns
- Can be distracting

#### Hybrid Approach
- Use physical journal for deep reflection
- Use digital for quick notes and tracking
- Combine based on situation and preference

### Set Up Your Space
- **Quiet location**: Minimize distractions
- **Comfortable seating**: Make it inviting
- **Pleasant environment**: Add elements you enjoy
- **Consistent spot**: Builds habit association
- **Privacy**: Ensure you can write freely

### Choose Your Tools
- **Journal or notebook**: Find one you enjoy using
- **Pen or pencil**: Comfortable writing instrument
- **Timer**: For timed writing exercises
- **Optional**: Colored pens, stickers, washi tape

## Journaling Prompts for Students

### Academic Stress
- What academic challenges am I facing right now?
- How do I feel about my current workload?
- What study strategies are working for me?
- What would help me feel more confident academically?

### Emotional Processing
- What emotions am I experiencing today?
- What triggered these feelings?
- How are these emotions affecting me?
- What do I need right now?

### Relationships
- How are my relationships supporting or challenging me?
- What do I appreciate about the people in my life?
- How can I improve my connections with others?
- What boundaries do I need to set?

### Self-Reflection
- What am I learning about myself?
- What patterns do I notice in my thoughts or behaviors?
- How have I grown recently?
- What do I want to work on?

### Future Planning
- What are my goals for this semester/year?
- What steps can I take toward my goals?
- What obstacles might I face?
- How will I know I'm making progress?

### Gratitude
- What went well today?
- Who am I grateful for and why?
- What opportunities am I thankful for?
- What simple pleasures did I experience?

## Creating a Journaling Routine

### Frequency
- **Daily**: Best for building habit and tracking patterns
- **Several times weekly**: Good balance for busy schedules
- **As needed**: Use when feeling stressed or overwhelmed
- **Start small**: Even 5 minutes daily makes a difference

### Timing
- **Morning**: Set intentions, process dreams, plan day
- **Evening**: Reflect on day, process experiences, prepare for sleep
- **During stress**: Immediate emotional processing
- **Weekly review**: Reflect on week, plan ahead

### Duration
- **Quick entries**: 5-10 minutes for daily check-ins
- **Deep reflection**: 15-30 minutes for thorough processing
- **Free writing**: 10-20 minutes for stream of consciousness
- **Flexible**: Adjust based on time available and needs

## Overcoming Common Challenges

### "I Don't Know What to Write"
- **Use prompts**: Start with guided questions
- **Write about your day**: Simple description works
- **Write "I don't know"**: Keep writing anyway
- **Start with gratitude**: Easy entry point
- **Set timer**: Write for set time, anything goes

### "I Don't Have Time"
- **Start with 5 minutes**: Every bit counts
- **Combine with routine**: After morning coffee, before bed
- **Use voice notes**: Speak if writing feels slow
- **Quick bullet points**: Doesn't need to be essays
- **Prioritize**: Mental health is worth the time

### "I'm Worried Someone Will Read It"
- **Secure storage**: Lock box, password protection, hidden location
- **Digital privacy**: Encrypted apps, password protection
- **Code or shorthand**: Use symbols or code words
- **Destroy entries**: Write and then dispose if needed
- **Remember benefits**: Privacy concerns shouldn't stop practice

### "My Writing Isn't Good Enough"
- **No one is reading**: This is for you, not publication
- **No rules**: Grammar, spelling, structure don't matter
- **Process over product**: The act of writing matters most
- **Progress, not perfection**: Improvement comes with practice
- **Be kind to yourself**: Self-compassion in writing

### "I Forget to Journal"
- **Set reminders**: Phone alarms or calendar notifications
- **Link to existing habit**: After brushing teeth, before coffee
- **Keep journal visible**: Place where you'll see it
- **Start small**: Lower barrier to entry
- **Track streak**: Use calendar to mark days

## Advanced Journaling Techniques

### Letter Writing
- Write letters to yourself (past, present, future)
- Write to others (don't send, just process)
- Express feelings you can't say aloud
- Gain perspective and closure

### Dialogue Journaling
- Have conversations with different parts of yourself
- Explore inner conflicts
- Give voice to different perspectives
- Find integration and understanding

### Art Journaling
- Combine writing with drawing, painting, collage
- Express emotions visually
- Creative and therapeutic
- Access different parts of brain

### Bullet Journaling
- Organizational system with journaling elements
- Track habits, moods, goals
- Combine planning with reflection
- Highly customizable

## Integrating Journaling with Other Practices

### With Meditation
- Journal after meditation to capture insights
- Write about meditation experiences
- Process thoughts that arose during practice
- Deepen mindfulness through writing

### With Therapy
- Journal between sessions
- Prepare topics for discussion
- Process what you learned
- Track progress and patterns

### With Study Sessions
- Journal before studying to clear mind
- Reflect on what you learned
- Process academic stress
- Plan and track study goals

## Privacy and Safety

### Protecting Your Privacy
- **Secure storage**: Lock box, password-protected files
- **Clear boundaries**: Communicate privacy needs to roommates/family
- **Digital security**: Use encrypted apps, strong passwords
- **Disposal**: Shred or securely delete sensitive entries

### When to Share
- **Therapy**: Share relevant entries with therapist
- **Trusted friends**: Selective sharing for support
- **Crisis situations**: Share if you're in danger
- **Your choice**: You control what and when to share

### Safety Considerations
- **Self-harm thoughts**: Seek immediate professional help
- **Crisis situations**: Contact emergency services
- **Journaling is supplement**: Not replacement for professional care
- **Know your limits**: Get help when needed

## Measuring Progress

### Track Patterns
- Review entries monthly to notice themes
- Identify triggers and supports
- Recognize growth and changes
- Adjust practices based on insights

### Celebrate Progress
- Acknowledge improvements in mood, stress, clarity
- Recognize increased self-awareness
- Appreciate better problem-solving
- Value enhanced emotional regulation

## Conclusion

Journaling is a versatile, powerful tool for mental health that adapts to your needs and schedule. Whether you write daily or occasionally, extensively or briefly, the act of putting thoughts and feelings into words can provide clarity, relief, and growth.

As a student, journaling can help you navigate academic pressures, process emotions, solve problems, and track your well-being. Start where you are, experiment with different approaches, and find what works for you. The most important step is beginning—pick up a pen or open a document and start writing.

Remember that journaling is a practice, not a performance. There's no right or wrong way to do it. What matters is showing up for yourself, being honest, and giving yourself the space to process and grow. Your mental health journey is unique, and journaling can be a valuable companion along the way.`
    }
  }

  const resources = [
    {
      category: 'Articles',
      items: [
        { id: 'understanding-anxiety', title: 'Understanding Anxiety in Students', description: 'Learn about common anxiety triggers and coping strategies' },
        { id: 'healthy-sleep', title: 'Building Healthy Sleep Habits', description: 'Tips for improving your sleep quality and routine' },
        { id: 'academic-stress', title: 'Managing Academic Stress', description: 'Strategies to handle pressure and maintain balance' },
      ],
    },
    {
      category: 'Guides',
      items: [
        { id: 'mindfulness-meditation', title: 'Mindfulness Meditation Guide', description: 'Step-by-step guide to starting your meditation practice' },
        { id: 'breathing-exercises', title: 'Breathing Exercises', description: 'Simple techniques to help you relax and refocus' },
        { id: 'journaling-mental-health', title: 'Journaling for Mental Health', description: 'How to use journaling as a tool for self-reflection' },
      ],
    },
  ]

  const handleArticleClick = (articleId) => {
    setSelectedArticle(articleId)
  }

  const handleBack = () => {
    setSelectedArticle(null)
  }

  if (selectedArticle && articles[selectedArticle]) {
    const article = articles[selectedArticle]
    return (
      <div className="resources-page">
        <div className="article-view">
          <button className="back-button" onClick={handleBack}>
            ← Back to Resources
          </button>
          <div className="article-content">
            <h1>{article.title}</h1>
            <div className="article-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              {section.items.map((item) => (
                <div 
                  key={item.id} 
                  className="resource-item"
                  onClick={() => handleArticleClick(item.id)}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="resource-link">Read Article →</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


