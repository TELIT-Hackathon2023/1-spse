'use server'
import OpenAI from 'openai'

export const personsInteractionsWithWeb = async (url:string, user: string) => {
  const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })


  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Analyze this ${url} website content and give me back object so that i can format it to json containing  type of user and suggestion where you will make usibility test for this user ${user} for better interaction with website. And return number from 1 to 100 which will rate website base on how good is created for this ${user}. Dont write any comments or addittional info just the object i want. Object example: {
                user: ${user},
                suggestion: 
              }`
          }
        ]
      }
    ],
    model: 'gpt-4'
  })

  
  console.log(completion.choices)
}
