<template>
  <div class="skills">
    <section>
      <div class="page-title">
        <h2>Articles I wrote</h2>
        <div class="border"></div>
      </div>

      <div class="skill-section">
    
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
            {
              icon: "fab fa-medium",
              link:
                "https://dev.to/ale3oula/the-quite-nice-and-fairly-accurate-introduction-to-javascript-primitive-data-types-e99"
            }
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
  align-items: center;
  flex-wrap: wrap;
}

.skill-section {
  text-align: left;
}

a {
  color: #f39c12;
}

.fab {
  font-size: 1.6rem;
}

.html5 {
  color: #f16529;
}
.css3 {
  color: #0e57a7;
}

.angular {
  color: #b52e31;
}

.vue {
  color: #42b883;
}

.bootstrap {
  color: #602c50;
}

.js {
  color: #f0db4f;
}

.node {
  color: #68a063;
}
</style>