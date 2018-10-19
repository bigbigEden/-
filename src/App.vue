<template>
  <div id="app">
    <header-nav :routerLink = 'routerLink'></header-nav>
    <router-view/>
  </div>
</template>

<script>
import headerNav from '@/components/headerNav'
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
  name: 'App',
  components:{
    'header-nav':headerNav,
  }
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
