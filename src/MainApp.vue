<template>
  <div id="app">
    <PageHeader />
    <div class="full-page-container" @scrollTo="scrollToSection">
      <section class="page-section" id="start">
        <StartPage @scrollTo="scrollToSection" />
      </section>
      <section class="page-section" id="about">
        <AboutMe />
      </section>
      <section class="page-section" id="reviews">
        <CustomerReviews />
      </section>
      <!-- Add more sections as needed -->
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import StartPage from "./components/StartPage.vue";
import AboutMe from "./components/AboutMe.vue";
import CustomerReviews from "./components/CustomerReviews.vue";

export default {
  name: "MainApp",
  components: {
    PageHeader,
    StartPage,
    AboutMe,
    CustomerReviews,
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden; /* Prevent body from scrolling */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #efefef;
  background-color: #324047;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent body from scrolling */
}

.full-page-container {
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.page-section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
