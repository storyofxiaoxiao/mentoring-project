import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/layout';

Vue.use(VueRouter);

export const constantRouterMap = [{
  path: '/',
  redirect: '/home',
}];
export const baseRouterMap = [{
  path: "/",
  name: 'home',
  component: Layout,
  meta: {
    icon: 'home',
  },
  children: [{
    path: 'home',
    component: () => import('@/views/home/index'),
    name: 'home',
    hidden: false,
  }]
}, {
  path: "/",
  name: 'tableList',
  component: Layout,
  meta: {
    icon: 'tableList',
  },
  children: [{
    path: 'tableList',
    component: () => import('@/views/tableList/index'),
    name: 'tableList',
    hidden: false,
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap.concat(baseRouterMap),
});

export default router;