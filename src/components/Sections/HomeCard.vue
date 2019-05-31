<template>
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
</template>
<script>
export default {
  name: "HomeCard"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header__heading-box--card {
  width: 25rem;
  height: 30rem;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
}

.avatar {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 1rem solid #8496b0;
  margin: 2.5rem;
}

.rotate,
.e-mail {
  font-size: 1.4rem;
  color: #00b5cc;
  font-weight: bold;
}

.social-media {
  list-style-type: none;
}

.social-media li {
  font-family: FontAwesome;
  color: #8496b0;
  display: inline-block;
  margin-right: 2rem;
  font-size: 2rem;
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
