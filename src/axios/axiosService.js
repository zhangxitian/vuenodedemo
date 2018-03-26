import axios from 'axios'

let baseURL = "/api"

const service = axios.create({
  baseURL: baseURL,
  timeout: 3000
})

export default service
