<template>
  <div class="home">
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
