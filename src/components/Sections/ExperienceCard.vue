<template>
  <div class="experience-card">
      <div class="exp-card-title">{{work.title}}</div>
    <div class="exp-card-position">{{work.position}}</div>
    <div class="exp-card-from">{{work.from | moment("MMMM YYYY")}} - {{work.to | moment("MMMM YYYY")}} ({{work.from | moment("from", work.to, true)}})</div>
    <div class="exp-card-description">{{work.description}}</div>
    <div class="exp-card-projects" v-if="work.projects != []">
        <ul class="projects">
            <li v-for="proj in work.projects" >
               <strong>{{proj.name}}</strong> {{proj.description}} </li>
        </ul>
    </div>
    <div class="exp-card-technologies"><strong>Technologies: </strong>{{work.technologies}}</div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    work: {
      title: String,
      position: String,
      from: Date,
      to: Date,
      description: String,
      projects: {
          name: String,
          description: String
      },
      technologies: String
    }
  }
};
</script>

<style scoped>
.experience-card {
   width: 95%;
    margin: .5rem;
    padding: 1rem;
    font-size: 1.1rem;
    text-align: left;
    text-justify: center;
    border-top: 5px solid #f39c12;
    background-color: rgba(0,0,0,0.1);
    color: #333;
}

.exp-card-title {
    font-weight: bold;
    color: #333;
}

.exp-card-position, .exp-card-from {
    color: #f39c12;
}

.projects {
    list-style: none;
}
</style>
