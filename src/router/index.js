import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'PetsView',
      component: () => import('../views/PetsView.vue'),

    },
    {
      path: '/AddPets/novo',
      name: 'AddPet',
      component: () => import('../views/AddPetView.vue'),
    },
  ],
});



export default router;
