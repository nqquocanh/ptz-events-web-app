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

    //Upcoming Events
        {
      path: '/upcoming-event-2',
      name: 'UpcomingEvent2',
      component: () => import('./components/upcoming-events/upcoming-events-items/UpcomingEvent2.vue')
    },

    //Past Events
    {
      path: '/past-events/2023',
      name: '2023',
      component: () => import('./components/past-events/past-events-items/2023.vue'),
    },
        {
      path: '/past-events/2022',
      name: '2022',
      component: () => import('./components/past-events/past-events-items/2022.vue'),
    },
  ]
})

export default router