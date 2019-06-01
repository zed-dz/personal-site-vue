<template>
  <div class="skills">
    <section>
      <div class="page-title">
        <h2>Frontend coding</h2>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        My main responsibility is the front-end development of awesome web and mobile applications.
        I enjoy creating simple, clean and creative user interfaces using the latest web technologies.
        I specialize in JavaScript and have professional experience working with Angular 2+.
        <br>Some skills that I acquired through my academic and professional (until now!) career are:
        <br>
        <br>
        <strong>Coding:</strong>
        <span v-for="(skill, index) in codingSkills" :key="index">
          &nbsp;&nbsp;&bull;&nbsp;
          <a v-bind:href="skill.link">{{skill.name}}</a>
        </span>
      </div>
    </section>
    <hr>
    <section>
      <div class="page-title">
        <h2>What I Use?</h2>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        A list of all the tools I use:
        <br>
        <br>
        <strong>Coding tools:</strong>
        <span v-for="(skill, idc) in codeTools">
          &nbsp;&nbsp;&bull;&nbsp;
          <a v-bind:href="skill.link">{{skill.name}}</a>
        </span>
        <br>
        <strong>Design tools:</strong>
        <span v-for="(skill, idd) in designTools" >
          &nbsp;&nbsp;&bull;&nbsp;
          <a v-bind:href="skill.link">{{skill.name}}</a>
        </span>
        <br>
        <strong>OS:</strong>
        <span v-for="(skill, idx) in OS">
          &nbsp;&nbsp;&bull;&nbsp;
          <a v-bind:href="skill.link">{{skill.name}}</a>
        </span>
        <br>
      </div>
    </section>
    <hr>
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
          <li v-for="(skill, index) in favoriteCourses">
            <a v-bind:href="skill.link">{{skill.name}}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      codingSkills: [
        {
          name: "HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        },
        {
          name: "CSS3",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
        },
        { name: "Angular 2+", link: "https://angular.io/" },
        { name: "Vue.js", link: "https://vuejs.org/" },
        { name: "Bootstrap 4", link: "https://getbootstrap.com/" },
        { name: "JavaScript (ES6)", link: "https://es6.io/" },
        { name: "TypeScript", link: "https://www.typescriptlang.org/" },
        { name: "Node.js", link: "https://nodejs.org/en/" }
      ],
      codeTools: [
        { name: "Visual Studio Code", link: "https://code.visualstudio.com/" },
        { name: "Intellij", link: "https://www.jetbrains.com/idea/" },
        { name: "Notepad++", link: "https://notepad-plus-plus.org/" }
      ],
      designTools: [
        { name: "Figma", link: "https://www.figma.com/" },
        { name: "Adobe Suite", link: "https://www.adobe.com" }
      ],
      OS: [{ name: "Windows" }, { name: "macOS" }],
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
  background: #ff6583;
  border-radius: 20px;
  margin-top: 8px;
}

.skill-section {
  text-align: left;
}
</style>