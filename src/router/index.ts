import { createRouter, createWebHashHistory } from 'vue-router';
import Other from '@/pages/Other.vue';

const About = { template: '<h1>About</h1>' };

const routes = [
  {
    path: '/',
    component: import('@/pages/Index.vue'),
  },
  { path: '/about', component: About },
  { path: '/other', component: Other },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
