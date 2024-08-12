<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <div data-aos="fade-up" class="text">
      <h1 data-aos="fade-right" data-aos-delay="200">🫵 VIL DU KOMME I FORM?</h1>
      <p data-aos="fade-left" data-aos-delay="400">
        Velkommen til din vei mot bedre helse og velvære! Jeg tilbyr personlig
        oppfølging og treningsprogrammer for å hjelpe deg med å nå dine mål.
        Uansett om du ønsker å gå ned i vekt, bygge muskler eller bare forbedre
        din generelle form, er jeg her for å støtte deg på hvert steg av veien.
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
  data() {
    return {
      initialHeaderHeight: 0,
    };
  },
  mounted() {
    this.initialHeaderHeight =
      document.querySelector(".sticky-header").clientHeight;
  },
  methods: {
    scrollToNextSection() {
      this.$emit("scrollTo", {
        sectionId: "about",
        headerHeight: this.initialHeaderHeight,
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  padding-left: 10%;
  padding-right: 10%;
}

h1 {
  font-size: 50px;
  margin: 0;
}

.text {
  z-index: 2;
  color: white;
  text-align: left;
  padding: 20px;
  font-size: 30px;
  font-weight: lighter;
  background: var(--primary-background-color-opacity);
  border-radius: 24px;
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

.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%; /* Adjust height as needed */
  background: linear-gradient(
    to top,
    rgba(112, 112, 112, 0) 0%,
    rgba(8, 12, 30, 0.9) 100%
  );
}
.image-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%; /* Adjust height as needed */
  background: linear-gradient(
    to bottom,
    rgba(112, 112, 112, 0) 0%,
    rgba(8, 12, 30, 0.9) 100%
  );
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Media Queries */
@media (max-width: 768px) {
  .wrapper {
    padding-top: 10%;
    padding-left: 5%;
    padding-right: 5%;
  }

  .text {
    margin-top: 75px;
    font-size: 20px;
  }
  h1 {
    font-size: 35px;
  }

  button {
    margin: auto;
    display: block;
  }
}
</style>
