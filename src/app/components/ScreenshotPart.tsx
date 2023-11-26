import Image from 'next/image'
import React, { FC } from 'react'

type Props = {
  imgUrl: string
}

const ScreenshotPart: FC<Props> = ({ imgUrl }) => {
  return (
    <div className='customScrollbar h-[50rem] w-[80%] overflow-y-scroll mt-16 rounded-xl'>
      <img src={imgUrl} alt='website' className='w-full' />
    </div>
  )
}

export default ScreenshotPart
