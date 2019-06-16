<template>
  <div class="navigation">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="navbar-brand">
        <router-link class="nav-link" to="/">
         <h3>Alexandra Barka</h3>
        </router-link>
      </div>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
  height: 100%;
  align-items: stretch;
}

.bg-dark {
  background-color: #202026 !important;
}

.nav-link {
  color: #fff !important;
}

.nav-link:hover {
  color: #8496b0;
}


</style>
