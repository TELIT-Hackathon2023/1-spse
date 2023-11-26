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
      <h2 className='headtext font-poppinsBold text-[78px] font-semibold text-white'>Here are your results...</h2>
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
                <p className='font-poppins text-[40px] font-semibold text-white'>HTML</p>
                <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
                <div className='erorrs' style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                  <p className='description'>Error Description:</p> 
                  <p>
                    The “type” attribute is unnecessary for JavaScript resources.
                  </p>
                  <p className='description'><strong>Line:</strong></p> <p>1</p>
                  <p className='description'><strong>HTML: </strong></p> <p> &lt;title&gt;m&lt;/title&gt; &lt;script type=&quot;text/javascript&quot; src=&quot;/theme/shared/third-party/jquery/jquery-1.11.1.min.js&quot;&gt;&lt;/script&gt;</p>
                  <p className='description'><strong>Suggestion: </strong></p><p> Remove the “type” attribute from your &lt;script&gt; tag. Modern browsers no longer require it for JavaScript resources.</p>
                </div>
                <div className='erorrs' style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                  <p className='description'><strong>Error Description: </strong></p> 
                  <p>
                  Stray start tag “html
                  </p>
                  <p className='description'><strong>Line: </strong></p> <p>6</p>
                  <p className='description'><strong>HTML: </strong></p> <p> v&gt; &lt;/div&gt; &lt;html&gt; &lt;head</p>
                  <p className='description'><strong>Suggestion: </strong></p><p> Remove the extraneous start tag “html”.</p>
                </div>
                <div className='erorrs' style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                  <p className='description'><strong>Error Description:</strong></p> 
                  <p>
                  Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.
                  </p>
                  <p className='description'><strong>Line: </strong></p> <p>54</p>
                  <p className='description'><strong>HTML: </strong></p> <p> &lt;option&quot; /&gt; &lt;meta content=&quot;telekom, t com, t mobile, slovak telekom, telecom&quot; lang=&quot;sk-SK&quot; name=&quot;keywords&quot; /&gt; &lt;link</p>
                  <p className='description'> <strong>Suggestion: </strong></p><p> Remove the trailing slash on void elements and do not unquote attribute values.</p>
                </div><div className='erorrs' style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                  <p className='description'> <strong>Error Description: </strong></p> 
                  <p>
                  Unclosed element “header
                  </p>
                  <p className='description'><strong>Line: </strong></p> <p>62</p>
                  <p className='description'><strong>HTML: </strong></p> <p> &gt; &lt;/head&gt; &lt;body&gt; &lt;div </p>
                  <p className='description'><strong>Suggestion: </strong></p><p> Remove the unnecessary “body” start tag as you already have an open body element.</p>
                </div><div className='erorrs' style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                  <p className='description'><strong>Error Description: </strong></p> 
                  <p>
                  Unclosed element “div”.
                  </p>
                  <p className='description'><strong>Line: </strong></p> <p>81</p>
                  <p className='description'><strong>HTML: </strong></p> <p> x&quot;\&gt;&lt;/div&gt; &lt;header id=&quot;header&quot;&gt; &lt;div </p>
                  <p className='description'><strong>Suggestion: </strong></p><p> Close the “header” element properly in your HTML by adding the closing tag &lt;/header&gt; at the appropriate place.</p>
                </div>
                </p>
              </div>
            </Tab>
            <Tab key='css' title='CSS' className='w-full'>
              <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
                <p className='font-poppins text-[40px] font-semibold text-white'>CSS</p>
                <p className='font-poppins text-[20px] font-semibold text-white opacity-80'>
                <div style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                      <p><p className='description'>Error description:</p> Element br not allowed as child of element ul in this context. </p>
                      <p><p className='description'>Line:</p> 38</p>
                      <p><p className='description'>Code:</p> <code>y&lt;/a&gt;&lt;/li&gt;&lt;br&gt;</code></p>
                      <p><p className='description'>Suggestion:</p> Zero or more li and script-supporting elements.</p>
                </div>
                <div style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                      <p><p className='description'>Error description:</p> Dublicate ID first-slide </p>
                      <p><p className='description'>Line:</p> 41</p>
                      <p><p className='description'>Code:</p> <code>&lt;div class="slide" id="first-slide" onclick="redirectToPage()"&gt;</code></p>
                      <p><p className='description'>Suggestion:</p> Delete duplicate</p>
                </div>
                <div style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                      <p><p className='description'>Error description:</p> Dublicate ID first-slide </p>
                      <p><p className='description'>Line:</p> 58</p>
                      <p><p className='description'>Code:</p> <code>&lt;div class="slide" id="first-slide" onclick="redirectToPage()"&gt;</code></p>
                      <p><p className='description'>Suggestion:</p> Delete duplicate</p>
                </div>
                <div style={{  border: '1px solid #ff0000', marginBottom: '10px', padding: '10px' }}>
                      <p><p className='description'>Error description:</p>Element br not allowed as child of element ul in this context.  </p>
                      <p><p className='description'>Line:</p> 90</p>
                      <p><p className='description'>Code:</p> <code>y&lt;/a&gt;&lt;/li&gt;&lt;br&gt;</code></p>
                      <p><p className='description'>Suggestion:</p> Zero or more li and script-supporting elements.</p>
                </div>
                </p>
              </div>
            </Tab>
            <Tab key='js' title='JS' className='w-full'>
              <div className='flex flex-col gap-4 rounded-2xl bg-zinc-300 bg-opacity-10 p-12'>
                <p className='font-poppins text-[40px] font-semibold text-white'>JS</p>
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
