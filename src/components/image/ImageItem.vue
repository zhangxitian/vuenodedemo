<template>
  <div class="image">
    <i class="img-height">
      <img :src="image.image_url" onerror="this.remove()"/>
    </i>
  </div>
</template>

<script>
export default {
  props: ['image']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .image {width:18%;padding-bottom: 10px;padding-left: 5px;}
  .image .img-height{display: block; position: relative; z-index: 1; height: 0;  background-color: aqua; overflow: hidden; padding-left: 10px;box-sizing:border-box;padding-bottom: 133%;}
  .image img{width: 100%; height: 100%; position: absolute; z-index: 2; left:0 ;right:0; top: 0;bottom: 0;object-fit: cover;object-position: center; }
</style>
