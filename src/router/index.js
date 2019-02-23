import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from '@/pages/Home'
import Commodity from '@/pages/Commodity'
import Details from '@/pages/Details'
import Shopping from '@/pages/Shopping'
import Sign from '@/pages/Sign'

Vue.use(Router)


let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },{
      path: '/commodity/:id',
      name: 'Commodity',
      component: Commodity,
    },{
      path: '/details/:id',
      name: 'Details',
      component: Details,
    },{
      path: '/shopping/:id',
      name: 'Shopping',
      component: Shopping,
    },{
      path: '/sign',
      name: 'Sign',
      component: Sign,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})


export default router


