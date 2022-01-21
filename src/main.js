import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// new Vue({
//     el: '#app',
//     router,
//     component: { App },
//     template: '</App>',
// });

createApp(App).use(router).mount('#app')