import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import classify from './modules/classify'
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    home,
    classify
  },
  state: {
    gCount: 0
  }
})

export default store