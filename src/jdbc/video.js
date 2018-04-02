import axios from '../axios/axiosService'

export const getVideos = () => {
  return axios.get(`/api/videos`)
}

export const getImages = () => {
  return axios.get(`/api/images`)
}
