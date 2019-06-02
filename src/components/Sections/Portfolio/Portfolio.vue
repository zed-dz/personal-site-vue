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
              "name": "Github", "link": ""
            }
          ],
          technologies: [{
            name: "Vue.js", 
            icon: "fab fa-vuejs"
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
        } ,
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