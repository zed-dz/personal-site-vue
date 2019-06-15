<template>
  <div class="skills">
    <SkillsCoding />
    <hr>
    <SkillsTools />
    <hr>
    <SkillsCourses />
    <hr>
    <SkillsArticles />
  </div>
</template>

<script>

import SkillsCoding from "./SkillsCoding.vue";
import SkillsCourses from "./SkillsCourses.vue";
import SkillsTools from "./SkillsTools.vue";
import SkillsArticles from "./SkillsArticles.vue";

export default {
  name: "Skills",
  components: {
    SkillsCoding,
    SkillsCourses, 
    SkillsTools,
    SkillsArticles
  }
};
</script>

<style scoped>
.page-title {
  margin: 1rem 0;
  text-align: left;
  font-size: 30px;
}

.border {
  width: 55px;
  height: 8px;
  background: #f39c12;
  border-radius: 20px;
  margin-top: 8px;
}

.skill-section {
  text-align: left;
}

a {
  color:#f39c12;
}
</style>