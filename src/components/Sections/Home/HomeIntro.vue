<template>
  <div class="header__heading-box--about">
          <div class="header__post--text">
            <h4>Summary</h4>
            I am a Frontend Engineer with experience building software and web applications.
            I enjoy creating simple and creative user interfaces using modern technologies.
            I’m excited about learning new skills as well as improving my current.
            I graduated with a M.Sc. in Information Systems and HCI from
            <a href="https://www.csd.uoc.gr/">University of Crete</a>.
            I'm currently working as a UX Engineer in
            <a href="https://www.ubitech.eu/">UBITECH</a>.
          </div>
          <div class="header_buttons">
            <router-link class="btn btn-seemore" to="/portfolio">Let's see some work!</router-link>
            <a href="./cv.pdf" class="btn btn-cv" target="_blank">One page CV</a>
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
  .header__post--text {
    width: 95%;
    margin: .5rem;
    padding: 1rem;
    font-size: 1.1rem;
    text-align: left;
    text-justify: center;
    border-top: 5px solid #f39c12;
    background-color: rgba(0,0,0,0.6);
    color: #fff;
  }
  
  .btn-seemore {
    background-color: #fff;
    border: 2px solid #f39c12;
    
  }
  
  .btn-cv {
    background-color: #f39c12;
    border: 2px solid #f39c12;
    color: #fff;
  }
  
  .btn-portfolio:hover {
    background-color: #8496b0;
    color: #fff;
  }
  
  .btn-seemore:hover {
    background-color: #f39c12;
    color:rgb(136, 132, 176);
  }
  
  .btn-cv:hover {
    background-color: #fff;
    color: #8496b0;
  }
  
   a {
    color: #f39c12 ;
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
      justify-content: flex-start;
      margin: 1rem .5rem;
  }

   @media only screen and (max-width: 600px) {
    .header_buttons {
      flex-direction: column;
  }
  }
  
</style>
