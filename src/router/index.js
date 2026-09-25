import { createRouter, createWebHistory } from 'vue-router';
import PetsView from '@/views/PetsView.vue';
import NovoPets from '@/views/NovoPets.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/pets',
      name: 'PetsView',
      component: PetsView

    },
    {
      path: '/pets/novo',
      name: 'NovoPets',
      component: NovoPets
    },
  ],
});



export default router;
