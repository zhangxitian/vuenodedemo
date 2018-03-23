<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <nav>
      <router-link :to="'/'">hello1</router-link>
      <router-link :to="'/helloworld2'">hello2</router-link>
      <router-link :to="'/helloworld3'">hello3</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
