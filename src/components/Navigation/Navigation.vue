<template>
  <div class="navigation">
    <div class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container" >
        <div class="navbar-brandname">
            <router-link class="nav-brand" to="/">Alexandra Barka</router-link>
        </div>
        <!-- <router-link to="/" class="navbar-brand">Home</router-link> -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-col" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">About</router-link>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Navigation.css"  scoped></style>
