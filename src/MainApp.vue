<template>
  <div id="app">
    <PageHeader @scrollTo="scrollToSection" />
    <div class="full-page-container" @scrollTo="scrollToSection">
      <section class="page-section" id="start">
        <StartPage @scrollTo="scrollToSection" />
      </section>
      <section class="page-section" id="about">
        <AboutMe />
      </section>
      <section class="page-section" id="services">
        <PTServices />
      </section>
     <!--  <section class="page-section" id="reviews">
        <CustomerReviews />
      </section> -->
      <!-- Add more sections as needed -->
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import StartPage from "./components/StartPage.vue";
import AboutMe from "./components/AboutMe.vue";
//import CustomerReviews from "./components/CustomerReviews.vue";
import PTServices from "./components/PTServices.vue";

export default {
  name: "MainApp",
  components: {
    PageHeader,
    StartPage,
    AboutMe,
    //CustomerReviews,
    PTServices,
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
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
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #efefef;
  background-color: #080c1e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent body from scrolling */
}

.full-page-container {
  flex: 1;
  width: 100vw; /* Ensure container width is 100% of viewport width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: auto; /* Allow vertical scrolling */
}

.page-section {
  min-height: 100vh; /* Ensure section takes at least the full viewport height */
  width: 100vw; /* Ensure section width is 100% of viewport width */
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box; /* Include padding and border in element's total width and height */
  overflow-y: auto; /* Allow vertical scrolling within sections if content overflows */
}

/* Optional: Add padding or margin to create spacing inside sections */
.page-section-content {
  padding: 20px;
  width: 100%;
}
</style>
