import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import IconsPlugin from "bootstrap-vue/dist/bootstrap-vue-icons.esm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import VueMeta from "vue-meta";
import VueCountdown from "@chenfengyuan/vue-countdown";
import "./app.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMeta);
Vue.component(VueCountdown.name, VueCountdown);

new Vue({ router, render: (h) => h(App) }).$mount("#app");
