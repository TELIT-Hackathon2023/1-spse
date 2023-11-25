'use client'
import React, { useState } from 'react'
import { Validate } from '../lib/validation/validate'
import { CssValidation } from '../lib/validation/cssValidation'
import { getScreenshot } from '../lib/screenShot/cssScreenShot'

const HomeForm = () => {
  const [url, setUrl] = useState('')

  const handleSubmit = async () => {
    // const htmlValidationResults = await Validate(url)
    // const cssValidationResults = await CssValidation(url)
    await getScreenshot(url)
    
  }

  return (
    <form onSubmit={() => handleSubmit()} className='flex gap-8'>
      <input
        type='text'
        className='border border-black px-4'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter URL to validate'
        required
      />
      <button type='submit' className='border border-black p-4'>
        Submit
      </button>
    </form>
  )
}

export default HomeForm
