import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const SYSTEM_PROMPT = `You are SerenaGPT, a helpful and empathetic AI assistant. Your role is to be supportive, understanding, and genuinely helpful to users while maintaining a warm, caring tone.

Guidelines:
- Be empathetic and understanding in your responses
- Provide helpful, detailed, and thoughtful answers to questions
- Help users with a wide range of topics - from general questions to emotional support
- Use a warm, caring, and conversational tone
- Be thorough in your responses when helpful, but also know when to be concise
- If asked about mental health or emotional struggles, offer support and understanding
- For serious crisis situations involving self-harm or suicide, immediately direct users to professional help (988 Suicide Prevention Lifeline or 911)
- Otherwise, be as helpful as ChatGPT would be, but with added empathy and warmth`

export async function POST(request) {
  try {
    const { messages } = await request.json()

    // Check for crisis keywords
    const userMessage = messages[messages.length - 1]?.content?.toLowerCase() || ''
    const crisisKeywords = ['suicide', 'kill myself', 'end my life', 'self-harm', 'hurt myself', 'want to die', 'ending it all']
    
    if (crisisKeywords.some(keyword => userMessage.includes(keyword))) {
      return NextResponse.json({
        message: "I'm really concerned about what you've shared. Please reach out for professional help immediately. You can call the National Suicide Prevention Lifeline at 988, or contact emergency services at 911. Your life matters, and there are people who want to help you."
      })
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.8,
      max_tokens: 1000,
    })

    return NextResponse.json({
      message: completion.choices[0].message.content
    })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Failed to get response from AI' },
      { status: 500 }
    )
  }
}

