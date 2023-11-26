import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='aldrichFont customUnderline absolute z-30 flex items-center gap-4 pb-4 pl-20 pt-16 text-[41.46px] font-normal tracking-[8.29px] text-white'>
      <Image width={41} height={41} src={'/static/globe.png'} alt='globe icon' />
      <h1><a href=''>WEB-ANALYSE</a></h1>
    </div>
  )
}

export default Navbar
