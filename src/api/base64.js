import axios from './utils/axiosInstance'

export default {
  base64Encode(value) {
    const requestBody = {
      value,
    }
    return axios.post('/base64/encode', requestBody)
  },

  base64Decode(value) {
    const requestBody = {
      value,
    }
    return axios.post('/base64/decode', requestBody)
  },
}
