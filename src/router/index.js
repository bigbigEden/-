import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import upload from '@/pages/upload/upload'//后台上传
import test from '@/pages/test/test'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/upload',
    	name:'upload',
    	component:upload
    },{
      path:'/test',
      name:'test',
      component:test
    }
  ]
})
