import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

import App from './App.vue'
import Home from './views/Home.vue'
import Lost from './views/Lost.vue'

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: Lost
    },
  ]
})

createApp(App).use(router).mount('#app')