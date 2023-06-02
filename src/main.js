import Vue from 'vue'
import App from './App.vue'

import VueCountdown from '@chenfengyuan/vue-countdown'
import VueMeta from 'vue-meta'
import router from './router'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './app.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueMeta)
Vue.config.productionTip = false
Vue.component(VueCountdown.name, VueCountdown)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
