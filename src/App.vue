<template>
  <div id="app">
    <router-view :routerLink = 'routerLink'/>
  </div>
</template>

<script>
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
