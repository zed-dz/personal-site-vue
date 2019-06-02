<template>
  <div class="home-card">
    <HomeCardTitle/>
    <hr>
    <HomeCardDescription />
  </div>
</template>
<script>

import HomeCardTitle from "./HomeCardTitle.vue";
import HomeCardDescription from "./HomeCardDescription.vue";

export default {
  name: "HomeCard",
  components: {
    HomeCardTitle,
    HomeCardDescription
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home-card {
  padding: 1rem;
}
</style>
