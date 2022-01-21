<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <cart msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import cart from '@/components/cart.vue'

export default {
  name: 'Home',
  components: {
    cart
  }
}
</script>
