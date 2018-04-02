import Vue from 'vue'
import Vuex from 'vuex'

import {getVideos, getImages} from "../jdbc/video"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videos: [],
    images: []
  },

  mutations: {
    getvideos: state => {
        let v = getVideos()
        v.then(res => {
          state.videos = res.data.videos
        })
    },
    getImages: state => {
        getImages().then(res => {
          state.images = res.data
        })
    }
  }
})

export default store
