'use server'
import OpenAI from 'openai'

export const proccessScreenshot = async (imgUrl: string) => {
  const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })


  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: "I have an image of a website's homepage and would like you to analyze its design and user experience aspects. Please examine the following elements: Visibility and Readability of Text: Assess if the text on the website is easily readable. Consider factors like font size, font style, and the contrast between text color and background. Color Contrast and Palette: Evaluate the use of colors on the website. Are the colors harmonious and pleasing to the eye? Is there sufficient contrast between different elements (like text and background, buttons and their labels) to make them easily distinguishable? Overall Design Aesthetics: Give your opinion on the aesthetic appeal of the website. Does the design seem modern, outdated, professional, playful, etc.? User Experience Considerations: Comment on the layout of the website. Is the content organized logically? Are navigation elements like menus and buttons positioned intuitively? Does the design seem to facilitate a good user experience? Any Additional Observations: Note any other design elements that stand out, either positively or negatively, such as the use of images, spacing between elements, or the overall structure of the page. Return me text with analyze"
          },
          {
            type: 'image_url',
            image_url: {
              url: imgUrl
            }
          }
        ]
      }
    ],
    model: 'gpt-4-vision-preview'
  })

  
  return completion.choices
}
