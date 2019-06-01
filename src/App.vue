<template>
  <div id="app" class="row">
    <Navigation class="col-xs-2"/>
    <router-view class="col"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation/Navigation.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld, 
    Navigation
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
