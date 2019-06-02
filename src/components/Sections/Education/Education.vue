<template>
    <div class="education">
     <div class="page-title">
        <h2>Education</h2>
        <div class="border"></div>
      </div>

      <section>
        <template v-for="(work, index) in works">
        <EducationCard  :work="work" :key="index" />
      </template>
          
      </section>
    
</div>
</template>

<script>

import EducationCard from './EducationCard.vue'

export default {
  name: "Education",
  components: {
    EducationCard
  },
  data() {
    return {
      works: [
        {
          title: "University of Crete", 
          image: "http://pre-tect.space.noa.gr/media/logos/University-of-Crete-logo.gif",
          position: "Master's Degree, Information Systems and Human Computer Interaction", 
          from:  new Date(2016, 1, 20), 
          to: new Date(2018, 10, 20),
          description: "Coursework included Introduction and advanced topics on HCI, Information Retrieval, DBMS, BPMS and Knowledge Representation and Reasoning. Teaching Assistant in Introduction on HCI (Spring 2018),Modern Topics on HCI (Winter 2017) and Data Structures (2016-2017).", 
          thesis: "UInify: A Designer Studio for creating UI Mashups for Ambient Intelligence Environments",
          thesisAdvisor: "Constantine Stephanidis"
        }, 

      {
          title: "University of Crete", 
          image: "http://pre-tect.space.noa.gr/media/logos/University-of-Crete-logo.gif",
          position: "Bachelor's Degree, Computer Science", 
          from:  new Date(2011, 8, 20), 
          to: new Date(2016, 1, 20),
          description: "Coursework included HCI, Web programming, Data Structures, Compilers, Algorithms and Complexity and more. Volunteered as a TA in Computer Organisation and Introduction to C programming.",
          thesis: "Requirements analysis and development of a conceptual model and an information system for food traceability. (Implementation in SQL & RDF)",
          thesisAdvisor: "Dimitris Plexousakis, Irini Fundulaki"
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