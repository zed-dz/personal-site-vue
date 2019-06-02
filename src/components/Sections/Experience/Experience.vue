<template>
    <div class="experience">
     <div class="page-title">
        <h2>Experience</h2>
        <div class="border"></div>
      </div>

      <section>
        <template v-for="(work, index) in works">
        <ExperienceCard  :work="work" :key="index" />
      </template>
          
      </section>
    
</div>
</template>

<script>

import ExperienceCard from './ExperienceCard.vue'

export default {
  name: "Experience",
  components: {
    ExperienceCard
  },
  data() {
    return {
      works: [
        {
          title: "UBITECH Ltd", 
          position: "UX engineer ", 
          from:  new Date(2018, 6, 6), 
          to: new Date(),
          description: "My role is to write front-end components in various languages (depending on the project) as well as design user interfaces for the company's projects. ", 
          projects: [],
          technologies: "Angular 2+, Vue.js, JavaScript, TypeScript, Thymeleaf, AngularJS, HTML5, CSS3"
        }, 

      {
          title: "Foundation for Research and Technology - (ICS - FORTH)", 
          position: "Undergraduate & Graduate Research Assistant - UI/UX engineer ", 
          from: new Date(2015, 6, 6), 
          to: new Date(2018, 6, 5),
          description: "Researcher and developer in Ambient Intelligent environments. Outcomes from my work in FORTH are:",
          projects: [{
            name: "UInify.", description: " Developed with MEAN (Mongo.DB, Express.js, Angular 6, Node.js) stack to build a full stack application which acted as a studio for composing flexible web applications in real-time and aggregate all the individual UIs of an intelligent environment by introducing new rich user interface compositions."
          },
          {
            name: "Beantable.", description: "Co-develop an augmented interactive table with multiple games for the Heraklion Public Library of Crete. Used C# and WPF to implement a launcher for the application and re-design various games (e.g. puzzle, classic memory games)."
          },
          {
            name: "Arkadi Monastery.", description: "Re-design and develop a mobile application for the Arkadi Museum in Rethimni. Used Actionscript and Adobe Flash Builder to implement a cross-platform application for both Android and iOS."
          },
          {
            name: "Info kiosk.", description: "Co-developed an info kiosk for the Archeological Museum of Crete, which provided information for the Minoan Culture. Developed in C# and WPF the Architecture section and some Utilities."
          }
          ],
          technologies: "Angular 2+, MEAN stack, WPF, C#, Actionscript, Typescript, Javacript, Node.js, HTML5, CSS3"
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
</style>