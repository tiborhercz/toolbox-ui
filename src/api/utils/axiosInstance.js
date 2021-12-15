import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8400/v1',
})

export default axiosInstance
