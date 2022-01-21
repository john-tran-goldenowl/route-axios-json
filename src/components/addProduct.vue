<template>
  <h1>ADD PRODUCT</h1>
  <input type="text" v-model="name" name="" id="" placeholder="Name of Product"><br><br>
  <input type="text" v-model="image" name="" id="" placeholder="Url image"><br><br>
  <input type="text" v-model="description" name="" id="" placeholder="Name of description"><br><br>
  <input type="text" v-model="price" name="" id="" description="price" placeholder="Price"><br><br>
  <span>Color Hex</span><input type="color" v-model="color" name="" id="" description="color"  placeholder="Hex Color"><br><br>
  <button @click="addProduct">
    Add product
  </button>
</template>

<script>
import axios from 'axios';
export default {
  name: 'addProduct',
  props: {
    msg: String
  },
   data(){
   return {
     product : [],
   
   }
 },
  methods: {
    addProduct(){
       this.product = {
        'name' : this.name,
         'image' : this.image,
         'description' :this.description,
         'price' : this.price,
         'color' : this.color
       }
       console.log(this.product)

       axios.post('http://localhost:3000/shoes', 
        this.product
       ).then(respone =>{
         if (respone) alert("Add successfully")   
       });
     
     

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
