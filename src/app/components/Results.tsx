import React, { FC, useEffect,useState } from 'react'
import ScreenshotPart from './ScreenshotPart'
import { Tab, Tabs } from '@nextui-org/react'
import Link from 'next/link'

type Props = {
  imgUrl: string
  url:string
  htmlValidation: string
}

type nextPropsHere = {
  'errorDescription': string,
  "line": number,
  "html": string,
  "suggestion": string
}[]

const Results: FC<Props> = ({ imgUrl,url, htmlValidation }) => {
  const [htmlValidationState, setHtmlValidationState] = useState<nextPropsHere>([])
  console.log("hello")
  useEffect(() => {
    let stringHtmlBalidation: string = '[' +htmlValidation+ ']'
    let htmlValidationList: nextPropsHere = JSON.parse(stringHtmlBalidation)
    setHtmlValidationState(htmlValidationList)
    
}, []);

  
  console.log(htmlValidationState)
  return (
    <>
      <h2 className='font-poppinsBold text-[78px] font-semibold text-white'>Here are your results...</h2>
      <Link href={url} className='font-poppinsBold text-xl font-semibold text-white text-opacity-50'>
        {url}
      </Link>
      <ScreenshotPart imgUrl={imgUrl} />
      <div className='mt-16 flex w-[80%] flex-col items-stretch gap-44'>
        <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
          <p className='font-poppins text-[40px] font-semibold text-white'>Text</p>
          
          <p className='font-poppins text-[30px] font-semibold text-white opacity-80'>Visibility and Readability of Text:</p>
          
          <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
            Font Size & Style: The font size varies across the webpage. The product names and prices seem to be in a larger font, making them stand out, but some text appears quite small, especially in the navigation bar and footer, which might be hard to read for users with visual impairments.
            Contrast: The contrast is generally good with dark text on light backgrounds for the product sections. However, the navigation bar uses a lighter color which might reduce readability.
          </p>
          <p className='font-poppins text-[30px] font-semibold text-white opacity-80'>Color Contrast and Palette:</p>
          <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
            Harmony: The color palette appears to be consistent with a focus on pink and purple tones, which might be part of the brand's color scheme.
            Contrast: The contrast is adequate in most areas. However, the buttons have a gradient style that could make the text hard to read depending on the background color at the point where the text sits.
          </p>
          <p className='font-poppins text-[30px] font-semibold text-white opacity-80'>Overall Design Aesthetics:</p>
          <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
            Aesthetic Appeal: The website design leans towards a modern and playful aesthetic, primarily due to the use of bright colors and a clean grid layout for the products. It seems to target a young audience or one that appreciates a vibrant, energetic look.
          </p>
          <p className='font-poppins text-[30px] font-semibold text-white opacity-80'>User Experience Considerations:</p>
          <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
            Layout: The content seems to be organized in a logical grid layout which is commonly used for e-commerce platforms, allowing users to easily browse products.
            Navigation: The main navigation elements are placed at the top, which is a standard practice. But the small font size and the use of icons without text in the upper right corner might not be immediately clear to all users.
            User Experience: The design facilitates browsing with clear categorization of products. The use of large images for products enhances the browsing experience.
          </p>
          <p className='font-poppins text-[30px] font-semibold text-white opacity-80'>Additional Observations:</p>
          <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
            Images: Product images are large and clear, which is good for an e-commerce setting.
            Spacing: There is a consistent use of spacing between elements, which avoids a cluttered look and helps with the overall legibility.
            Structure: There's a promotional banner at the top, followed by featured categories and products, which is a typical e-commerce layout.
          </p>

          <p className='font-poppins text-[30px] font-semibold text-white opacity-80'>Summary:</p>
          <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
            The website's homepage has a modern and playful design that is generally user-friendly, with a few areas where readability could be improved. The color scheme is consistent and vibrant, which might appeal to a younger demographic. The layout and use of images are effective for an e-commerce platform, although some text elements could benefit from larger fonts or better contrast. The design supports a positive user experience with its logical structure and clear navigation cues.
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
                <p className='font-poppins text-[20px] font-semibold text-white opacity-80'></p>
                {htmlValidationState.map((error, index) => (
                    <div key={index} style={{ backgroundColor: '#ffcccc', border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                      <p><strong>Error:</strong> {error.errorDescription}</p>
                      <p><strong>Line:</strong> {error.line}</p>
                      <p><strong>Code:</strong> <code>{error.html}</code></p>
                      <p><strong>Suggestion:</strong> {error.suggestion}</p>
                    </div>
                  ))}
                
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
          <div className='flex gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12 justify-between'>
            <div className='w-[70%] flex gap-4 flex-col'>
              <p className='font-poppins text-[30px] font-semibold text-white opacity-80'>
                Elderly Individual
              </p>
              <p className='font-poppins text-[15px] font-semibold text-white opacity-80'>
                Some areas for improvement could be installing a feature for changing the size of the text to accommodate for declining vision, using more contrasting colors for better visibility, simplifying the navigation layout and providing detailed instructions or prompts for any online procedures such as account management or tariff changing. Also, voice command feature could prove helpful.
              </p>
            </div>
            <div className='flex justify-center items-center flex-col'>
            
              <h1 className='font-poppins text-[70px] font-semibold text-white opacity-80'>78%</h1>
              <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>Rating of web</p>
            </div>
            
            
          </div>
        </div>
        <div className='h-[40rem]'></div>
      </div>
    </>
  )
}

export default Results
