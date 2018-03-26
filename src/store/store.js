import Vue from 'vue'
import Vuex from 'vuex'

import {getVideos} from "../jdbc/video"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    videos: []
  },

  mutations: {
    getvideos: state => {
        let v = getVideos()
        v.then(res => {
          state.videos = res.data.videos
        })
    }
  }
})

export default store
