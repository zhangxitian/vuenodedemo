<template>
  <div class="videolist">
    <img :src="video.coverSrc" />
    <span>{{ video.title }}</span>
  </div>
</template>

<script>
  export default {
    props: ['video'],

  }
</script>
<style>
  .videolist img{width: 100px;height: 75px;}
</style>
