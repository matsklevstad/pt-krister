<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p><strong>Krister</strong></p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
}
h1 {
  font-size: 40px;
  color: black;
}

p {
  color: black;
  font-size: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
    margin-left: 5%;
    margin-right: 5%;
  }
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
  }
}
</style>
