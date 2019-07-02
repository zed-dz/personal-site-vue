<template>
  <div class="navigation">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.0/css/all.css"
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
          <router-link class="nav-link" to="/education">Education</router-link>
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
<style scoped>
.router-link-active {
  font-weight: bold;
}

.wrapper {
  display: flex;
  /* width: 100%; */
  align-items: stretch;
}

#sidebar {
  min-width: 260px;
  max-width: 260px;
  min-height: 100vh;
  
  max-height: 100%;
  background-color: #202026;
  color: #f39c12;
}

.nav-link {
  color: #fff;
}

.nav-link:hover {
  color: #8496b0;
}

.social-media {
  list-style-type: none;
}

.social-media li {
  font-family: FontAwesome;
  color: #8496b0;
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.2rem;
}

.social-media li:last-child {
  margin-right: 0;
}

.social-media li a {
  color: #8496b0;
  text-decoration: none;
}

.fa-facebook:hover {
  color: #3b5998;
}

.fa-instagram:hover {
  color: #517fa4;
}

.fa-linkedin:hover {
  color: #0077b5;
}

.fa-github:hover {
  color: #bd081c;
}

.fa-dribbble:hover {
  color: #ea4c89;
}

</style>
