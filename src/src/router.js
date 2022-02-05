import { createRouter, createWebHistory } from 'vue-router';

import AstroList from './components/astros/AstroList.vue';
import AstroPage from './pages/AstroPage.vue';
import NewAstro from './pages/NewAstro.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/astronauts', component: AstroList },

    {
      path: '/astronauts/:id',
      props: true,
      component: AstroPage
    },
    {
      path: '/astronauts/new-astro',
      component: NewAstro
    }
  ]
});

export default router;
