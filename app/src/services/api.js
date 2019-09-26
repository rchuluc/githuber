import axios from 'axios'

export default api = axios.create({
  baseURL: 'https://api.github.com',
})
