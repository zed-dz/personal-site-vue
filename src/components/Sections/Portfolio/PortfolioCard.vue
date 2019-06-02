<template>
  <div class="bcard">
    <!-- <div class="exp-card-title">{{portfolio.title}}</div>
    <div class="exp-card-position">{{portfolio.position}}</div>
    <div class="exp-card-description">{{portfolio.description}}</div>
    <div class="exp-card-projects" v-if="portfolio.projects != []">
      <ul class="projects">
        <li v-for="(proj,index) in portfolio.projects" :key="index">
          <strong>{{proj.name}}</strong>
          {{proj.description}}
        </li>
      </ul>
    </div>
    <div class="exp-card-technologies" v-if="portfolio.technologies">
      <strong>Technologies:</strong> &nbsp;
      <span v-for="(technology, index) in portfolio.technologies" :key="index">
        <i v-bind:class="technology.icon"></i>
      </span>
       
    </div>-->

    <!-- <div class="bcard"> -->
    <div class="card__side card__side--front">
      <img v-bind:src="portfolio.image">
    </div>

    <div class="card__side card__side--back">
      <div class="portfolio__title">{{portfolio.title}}</div>
      <div class="portfolio__subtitle">{{portfolio.position}}</div>
      <div class="job__subtitle" style="font-size: 1rem;">{{portfolio.description}}</div>
      <div class="exp-card-technologies" v-if="portfolio.technologies">
        <strong>Technologies:</strong> &nbsp;
        <span v-for="(technology, index) in portfolio.technologies">
          <i v-bind:class="technology.icon"></i> ({{technology.name}})
        </span>
        <br>
        <span v-for="(l, index) in portfolio.links" :key="index">
          <a v-bind:href="l.link" class="btn btn-black" target="_blank">{{l.name}}</a>
        </span>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    portfolio: {
      title: String,
      image: String,
      position: String,
      description: String,
      links: {
        name: String,
        link: String
      },
      technologies: {
        name: String,
        icon: String
      }
    }
  }
};
</script>

<style scoped>
.experience-card {
  width: 30rem;
  margin: 0.5rem;
  padding: 1rem;
  font-size: 1.1rem;
  text-align: left;
  text-justify: center;
  border-top: 5px solid #f39c12;
  background-color: #fff;
  box-shadow: 0 0.2rem 0.5rem #555;
  color: #333;
}


.bcard {
  -webkit-perspective: 150rem;
  perspective: 150rem;
  position: relative;
  height: 15rem;
  width: 25rem;
}

.portfolio__title {
  font-size: 1.6rem;
  font-weight: bold;
}

.portfolio__subtitle {
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #f39c12;
  font-weight: bold;
}

.card__side {
  -webkit-transition: all 0.8s ease;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  width: 25rem;
  height: 15rem;
  font-size: 1.1rem;
  text-align: left;
  text-justify: center;
  border-top: 5px solid #f39c12;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  color: #333;
   
}

.card__side img {
  width: inherit;
  height: inherit;
}

.card__side--back {
  background-color: white;
  color: #333;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  width: inherit;
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  height: inherit;
  padding: .5rem;
}

.bcard:hover .card__side--front {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.bcard:hover .card__side--back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.exp-card-title {
  font-weight: bold;
  color: #333;
}

.exp-card-position,
.exp-card-from {
  color: #f39c12;
}

.projects {
  list-style: none;
}

.btn-black {
  color: #333;
  border: 2px solid #333;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: transparent;
}

.btn-black:hover {
  color: #fff;
  border: 2px solid rgb(136, 132, 176);
  background-color: rgb(136, 132, 176);
}

@media only screen and (max-width: 726px) {
  .bcard {
    height: 15rem;
    width: 20rem;
  }

  .card__side {
    width: 20rem;
  }
}
</style>
