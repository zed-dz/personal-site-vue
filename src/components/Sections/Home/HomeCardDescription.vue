<template>
  <div class="card-description">
    <ul class="description">
      <li>
        <img src="../../../assets/desc_code.png" width="100" alt>
        Frontend Engineer
      </li>
      <li>
        <img src="../../../assets/desc_cafe.png" width="100" alt>Coffee Junkie
      </li>
      <li>
        <img src="../../../assets/desc_travel.png" width="100" alt>Travel Lover
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeCardDescription"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  list-style: none;
}

.description li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
