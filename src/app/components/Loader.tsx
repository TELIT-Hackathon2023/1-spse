import { CircularProgress } from '@nextui-org/react'
import React from 'react'

const Loader = () => {
  return (
    <CircularProgress
      size='lg'
      classNames={{
        svg: 'h-[6rem] w-[6rem]',
        indicator: 'text-white'
      }}
      aria-label='Loading...'
      className='mb-20'
    />
  )
}

export default Loader
