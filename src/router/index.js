import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import about from '../views/about.vue';
import contactUs from '../views/contactUs.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contactUs
    },

  ]
})

export default router
