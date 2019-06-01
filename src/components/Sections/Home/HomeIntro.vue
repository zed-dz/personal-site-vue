<template>
  <div class="header__heading-box--about">
          <span class="header__post--title">
            Heeeello! I'm Alexandra.
          </span>

          <div class="header__post--text">
            I am a Frontend Engineer with experience building software and web applications.
            I enjoy creating simple and creative user interfaces using modern technologies.
            I’m excited about learning new skills as well as improving my current.
            I graduated with a M.Sc. in Information Systems and HCI from
            <a href="https://www.csd.uoc.gr/">University of Crete</a>.
            I'm currently working as a UX Engineer in
            <a href="https://www.ubitech.eu/">UBITECH</a>.
          </div>
          <div class="header_buttons">
            <router-link class="btn btn-seemore" to="/portfolio">Ok! Let's see some work</router-link>
            <a href="./cv.pdf" class="btn btn-cv" target="_blank">1-page CV</a>
            <a href="./cv_extended.pdf" class="btn btn-cv" target="_blank">Extended CV</a>
          </div>
        </div>
</template>
<script>
export default {
  name: "HomeIntro"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .header__heading-box--about {
      display: flex;
      flex-direction: column;
      justify-content: center;
    flex: 0 55%;
    align-items:  flex-start;
    padding: .5rem;
  }
  
  .header__post--title {
    color: #00b5cc;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2em;
  }
  
  .header__post--text {
    color: white;
    margin: 1rem 0;
    font-size: 1.2rem;
    text-align: left;
    text-justify: center;
  }
  
  .btn-seemore {
    background-color: #8496b0;
    border: 2px solid #8496b0;
    color: #fff;
  }
  
  .btn-cv {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
  
  .btn-portfolio:hover {
    background-color: #8496b0;
    color: #fff;
  }
  
  .btn-seemore:hover {
    background-color: #fff;
    color:rgb(136, 132, 176);
  }
  
  .btn-cv:hover {
    background-color: #fff;
    color: #8496b0;
  }
  
   a {
    color: #00b5cc ;
    font-weight: bold;
  }

  .btn {
     padding: .5rem 1rem;
     font-weight: bold;
     font-size: 1.2rem;
     border-radius: 2px;
     margin-right: .2rem;
  }

  .header_buttons {
      display: flex;
  }

   @media only screen and (max-width: 600px) {
    .header_buttons {
      flex-direction: column;
  }
  }
  
</style>
