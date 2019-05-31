<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >

    <div class="header__heading--box">
      <HomeCard/>
      <HomeIntro/>
    </div>
  </div>
</template>
<script>
import HomeCard from "./HomeCard";
import HomeIntro from "./HomeIntro";

export default {
  name: "Home",
  components: {
    HomeCard,
    HomeIntro
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Home.css"  scoped></style>
