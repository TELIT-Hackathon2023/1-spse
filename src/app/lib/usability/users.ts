'use server'
import OpenAI from 'openai'

export const users = async (url: string) => {
  const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })


  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Analyze this ${url} website content and give me back list so that i can format it to json containing  5 users of website which can use this website. They should be from all age categories. Dont write any comments or addittional info just the list i want. List example: [
                doctor,
                grandma,
                teenager,
                cleaner,
                it-technik
            ]`
          }
        ]
      }
    ],
    model: 'gpt-4'
  })

  
  console.log(completion.choices)
  return []
}
