import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import DetailPages from '@/pages/detailPages'
import Index from '@/pages/index'
import Denglu from '@/pages/dengluye'
// import Chanpinye from '@/pages/chanpinye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detailPages',
      name: 'detailPages',
      component: DetailPages
    },
    {
      path: '/dengluye',
      name: 'dengluye',
      component: Denglu
    }
  ]
})
