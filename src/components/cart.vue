<template>
<div class="container">
        <div class="bgyellow">
        </div>
        <div class="cart mr">
            <div class="top">
                <img src="app/assets/nike.png" alt="">
            </div>
            <div class="title">
                <h3>Your Products</h3>
            </div>
            <div class="body" id="products">
              <div class="item" v-for="(item,index) in datas" :key="index">
                  <div class="image"  :style="{ 'background-color': item.color }">
                      <img :src="item.image" alt="">
                  </div>

                  <div class="name">{{item.name}}</div>
                  <div class="descreption">
                  {{item.description}}
                  </div>
                  <div class="bottom" id="{{item.id}}">
                      <div class="price">{{item.price}}</div>
                      <div>
                      <div  v-if="item.isActive" class="btncheck" ><i class="fas fa-check"></i></div>
                      <div  v-else class="btn"><button v-on:click="addcart(index,item.id)" >Add to cart</button></div>
                      </div>
                  </div>
            </div>
            </div>
        </div>
        <div class="cart">
            <div class="top">
                <img src="app/assets/nike.png" alt="">
            </div>
            <div class="title">
                <h3>Your Cart <span id="dola">$</span><span id="total"></span>
                </h3>
            </div>
            <p id="emty">Hết tiền rùi à :></p>
            <div class="body" id="cart">
              <div class="cart-item" id="anima${count}" v-for="(item,index) in cart" :key="index">
                <div class="circle " :style="{ 'background-color': item.color }">
                    <img :src="item.image" alt="">
                </div>
                <div class="right">
                    <div class="name" data-aos="fade-left">
                          {{item.name}} 
                    </div>
                    <div class="price">
                        <span  id="price${count}">{{item.price}}</span>
                    </div>
                    <div class="count">
                        <div class="btndown" @click="reduction(index)">-</div>
                        <div class="number" >{{item.quanity}}</div>
                        <div class="btnup" @click="increase(index)">+</div>
                        <div class="delete" @click="removeItem(index)"><i class="fa fa-trash-o"></i></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'cart',
  props: {
    msg: String
  }, 
  data(){
   return {
     item : [],
     datas :[],
     cart: [],
     count:1,
     updateQuanity : [],
   }
 },
 created() {
    axios.get('http://localhost:3000/shoes').then(response => (this.datas = response.data))
        if (!localStorage.getItem('cart')){
            this.cart = []
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }else {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
 },
 methods : {
   addcart(index,id){
    // this.item = await axios.get('http://localhost:3000/shoes/'+id)
       axios.get('http://localhost:3000/shoes/'+id).then(response => {response.data
        this.item = response.data;
            this.cart.push(this.item); 
            this.cart[this.cart.length - 1].quanity = 1;
            localStorage.setItem('cart', JSON.stringify(this.cart));
     })
     this.datas[index].isActive = true;
    },  
    removeItem(index){
      this.cart.splice(index,1)
      localStorage.setItem('cart',JSON.stringify(this.cart));
    },
    reduction(index){
        if(this.cart[index].quanity == 1){
            return
        }else{
            this.cart[index].quanity-=1
        }
    },
    increase(index){
        this.item = this.cart[index];
        this.item.quanity +=1;
    }  
 }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
.container {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
}

body {
    font-family: Rubik, sans-serif;
}

@keyframes song {
    from {
        transform: translateX(1) translateZ(0) scaleY(1)
    }
    to {
        transform: translateX(-20%) translateZ(0) scaleY(1)
    }
}
.bgyellow {
    width: 300%;
    background-color: #f6c90e;
    height: 100%;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    position: fixed;
    z-index: -1;
    transform: translateX(-50%) skewY(-8deg);
    animation: song 8s ease-in-out infinite alternate;
}

.mr {
    margin-right: 5%;
}

.cart {
    position: relative;
    width: 360px;
    float: left;
    height: 600px;
    border: none;
    border-radius: 30px;
    box-sizing: border-box;
    box-shadow: 0 5px 8px rgb(87, 85, 85);
    overflow: hidden;
    background-color: #fff;
    margin-top: 50px;
}

.cart .top {
    position: relative;
    margin: 12px 0;
    width: 100%;
    float: left;
}

.cart .title {
    font-size: 20px;
    font-weight: 900;
    margin-top: 60px;
    margin-left: 35px;
    position: relative;
    font-family: 'Rubik', sans-serif;
}

.cart .top img {
    left: 30px;
    width: 50px;
    display: block;
    position: absolute;
}
.cart::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: #f6c90e;
    top: -20%;
    left: -50%;
    z-index: 0;
}

.body {
    height: calc(100% - 100px);
    position: relative;
    overflow-y: scroll;
}

.body::-webkit-scrollbar {
    display: none;
}

.body .item {
    width: 85%;
    margin: 0 auto;
}

.item .image {
    border-radius: 30px;
    height: 380px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: #e1e7ed;
}

.item .image img {
    width: 100%;
    transform: rotate(-24deg);
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, .2))
}

.item .name {
    font-size: 20px;
    font-weight: 500;
    margin: 26px 0 20px;
    line-height: 1.5;
    color: black;
}

.descreption {
    font-size: 13px;
    color: #777;
    line-height: 1.8;
    margin-bottom: 20px;
}

.item .price {
    font-size: 18px;
    font-weight: bold;
}

.bottom {
    width: 100%;
    margin-bottom: 50px;
}

.bottom .price {
    width: 50%;
    float: left;
    margin-top: 10px;
}

.bottom .btn button {
    padding: 15px 25px 15px 25px;
    border: none;
    border-radius: 35px;
    margin-left: 20px;
    background-color: #f6c90e;
    color: black;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}

.bottom .btn button:hover {
    box-shadow: 0 2px 4px rgb(141, 140, 140);
    background-color: #f6c90e;
}

#dola {
    margin-left: 85px;
}

.btncheck {
    border: none;
    border-radius: 100%;
    margin-left: 250px;
    background-color: #f6c90e;
    color: black;
    font-size: 18px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    text-align: center;
}

.btncheck i {
    margin-top: 16px;
}


/* @keyframes addcartname {
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
} */

@keyframes addcart {
    from {
        transform: scale(0)
    }
    to {
        transform: scaleY(1)
    }
}

.cart-item {
    width: 85%;
    margin: 0 auto;
    height: 100px;
    margin-bottom: 50px;
}

.cart-item .circle {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background-color: blue;
    float: left;
    /* animation: addcart 0.5s ease-in; */
}

.cart-item .circle img {
    width: 150%;
    transform: rotate(-28deg) translateY(-40px);
    filter: drop-shadow(0 30px 20px rgba(0, 0, 0, .2));
    margin-left: -8px;
    margin-top: -10px;
}

.cart-item .right {
    margin-left: 120px;
}

.cart-item .right .name {
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 10px;
    position: relative;
    /* animation: addcart 0.5s ease-in-out; */
}

.cart-item .price {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    /* animation: addcart 0.5s ease-in-out; */
}

@keyframes deletecart {
    from {
        transform: scale(1)
    }
    to {
        transform: scale(0)
    }
}


/* #cart {
    animation: deletecart 4s ease-in-out;
} */

.btndown,
.btnup {
    cursor: pointer;
    width: 28px;
    height: 28px;
    line-height: 28px;
    border-radius: 100%;
    background-color: #eee;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    float: left;
    user-select: none;
    /* animation: addcart 0.5s ease-in-out; */
}

.btndown:hover,
.btnup:hover {
    background-color: rgb(202, 199, 199);
}

.number {
    font-size: 14px;
    margin: 6px 8px;
    width: 20px;
    text-align: center;
    float: left;
    user-select: none;
    /* animation: addcart 0.5s ease-in-out; */
}

.count {
    width: 100%;
}

.delete {
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all .25s ease;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6c90e;
    user-select: none;
    float: right;
    /* animation: addcart 0.5s ease-in-out; */
}

#emty {
    display: none;
    z-index: 99999;
    position: relative;
    top: 100px;
    left: 140px;
    display: none;
}

@media only screen and (max-width: 850px) {
    body {
        text-align: center;
        display: inline-block;
        width: 100%;
    }
    .container {
        width: 90%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .mr {
        margin-right: 0;
    }
    #emty {
        margin-right: 300px;
    }
}

@media only screen and (max-width: 450px) {
    body {
        text-align: center;
        display: inline-block;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 100%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cart {
        width: 100%;
    }
    .mr {
        margin-right: 0;
    }
    #emty {
        margin-right: 300px;
    }
}
</style>
