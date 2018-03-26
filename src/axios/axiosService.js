import axios from 'axios'

let baseURL = "http://localhost:4000"

const service = axios.create({
  baseURL: baseURL,
  timeout: 3000
})

export default service
