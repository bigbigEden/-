// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
Vue.config.productionTip = false

//vue的全局资源filters
import global from './global'
Vue.use(global)
//全局接口
import api from './api'
Vue.use(api)

//自定义css
import '../static/css/reset.css'
import 'font-awesome/css/font-awesome.min.css' 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:global.router,
  components: { App },
  template: '<App/>'
})
