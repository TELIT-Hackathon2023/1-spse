'use server'
import axios from 'axios'
import cssValidator from 'w3c-css-validator'
import jsdom from 'jsdom'
import { proccessValidationError } from './proccessValidationErrors'
import { proccessValidationCssError } from './processValidationCssErrors'

export const CssValidation = async (url: string) => {
  try {
    const pageResponse = await axios.get(url)
    const regex = /<link\s+[^>]*>/gi
    const cssLinks = pageResponse.data.match(regex)
    const filteredCssLinks = cssLinks.filter((cssLink: string) => 
      (cssLink.includes('rel="stylesheet"') || cssLink.includes("rel='stylesheet'")) && cssLink.includes('.css')
    )

    const cssHrefs = filteredCssLinks.map((link: string) => {
      const match = link.match(/href=["'](.*?)["']/)
      return match ? match[1] : null
    }).filter(link => link != null)

    const allTogether = await Promise.all(cssHrefs.map(async (cssLink: any) => {
      try {
        const cssResponse = await axios.get(cssLink.includes('www.') ? cssLink : url + cssLink)
        const css = cssResponse.data
        const validationResult = await cssValidator.validateText(css)
        const filteredValidationErrors = validationResult.errors.map(i => ({
          ...i,
          css: css.split(/\r?\n/).slice(i.line - 2, i.line + 2)
        }))

        const result = filteredValidationErrors.filter(obj => obj.message !== 'Parse Error')

        return Promise.all(result.map(async i => await proccessValidationCssError(i)))
      } catch (innerError) {
        console.error('Error processing CSS link:', cssLink, innerError)
        return []
      }
    }))

    console.log(allTogether)
    return allTogether.flat()
  } catch (error) {
    console.error('Error during validation:', error)
  }
}
