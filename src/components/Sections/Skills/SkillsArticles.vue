<template>
  <div class="skills">
    <section>
      <div class="page-title">
        <h2>Articles I wrote</h2>
        <div class="border"></div>
      </div>

      <div class="skill-section">
        I tried to write some articles to explain some front-end concepts! This gave me the opportunity to research more and understand better key programming concepts! 
        <div class="coding-skills">
          <div
            v-for="(article, index) in articles"
            :key="index"
          >
            {{article.name}} 
            <span v-for="a in article.l" style="margin-right: 1rem;">
              <a v-bind:href="[a.link]">
                <i v-bind:class="[a.icon]"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SkillsArticles",
  data() {
    return {
      articles: [
        {
          name: "The Quite Nice and Fairly Accurate Introduction to JavaScript Primitive Data Types",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/the-quite-nice-and-fairly-accurate-introduction-to-javascript-primitive-data-types-e99"
            },
          ]
        },
        {
          name: "The Quite Nice and Fairly Accurate Intro to JavaScript Objects (pt. 2)",
          l: [
            {
              icon: "fab fa-dev",
              link:
                "https://dev.to/ale3oula/the-quite-nice-and-fairly-accurate-intro-to-javascript-objects-pt-2-1aaf"
            },
          ]
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

.coding-skills {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

.skill-section {
  text-align: left;
}

a {
  color: #602c50;
}

.fab {
  font-size: 1.6rem;
}


</style>