<template>
  <div id="app">
    <router-view :routerLink = 'routerLink'/>
    <live2d></live2d>
  </div>
</template>

<script>
import store from '@/store/index'
import live2d from '@/views/common/live2d'  
export default {
  data(){
    return{
      routerLink:[{
        link:'/',
        name:'首页',
      },{
        link:'/Eden',
        name:'伊甸园',
      },{
        link:'/aboutMe',
        name:'关于我',
      }]    
    }
  },
  store,
  components:{
    'live2d':live2d,
  },
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
