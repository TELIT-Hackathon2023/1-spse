'use client'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Validate } from '../lib/validation/validate'
import { CssValidation } from '../lib/validation/cssValidation'
import { getScreenshot } from '../lib/screenShot/cssScreenShot'
import { users } from '../lib/usability/users'
import { personsInteractionsWithWeb } from '../lib/usability/personsInteractionsWithWeb'

type Props = {
  setProccessing: Dispatch<SetStateAction<boolean>>
  setFinishedProccessing: Dispatch<SetStateAction<boolean>>
  setImgUrl: Dispatch<SetStateAction<string>>
  setUrl: Dispatch<SetStateAction<string>>
  url: string
}

const HomeForm: FC<Props> = ({ setProccessing, setFinishedProccessing, setImgUrl, setUrl, url }) => {
  const handleSubmit = async () => {
    setProccessing(true)
    // const htmlValidationResults = await Validate(url)
    // const cssValidationResults = await CssValidation(url)
    // const imgUrl = await getScreenshot(url)
    // setImgUrl(imgUrl)
    // const possibleUsers: string[] = await users(url)
    // for (const user of possibleUsers) {
    //   await personsInteractionsWithWeb(url, user)
    // }

    setImgUrl('/static/demoWebsite.png')

    setTimeout(() => {}, 3000)
    setFinishedProccessing(true)
  }

  return (
    <form onSubmit={() => handleSubmit()} className='z-10 flex flex-col items-center gap-12'>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        type='text'
        className='placeholder font-poppins mt-24 w-[670px] rounded-[10px] bg-zinc-300 bg-opacity-50 p-4'
        placeholder='URL: https://www.telekom.sk/'
      />
      <button
        type='submit'
        className='aldrichFont w-fit rounded-[50px] border border-white border-opacity-50 px-5 py-3 text-base font-normal text-white text-opacity-50 transition-colors hover:bg-white hover:text-black'
      >
        SUBMIT
      </button>
    </form>
  )
}

export default HomeForm
