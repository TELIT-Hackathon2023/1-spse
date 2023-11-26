'use client'
import Image from 'next/image'
import HomeForm from './components/HomeForm'
import Results from './components/Results'
import { useState } from 'react'
import ScreenshotPart from './components/ScreenshotPart'
import Loader from './components/Loader'
export default function Home() {
  const [proccessing, setProccessing] = useState(false)
  const [finishedProccessing, setFinishedProccessing] = useState(false)
  const [imgUrl, setImgUrl] = useState('')
  const [url, setUrl] = useState('')
  const [htmlValidation, setHtmlValidation] = useState('')
  const [cssValidation, setCssValidation] = useState('')
  const [usersUsability, setUsersUsability] = useState([])
  return (
    <div className='grid place-items-center '>
      <div
        className={`heroBgImage flex min-h-screen w-full flex-col items-center pt-52 ${
          proccessing && !finishedProccessing && 'justify-center'
        }`}
      >
        {finishedProccessing ? (
          <>
            <Results url={url} imgUrl={imgUrl} htmlValidation={htmlValidation}/>
          </>
        ) : proccessing ? (
          <Loader />
        ) : (
          <>
            <h2 className='headtext font-poppinsBold text-[78px] font-semibold text-white'>Analyse your website.</h2>
            <p className='font-poppins mt-6 w-[40%] text-center text-2xl font-normal text-white'>
              Simply paste your URL in the box below and press submit. We will analyse your website and provide you with
              important developer data.
            </p>
            <HomeForm
              url={url}
              setUrl={setUrl}
              setImgUrl={setImgUrl}
              setProccessing={setProccessing}
              setFinishedProccessing={setFinishedProccessing}
              setHtmlValidation={setHtmlValidation}
              cssValidation={setCssValidation}
              setUsersUsability={setUsersUsability}
            />
          </>
        )}
      </div>
    </div>
  )
}
