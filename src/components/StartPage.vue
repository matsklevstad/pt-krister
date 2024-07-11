<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <div class="text">
      <h1>Vil du komme i form? 🫵</h1>
      <p>
        Velkommen til din vei mot bedre helse og velvære! Jeg tilbyr
        skreddersydde treningsprogrammer og personlig oppfølging for å hjelpe
        deg med å nå dine mål. Uansett om du ønsker å gå ned i vekt, bygge
        muskler eller bare forbedre din generelle form, er jeg her for å støtte
        deg på hvert steg av veien.
      </p>
      <button @click="scrollToNextSection">JEG VIL VITE MER!</button>
    </div>
    <div class="image-container">
      <img class="image" src="../assets/lifting.jpeg" alt="Krister" />
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

h1 {
  font-size: 4rem;
  line-height: 1.1;
}

.text {
  width: 50%;
  font-size: 1rem;
  padding: 20px;
  margin: auto;
  z-index: 1;
  background-color: #080c1e;
  text-align: left;
  font-weight: lighter;
}

.text {
  position: relative;
  z-index: 2;
  color: white;
  text-align: left;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  width: 80%;
  margin: auto;
}

.overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
}

.image-container {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  background-color: #00a8a8;
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
}

button:hover {
  background-color: #046291;
}
</style>
