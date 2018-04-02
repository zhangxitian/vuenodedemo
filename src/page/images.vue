<template>
  <div class="images">
    <ImageItem v-for="(image,i) in images" v-if="i<30" :image="image"></ImageItem>
  </div>
</template>

<script>
  import ImageItem from '../components/image/ImageItem'
  import {mapState} from 'vuex'
  export default {
    components: {
      ImageItem
    },
    computed: {
      ...mapState({
        images: 'images'
      })
    },
    created(){
      this.getImages()
    },
    methods: {
      getImages(){
        this.$store.commit('getImages')
      }
    }

  }
</script>
<style>
  .images {display: flex; padding: 70px 0 0 100px; flex-wrap: wrap}
</style>
