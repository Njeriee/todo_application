import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/complete tasks',
    name: 'complete tasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "completetasks" */ '../views/CompleteTasks.vue')
  },
  {
    path: '/incomplete tasks',
    name: 'incomplete tasks',
    component: () => import(/* webpackChunkName: "incompletetasks" */ '../views/IncompleteTasks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
