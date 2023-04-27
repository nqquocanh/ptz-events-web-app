import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainApp',
      component: () => import('./components/MainApp.vue')
    },
    {
      path: '/past-events',
      name: 'PastEvents',
      component: () => import('./components/past-events/PastEvents.vue')
    }
  ]
})

export default router