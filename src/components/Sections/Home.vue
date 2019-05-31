<template>

  <div class="home">

      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        
    <div class="header__heading-box">
      <div class="header__heading--box row">
        <div class="header__heading-box--card">
          <img src="../../assets/2.jpg" alt="Avatar image" class="avatar">
          <br>
          <span class="rotate">Front end Engineer</span>
          <hr>
          <div>
            <ul class="social-media">
              <li>
                <a href="https://www.linkedin.com/in/alexandra-barka-57075361/">
                  <span class="fab fa-linkedin"></span>
                </a>
              </li>
              <li>
                <a href="https://github.com/aLe3ouLa">
                  <span class="fab fa-github"></span>
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/aLe3andra">
                  <span class="fab fa-dribbble"></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/aLe3ouLa">
                  <span class="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ale3oula/">
                  <span class="fab fa-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
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
            <a href="#portfolio" class="btn btn-seemore">Ok! Let's see some work</a>
            <a href="./cv.pdf" class="btn btn-cv" target="_blank">1-page CV</a>
            <a href="./cv_extended.pdf" class="btn btn-cv" target="_blank">Extended CV</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Home.css"  scoped></style>
