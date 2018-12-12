import Vue from 'vue'
import Router from 'vue-router'
import Eden from '../views/Eden/router' //伊甸园
import home from '../views/home/router' //主页
import about from '../views/about/router' //个人介绍
import page from '../views/page/router'  //详细页面
import upload from '../views/upload/router' //上传页面
// import notFound from '../views/notFound/App.vue'
Vue.use(Router)

export default new Router({
  mode:'hash', 
  routes: [
    // {
    //   path:'*',
    //   component:notFound
    // },
    {
      path: '/',
      redirect:'/home',
    },
    ...home,
    ...Eden,
    ...about,
    ...page,
    ...upload,
  ],
})