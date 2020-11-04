import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ForecastPage from '../views/ForecastPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/forecast/',
    name: 'ForecastPage',
    component: ForecastPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
