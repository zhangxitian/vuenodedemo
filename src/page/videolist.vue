<template>
  <div class="videolist">
    <VideoItem v-for="video in videos" :video="video"></VideoItem>
  </div>
</template>

<script>
  import VideoItem from '../components/video/VideoItem'
  import { mapState } from 'vuex'

  export default {
    components: {
      VideoItem
    },
    created() {
      this.getVideos()
    },
    computed: {
      ...mapState({
        videos: 'videos'
      })
    },
    methods: {
      getVideos(){
        console.log(this.$store)
        this.$store.commit('getvideos')
      }
    }

  }
</script>
<style>
  .videolist {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 100px;
    padding-top: 70px
  }
</style>
