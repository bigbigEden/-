import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import upload from '@/pages/upload/upload'//后台上传
import page from '@/pages/page/page'     //详情页
import about from '@/pages/about/about' //关于我
import test from '@/pages/test' 
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
    },
    {
      path:'/page',
      name:'page',
      component:page
    },
    {
      path:'/aboutMe',
      name:'about',
      component:about
    },
    {
      path:'/test',
      name:'test',
      component:test,
    }
  ]
})
