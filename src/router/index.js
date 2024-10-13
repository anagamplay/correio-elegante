import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import Apple from '../components/Apple.vue';
import Mail from '../components/Mail.vue';

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/apple', name: 'apple', component: Apple },
  { path: '/mail', name: 'mail', component: Mail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
