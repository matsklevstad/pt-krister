<template>
  <div class="wrapper">
    <div class="text">
      <h1>PERSONLIG TRENING LEDET AV EN EKSPERT! 🚀</h1>
      <p>
        Jeg hjelper motiverte mennesker mot en sterkere kropp og varig
        livsstilsendring. Med min ekspertise og personlige tilnærming skaper jeg
        skreddersydde trenings- og kostholdsplaner som passer dine unike behov
        og mål.
      </p>
      <button @click="scrollToNextSection">LES MER</button>
    </div>
    <div class="image-container">
      <img class="image" src="../assets/random_person.jpeg" alt="Krister" />
    </div>
  </div>
</template>

<script>
export default {
  name: "StartPage",
  // Your component's JavaScript logic goes here
  methods: {
    scrollToNextSection() {
      this.$emit("scrollTo", "about");
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  padding-left: 10px;
}

h1 {
  font-size: 5rem;
  line-height: 1.1;
}

.text {
  width: 50%;
  font-size: 1.5rem;
  padding: 20px;
  margin: auto;
  z-index: 1;
  background-color: #324047;
  text-align: left;
  font-weight: lighter;
}

.image-container {
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
}

.image {
  width: 100%;
  height: auto;
}

button {
  background-color: #00a8a8;
  border: none;
  color: white; /* White text */
  padding: 15px 32px; /* Some padding */
  height: 50%;
  width: 30%;
  font-size: 16px; /* Increase font size */
  border-radius: 25px; /* Rounded corners */
  cursor: pointer; /* Pointer/hand icon on hover */
}

button:hover {
  background-color: #046291; /* Darker green on hover */
}

.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgba(139, 128, 128, 0), #324047);

  z-index: 0;
}
</style>
