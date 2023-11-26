'use server'

import { proccessValidationError } from './proccessValidationErrors'

export const Validate = async (url: string) => {
  const validationUrl = `https://validator.w3.org/nu/?doc=${encodeURIComponent(url)}&out=json`
  const validationResponse = await fetch(validationUrl, { cache: 'no-cache' })
  const validationErrors = await validationResponse.json()

  const filteredErrors = validationErrors.messages.filter((i: any) => {
    return {
      html: i.extract,
      type: i.type,
      extract: i.extract
    }
  })

  const answers = await Promise.all(
    filteredErrors.map(async (i: any) => {
      return await proccessValidationError(i)
    })
  )
  
  return answers
}
