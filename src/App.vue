<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Index from '@/pages/index'



export default {
  data(){
    return {
      currentRoute:'/'
    }
  },
  watch:{
    '$route':function(to,from){
      this.currentRoute = to.path;
    }
  }
}
</script>

<style>
div,ul,li,a{
    padding: 0;
    margin: 0
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #ccc
  }
  *{
    margin: 0;
    padding: 0
  }
</style>
