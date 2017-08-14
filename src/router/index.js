import Vue from 'vue'
import Router from 'vue-router'
import HotTest from '@/components/HotTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:resolve => require(['@/components/Home'], resolve)
    },{
      path: '/classify',
      name: 'classify',
      component: resolve => require(['@/components/Classify'], resolve)
    },{
      path: '/shopping',
      name: 'shopping',
      component: resolve => require(['@/components/Shopping'], resolve)
    },
    {
      path: '/my',
      name: 'my',
      component: resolve => require(['@/components/My'], resolve)
    },
    {
      path: '/hotTest',
      name: 'hotTest',
      component: HotTest,
    }
  ]   
})


