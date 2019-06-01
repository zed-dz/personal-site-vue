<template>
<div class="contact">
     <div class="page-title">
        <h2>Contact</h2>
        <div class="border"></div>
      </div>
      
      <section>
          <h2>Want to get in touch?</h2>
          Find me on social media: 

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
      or send me an e-mail: <a href="barka.alexandra2@gmail.com">barka.alexandra2@gmail.com</a>
      </section>
</div>
   
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
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
  background: #ff6583;
  border-radius: 20px;
  margin-top: 8px;
}


.social-media {
    list-style-type: none;
  }
  
  .social-media li {
    font-family: FontAwesome;
    color: #8496b0;
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.8rem;
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