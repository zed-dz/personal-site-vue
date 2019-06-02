<template>
  <div class="skills">
    <section>
      <div class="page-title">
        <h2>How I learn?</h2>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        One of main traits of most developers are continuously leveling up their skills. Online courses, great articles and guides are only some ways.
        <br>There are some of my favorite courses:
        <br>
        <br>
        <ul class="container-fluid">
          <li v-for="(skill, index) in favoriteCourses" :key="index">
            <a v-bind:href="skill.link">{{skill.name}}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "SkillsCourses",
  data() {
    return {
      favoriteCourses: [
        {
          name: "Angular 8 (formerly Angular 2) - The Complete Guide",
          link: "https://www.udemy.com/the-complete-guide-to-angular-2/"
        },
        {
          name: "Vue JS Essentials with Vuex and Vue Router",
          link: "https://www.udemy.com/vue-js-course/"
        }
      ]
    };
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