<template>
  <div class="portfolio">
    <div class="page-title">
      <h2>Portfolio</h2>
      <div class="border"></div>
    </div>

    <section class="portfolio-cards">
      <div class="row">
        <template v-for="(portfolio, index) in portfolios" >
        <PortfolioCard :portfolio="portfolio" :key="index" />
      </template>
      </div>
      
    </section>
  </div>
</template>

<script>
import PortfolioCard from "./PortfolioCard.vue";

export default {
  name: "Portfolio",
  components: {
    PortfolioCard
  },
  data() {
    return {
      portfolios: [
        {
          title: "CV (2019)", 
          image: require("../../../assets/cv.png"),
          position: "Side Project", 
          description: "Design and Implement the current site", 
          links: [
            {
              "name": "Github", "link": "https://github.com/aLe3ouLa/personal-site-vue"
            }
          ],
          technologies: [{
            name: "Vue.js", 
            icon: "fab fa-vuejs"
          }]
        },
        {
          title: "Ticker", 
          image: require("../../../assets/ticker.png"),
          position: "Side Project", 
          description: "Development", 
          links: [
            {
              "name": "Github", "link": "https://github.com/aLe3ouLa/project-tickets"
            }
          ],
          technologies: [{
            name: "Angular", 
            icon: "fab fa-angular"
          }]
        },
        {
          title: "Weather App", 
          image: require("../../../assets/weather.png"),
          position: "Side Project", 
          description: "Development", 
          links: [
            {
              "name": "Github", "link": "https://github.com/aLe3ouLa/weather-app"
            }
          ],
          technologies: [{
            name: "HTML5", 
            icon: "fab fa-html5"
          },{
            name: "CSS3", 
            icon: "fab fa-css3"
          },{
            name: "JS", 
            icon: "fab fa-js"
          }]
        },
        {
          title: "ChildRescue (2019)", 
          image: require("../../../assets/childrescue.png"),
          position: "UBITECH Ltd.", 
          description: "Design high fidelity functional mockups", 
          links: [
            {
              "name": "Demonstrator", "link": "https://www.childrescue.eu/wp-content/uploads/2019/01/ChildRescue_D3.2-ChildRescue-Platform-and-Mobile-App-Early-Prototype_v1.0.pdf"
            }
          ],
          technologies: [{
            name: "Figma", 
            icon: "fab fa-figma"
          }]
        },
        {
          title: "UINIFY (2018)", 
          image: require("../../../assets/01_Dashboard.png"),
          position: "Master Thesis", 
          description: "Design and develop UInify full stack (MEAN) platform", 
          links: [
            {
              "name": "Presentation", "link": "./Presentation.pdf"
            },
            {
              "name": "Thesis", "link": "./uinify.pdf"
            }
          ],
          technologies: [{
            name: "Angular", 
            icon: "fab fa-angular"
          }, {
            name: "Node.js", 
            icon: "fab  fa-node-js"
          }, {
            name: "AdobeXD", 
            icon: "fab  fa-adobe"
          }]
        } ,
        {
          title: "Smart Home Controller (2017)", 
          image: require("../../../assets/smarthome.png"),
          position: "ICS-FORTH", 
          description: "Design high fidelity functional mockups", 
          links: [
            {
              "name": "Dribble", "link": "https://dribbble.com/shots/5927180-Smart-Home-Controller-Home-Page"
            },
            {
              "name": "Poster", "link": "https://womencourage.acm.org/wp-content/uploads/2017/07/womENcourage_2017_paper_23.pdf?189db0"
            }
          ],
          technologies: [{
            name: "AdobeXD", 
            icon: "fab fa-adobe"
          }]
        },
        {
          title: "Arkadi Monastery(2016)", 
          image: require("../../../assets/arkadi.png"),
          position: "ICS-FORTH", 
          description: "Redesign and co-develop features", 
          links: [
            {
              "name": "Play Store", "link": "https://play.google.com/store/apps/details?id=air.gr.forth.ami.arkadi.mobile"
            }
          ],
          technologies: [{
            name: "Actionscript", 
            icon: "fab fa-adobe"
          }]
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

.portfolio-cards div{
  margin: 1rem;
}

.border {
  width: 55px;
  height: 8px;
  background: #f39c12;
  border-radius: 20px;
  margin-top: 8px;
}
</style>