'use server'
import axios from 'axios'
import { proccessScreenshot } from './proccessScreenshot'
import FormData from 'form-data'

export const getScreenshot = async (url: string) => {
  const apiEndpoint = 'https://api.apiflash.com/v1/urltoimage'
  const params = {
    access_key: process.env.API_FLASH_API_KEY,
    url: url,
    wait_until: 'network_idle',
    full_page: true
  }

  const formData = new FormData()
  try {
    const response = await axios.get(apiEndpoint, { params, responseType: 'arraybuffer' })

    if (response.status === 200) {
      formData.append('image', response.data)

      const imgResponse = await axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`
        }
      })

      await proccessScreenshot(imgResponse.data.data.link)
    } else {
      console.log('Error:', response.status, response.statusText)
    }
  } catch (error) {
    console.error('Error:', error)
  }

}
