import Vue from 'vue'
import App from './App.vue'

import VueCountdown from '@chenfengyuan/vue-countdown'
import VueMeta from 'vue-meta'
import router from './router'
import './app.scss'

Vue.use(VueMeta)
Vue.config.productionTip = false
Vue.component(VueCountdown.name, VueCountdown)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
