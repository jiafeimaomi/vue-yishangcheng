import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/classify',
      name: 'classify',
      component: Classify
    },{
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }

  ]
})
