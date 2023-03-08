import axios from 'axios'

export const generateToken = async () => {
  const { data } = await axios.post(
    'https://pva.pixyle.ai/v4/users/login',
    {
      username: 'petar-frontend-assigment',
      password: '0jxtvpz5sc#'
    },
    { headers: { 'Content-Type': 'application/json' } }
  )
  return data.access_token
}

export const uploadImage = async (imageUrl) => {
  // Generate user token before image upload
  const token = await generateToken()

  return await axios.post(
    'https://pva.pixyle.ai/v4/solutions/auto-tag/image',
    imageUrl,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    }
  )
}
