import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/base'
import '@/assets/js/jquery'
import '@/assets/js/clickShade'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
