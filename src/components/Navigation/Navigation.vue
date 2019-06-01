<template>
  <div class="wrapper">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
    <nav id="sidebar">
      <div class="sidebar-header">
        <router-link class="nav-link" to="/">
          <img src="../../assets/avatar.png" alt>
        </router-link>
        <h3>Alexandra Barka</h3>
      </div>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/skills">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/experience">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Navigation.css"  scoped></style>
