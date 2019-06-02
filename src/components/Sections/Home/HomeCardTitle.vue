<template>
    <h1 class="title" >
      <div class="bracket bracket-left" >/*</div>
      <div class="title-text">
        Helloo!
        <span>I'm</span>
        <span class="name" >{{name}}</span>
      </div>
      <div class="bracket bracket-right">*/</div>
    </h1>
</template>

<script>
export default {
  name: "HomeCardTitle",
  data() {
      return {
          name: "Alexandra"
      };
  }
};
</script>

<style scoped>

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
}

.name {
    background: #f39c12;
    color: #fff;
    padding: 0 10px;
    margin-left: 7px;
}

</style>
