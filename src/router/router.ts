import {createRouter, createWebHashHistory} from 'vue-router';

import Home from '@/pages/Home/Home.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
});

export default router;
