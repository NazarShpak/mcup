import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '@/assets/styles/main.scss'
import '@/assets/styles/fonts.css'
import router from './router/index'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD0G1NReGDdpAuDPvZl64OaA5YGTCKEvek'
  },
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
