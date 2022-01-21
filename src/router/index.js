import { createRouter, createWebHistory } from 'vue-router'
import cart from '../components/cart'
import addProduct from '../components/addProduct'
// import Home from '../views/Home'

const routes = [{
        path: '/',
        name: 'trangchu',
        component: cart
    },
    {
        path: '/about',
        name: 'About',
        component: addProduct
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    // {
    //     path: '/',
    //     name: 'home',
    //     component: Home
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router