import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeView.vue';
import ProjectsPage from '../views/Projects.vue';
import AboutPage from '../views/About.vue';
import ContactPage from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/projects', name: 'Projects', component: ProjectsPage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;