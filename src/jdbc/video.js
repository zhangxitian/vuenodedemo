import axios from '../axios/axiosService'

export const getVideos = () => {
  return axios.get(`/api/videos`)
}
