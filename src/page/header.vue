<template>
  <header class="header">
    <div class="logo">
      <router-link :to="'/videolist'"><span>VN</span></router-link>
    </div>
    <nav>
      <ul>
        <li><router-link :to="'/videolist'">videolist</router-link></li>
        <li><router-link :to="'/helloworld2'">imagelist</router-link></li>
        <li><router-link :to="'/helloworld3'">login</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {

  }
</script>
<style>
  .header{ width: 100%;display: flex; position: fixed; background-color: #fff;top: 0; left: 0; height: 60px}
  .header:after{  bottom: -5px;  box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .20);  content: "";  height: 5px;  left: 0px;  opacity: 1;  pointer-events: none;  position: absolute;  right: 0px;  width: 100%;  z-index: 2050;  }
  .header .logo{ width:10%; padding-right: 20px}
  .header .logo span{ font-size: 1.875rem; color: hsl(206.1, 79.3%, 52.7%); text-align: center; position: absolute; padding-top: 10px}
  .header nav ul{list-style-type: none; display: flex; width: 100%; height: 100%;margin: 0}
  .header nav ul li{padding: 0 15px; height: 100%}
  .header nav a{text-decoration: none; font-size: 1rem; height: 97%; align-items: center;display: flex}
  .header .router-link-active{ color: hsl(206.1, 79.3%, 52.7%) !important; border-bottom: 3px solid hsl(206.1, 79.3%, 52.7%)}

  .header nav a:link {color: #000}
  .header nav a:visited {color: #000}
  .header nav a:hover {color: hsl(206.1, 79.3%, 52.7%)}
  .header nav a:active {color: hsl(206.1, 79.3%, 52.7%)}
</style>
