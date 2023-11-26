import React, { FC } from 'react'
import ScreenshotPart from './ScreenshotPart'
import { Tab, Tabs } from '@nextui-org/react'
import Link from 'next/link'

type Props = {
  imgUrl: string
  url:string
}

const Results: FC<Props> = ({ imgUrl,url }) => {
  return (
    <>
      <h2 className='font-poppinsBold text-[78px] font-semibold text-white'>Here are your results...</h2>
      <Link href={url} className='font-poppinsBold text-xl font-semibold text-white text-opacity-50'>
        {url}
      </Link>
      <ScreenshotPart imgUrl={imgUrl} />
      <div className='mt-16  flex w-[80%] flex-col items-stretch gap-44'>
        <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
          <p className='font-poppins text-[40px] font-semibold text-white'>Text</p>
          <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima magnam dolor consectetur, aspernatur
            laudantium. Incidunt ab alias reiciendis laudantium unde adipisci consequuntur, voluptatum dolorum ut
            repellat minima repellendus molestias quod expedita neque animi debitis eaque exercitationem maiores
            quisquam dignissimos similique? Dicta assumenda voluptatem quos, sunt, in quaerat maxime alias tempore
            veritatis beatae quod, similique ea ad aut minima porro dignissimos commodi ipsa autem iste voluptatibus.
            Hic enim ea illum ipsa quidem, quod corrupti deleniti accusantium ipsam, quam ex rerum ratione quia sapiente
            consectetur! Quos a quaerat illo inventore ex aspernatur delectus nemo nisi fugiat quisquam, sit corrupti
            tempora in.
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Tabs
            aria-label='Options'
            classNames={{
              base: 'mb-6'
            }}
          >
            <Tab key='html' title='HTML' className='w-full'>
              <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
                <p className='font-poppins text-[40px] font-semibold text-white'>Html</p>
                <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima magnam dolor consectetur,
                  aspernatur laudantium. Incidunt ab alias reiciendis laudantium unde adipisci consequuntur, voluptatum
                  dolorum ut repellat minima repellendus molestias quod expedita neque animi debitis eaque
                  exercitationem maiores quisquam dignissimos similique? Dicta assumenda voluptatem quos, sunt, in
                  quaerat maxime alias tempore veritatis beatae quod, similique ea ad aut minima porro dignissimos
                  commodi ipsa autem iste voluptatquia sapiente consectetur! Quos a quaerat illo inventore ex aspernatur
                  delectus nemo nisi fugiat quisquam, sit corrupti tempora in.
                </p>
              </div>
            </Tab>
            <Tab key='css' title='CSS' className='w-full'>
              <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
                <p className='font-poppins text-[40px] font-semibold text-white'>Css</p>
                <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima magnam dolor consectetur,
                  aspernatur laudantium. Incidunt ab alias reiciendis laudantium unde adipisci consequuntur, voluptatum
                  dolorum ut repellat minima repellendus molestias quod expedita neque animi debitis eaque
                  exercitationem maiores quisquam dignissimos similique? Dicta assumenda voluptatem quos, sunt, in
                  quaerat maxime alias tempore veritatis beatae quod, similique ea ad aut minima porro dignissimos
                  commodi ipsa autem iste voluptatibus. Hic e
                </p>
              </div>
            </Tab>
            <Tab key='js' title='JS' className='w-full'>
              <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
                <p className='font-poppins text-[40px] font-semibold text-white'>Js</p>
                <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima magnam dolor consectetur,
                  aspernatur laudantium. Incidunt ab a Quos a quaerat illo inventore ex aspernatur delectus nemo nisi
                  fugiat quisquam, sit corrupti tempora in.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className='flex flex-col items-center gap-6'>
          <p className='font-poppins text-[40px] font-semibold text-white'>Usibility</p>
          <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
            <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minima magnam dolor consectetur, aspernatur
              laudantium. Incidunt ab alias reiciendis laudantium unde adipisci consequuntur, voluptatum dolorum ut
              repellat minima repellendus molestias quod expedita neque animi debitis eaque exercitationem maiores
              quisquam dignissimos similique? Dicta assumenda voluptatem quos, sunt, in quaerat maxime alias tempore
              veritatis beatae quod, similique ea ad aut minima porro dignissimos commodi ipsa autem iste voluptatquia
              sapiente consectetur! Quos a quaerat illo inventore ex aspernatur delectus nemo nisi fugiat quisquam, sit
              corrupti tempora in.
            </p>
          </div>
        </div>
        <div className='h-[40rem]'></div>
      </div>
    </>
  )
}

export default Results
