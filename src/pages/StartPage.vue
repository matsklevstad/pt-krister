<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <div data-aos="fade-up" class="text">
      <h1 data-aos="fade-right" data-aos-delay="200">
        Drømmer du om en sterkere og mer veltrent kropp? La oss nå målene dine
        sammen!
      </h1>
      <p data-aos="fade-left" data-aos-delay="400">
        Jeg tilbyr nettbasert coaching og personlige treningstimer for deg
        mellom 25 og 40 år som ønsker å bygge en sterk, sunn og veltrent kropp.
        Er du klar for å ta det neste steget? Fyll ut
        <a href="#contact-form">kontaktskjemaet</a> nedenfor, så tar vi en
        uforpliktende prat om hvordan jeg kan hjelpe deg å nå dine mål!
      </p>
      <button @click="scrollToNextSection">JEG VIL VITE MER!</button>
    </div>
    <div class="image-container">
      <img class="image" src="../assets/lifting-2.jpeg" alt="Krister" />
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
  padding-right: 20%;
}

h1 {
  font-size: 40px;
  margin: 0;
}

a {
  color: var(--primary-color);
}

.text {
  z-index: 2;
  color: white;
  text-align: left;
  padding: 50px;
  font-size: 25px;
  background: var(--primary-background-color-opacity);
  border-radius: 24px;
  margin: auto;
}
button {
  font-size: 25px;
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
    padding-left: 5%;
    padding-right: 5%;
  }

  .text {
    font-size: 15px;
    padding: 20px;
  }
  h1 {
    font-size: var(--header-h1-small-device);
  }

  button {
    font-size: 15px;
  }
}
</style>
