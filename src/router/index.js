import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Duanzi from '@/views/duanzi/index'
import Picture from '@/views/tupian/index'
import Video from '@/views/shipin/index'
import Recommend from '@/views/faxian/index'
import Denglu from '@/views/denglu/index'
import Login from '@/views/doLogin/index'
import Resign from '@/views/resign/index'
import sign from '@/views/sign/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:'active',
  routes: [

    {
      path: '/',
      name: 'duanzi',
      component: Duanzi,
      meta: { keepAlive: true }
    },{
      path:'/picture',
      component: Picture
    },{
      path:'/video',
      component: Video
    },{
      path:'/explore',
      component: Recommend
    },{
      path:'/home',
      component: Denglu, 
    },{
      path:'/home/login',
      component: Login, 
    },{
      path:'/home/resign',
      component: Resign, 
    },{
      path:'/home/sign',
      component: sign ,
    }
    
  ]
})
