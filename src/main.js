import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCountdown from '@chenfengyuan/vue-countdown'
import VueMeta from 'vue-meta'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSocialSharing)
Vue.use(VueMeta)
Vue.config.productionTip = false
Vue.component(VueCountdown.name, VueCountdown)

new Vue({
  render: h => h(App),
}).$mount('#app')
