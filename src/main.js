import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD0G1NReGDdpAuDPvZl64OaA5YGTCKEvek'
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
