<template>
  <div class="video">
    <img :src="video.coverSrc" />
    <h4>{{ video.title }}</h4>
  </div>
</template>

<script>
  export default {
    props: ['video'],

  }
</script>
<style>
  .video{width:200px; margin-right: 10px;}
  .video img{width: 200px;height: 150px;}
  .video h4{margin: 8px 0;}
</style>
