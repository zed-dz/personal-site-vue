<template>
  <div id="app">
    <NavigationMobile class="navigation-mobile"/>
    <div class="row">
      <Navigation class="col-xs-2 navigation-desktop"/>
      <router-view class="col"/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import NavigationMobile from "./components/Navigation/NavigationMobile.vue";

export default {
  name: "app",
  components: {
    Navigation,
    NavigationMobile
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation-mobile {
  display: none;
}


@media only screen and (max-width: 726px) {
  .navigation-mobile {
    display: block;
  }

  .navigation-desktop {
    display: none;
  }
}
</style>
