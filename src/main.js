import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import store from './store'

Vue.use(axios);
console.log('commonApi', axios)
Vue.prototype.$axios = axios.commonApi;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
