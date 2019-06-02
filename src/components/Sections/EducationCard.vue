<template>
  <div class="experience-card">
    <div class="row">
      <div class="col">
        <img v-bind:src="work.image" alt width="80">
      </div>
      <div class="col-11">
        <div class="exp-card-title">{{work.title}}</div>
        <div class="exp-card-position">{{work.position}}</div>
        <div
          class="exp-card-from"
        >{{work.from | moment("MMMM YYYY")}} - {{work.to | moment("MMMM YYYY")}} ({{work.from | moment("from", work.to, true)}})</div>
      </div>
    </div>
    <hr>
    <div class="exp-card-description">{{work.description}}</div>
    <div class="exp-card-thesis">
      <div><strong>Thesis Supervisor(s):</strong> {{work.thesisAdvisor}}</div> 
       <div><strong>Thesis Topic:</strong> {{work.thesis}} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCard",
  props: {
    work: {
      title: String,
      image: String,
      position: String,
      from: Date,
      to: Date,
      description: String,
      thesis: String
    }
  }
};
</script>

<style scoped>
.experience-card {
  width: 95%;
  margin: 0.5rem;
  padding: 1rem;
  font-size: 1.1rem;
  text-align: left;
  text-justify: center;
  border-top: 5px solid #f39c12;
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
}

.exp-card-title {
  font-weight: bold;
  color: #333;
}

.exp-card-advisor {
    color: #333;
}

.exp-card-position {
  color: #333;
}

.exp-card-from {
  color: #f39c12;
  font-weight: bold;
  font-size: 0.9rem;
}

.exp-card-description {
    width: 90%;
    margin-bottom: .5rem;
}

.projects {
  list-style: none;
}
</style>
