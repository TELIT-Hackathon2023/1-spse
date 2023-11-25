'use server'
import OpenAI from 'openai'

export async function proccessValidationError(error: string) {
  const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `this is error object from html validation: ${JSON.stringify(
          error
        )}. Give me back object so that i can format it to json containing html error description, html where it occured with one line above and one line below, suggestion how to fix it. Dont write any comments or addittional info just the object i want. Object example: {
          errorDescription: errorDescription,
          line: line,
          html: html context,
          suggestion: how to fix it
        }`
      }
    ],
    model: 'gpt-4'
  })

  return response.choices?.[0].message.content
}
