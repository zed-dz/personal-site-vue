<template>
  <div class="home-card">
    <h1 class="title" >
      <div class="bracket bracket-left" >/*</div>
      <div class="title-text">
        Helloo!
        <span>I'm</span>
        <span class="name" >{{name}}</span>
      </div>
      <div class="bracket bracket-right">*/</div>
    </h1>
    <hr>
    <div>
      <ul class="description">
        <li> <img src="../../../assets/desc_code.png" width="100" alt="">
          Frontend Engineer</li>
        <li><img src="../../../assets/desc_cafe.png" width="100"  alt="">Coffee Junkie</li>
        <li><img src="../../../assets/desc_travel.png" width="100"  alt="">Travel Lover</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeCard",
  data() {
    return {
      name: "Alexandra"
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home-card {
  width: 100%;
  padding: 1rem;
}
.title {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 1rem;
}

.bracket {
    font-size: 3rem;
    font-weight: 400;
}

.bracket-left {
    padding-right: 1rem;
}

.bracket-right {
    padding-left: 1rem;
}

.title-text {
    font-size: 3rem;
    /* padding-top: 18px; */
}

.name {
    background: #f39c12;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 7px;
}

.description {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
 font-weight: bold;
 list-style: none;
}

.description li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.description li:first-child {
  border-bottom: 3px solid #f39c12;
}

.description li:nth-child(2) {
  border-bottom: 3px solid #913d88;
}
.description li:nth-child(3) {
  border-bottom: 3px solid #66cc99;
}

.description li:hover {
  border-bottom: 3px solid pink;
}


</style>
