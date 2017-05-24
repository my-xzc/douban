import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import hot from '@/components/hot/hot'
import comingsoon from '@/components/comingsoon/comingsoon'
import top250 from '@/components/top250/top250'
import usbox from '@/components/usbox/usbox'
import detail from '@/components/detail/detail'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/hot/:id',
      name: 'hot',
      component:hot
    },
    {
      path:'/top250',
      name: 'top250',
      component:top250
    },
    {
      path:'/comingsoon',
      name: 'comingsoon',
      component:comingsoon
    },
    {
      path:'/usbox',
      name: 'usbox',
      component:usbox
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
    }
})
