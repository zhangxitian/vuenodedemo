<template>
  <header class="header">
    <div class="logo">
      <router-link :to="'/videolist'"><span>VN</span></router-link>
    </div>
    <nav>
      <ul>
        <li><router-link :to="'/videolist'">videolist</router-link></li>
        <li><router-link :to="'/images'">imagelist</router-link></li>
        <li><router-link :to="'/formtest'">login</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {

  }
</script>
<style>
  .header{ width: 100%;display: flex; position: fixed; background-color: #fff;top: 0; left: 0; height: 60px;z-index: 100}
  .header:after{  bottom: -5px;  box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .20);  content: "";  height: 5px;  left: 0px;  opacity: 1;  pointer-events: none;  position: absolute;  right: 0px;  width: 100%;  z-index: 2050;  }
  .header .logo{ width:10%; padding-right: 20px;text-align: center}
  .header .logo span{ font-size: 1.875rem; color: #2793E6; text-align: center; position: absolute; padding-top: 10px}
  .header nav ul{list-style-type: none; display: flex; width: 100%; height: 100%;margin: 0}
  .header nav ul li{padding: 0 15px; height: 100%}
  .header nav a{text-decoration: none; font-size: 1rem; height: 97%; align-items: center;display: flex}
  .header .router-link-active{ color: #2793E6 !important; border-bottom: 3px solid #2793E6}

  .header nav a:link {color: #000}
  .header nav a:visited {color: #000}
  .header nav a:hover {color: #2793E6}
  .header nav a:active {color: #2793E6}
</style>
