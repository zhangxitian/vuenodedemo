<template>
  <div>
    <img v-lazy="video.coverSrc" />
    <span>{{ video.title }}</span>
  </div>
</template>

<script>
  export default {
    props: ['video'],

  }
</script>
