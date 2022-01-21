<template>
<img src="./assets/logo.png" alt="">
  <div id="nav">
   <router-link to="/">  <a href="">List and cart</a></router-link> |
   <a href=""> <router-link to="/about">Add Product</router-link></a>
  </div>
  <router-view/>
</template>
// <script>
export default  {
  name: 'App',
}
</script>

<style>
img {
  width: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
