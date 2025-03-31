import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainApp",
      component: () => import("./pages/MainApp.vue"),
    },

    //Upcoming Events
    {
      path: "/upcoming-event",
      name: "UpcomingEvent",
      component: () =>
        import("./pages/upcoming-events/upcoming-event-page/UpcomingEvent.vue"),
    },

    //Past Events
    {
      path: "/past-events/2025",
      name: "2025",
      component: () => import("./pages/past-events/past-event-page/2025.vue"),
    },
    {
      path: "/past-events/2024",
      name: "2024",
      component: () => import("./pages/past-events/past-event-page/2024.vue"),
    },
    {
      path: "/past-events/2023",
      name: "2023",
      component: () => import("./pages/past-events/past-event-page/2023.vue"),
    },
    {
      path: "/past-events/2022",
      name: "2022",
      component: () => import("./pages/past-events/past-event-page/2022.vue"),
    },

    //DJs
    {
      path: "/djs/DJ-TK",
      name: "DJ TK",
      component: () => import("./pages/djs/DJ-TK.vue"),
    },
    {
      path: "/djs/DJ-AnhQ",
      name: "DJ AnhQ",
      component: () => import("./pages/djs/DJ-AnhQ.vue"),
    },
  ],
});

export default router;
