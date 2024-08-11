<template>
  <div id="app">
    <div class="sticky-header">
      <PageHeader @scrollTo="scrollToSection" />
    </div>
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
      <section class="page-section" id="social">
        <FAQAccordion />
      </section>
      <section class="page-section" id="social">
        <SocialMedia />
      </section>
      <!--  <section class="page-section" id="reviews">
        <CustomerReviews />
      </section> -->
      <section class="page-section" id="contact">
        <ContactInformation />
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import StartPage from "./components/StartPage.vue";
import AboutMe from "./components/AboutMe.vue";
//import CustomerReviews from "./components/CustomerReviews.vue";
import PTServices from "./components/PTServices.vue";
import SocialMedia from "./components/SocialMedia.vue";
import ContactInformation from "./components/ContactInformation.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQAccordion from "./components/FAQAccordion.vue";

export default {
  name: "MainApp",
  components: {
    PageHeader,
    StartPage,
    AboutMe,
    PTServices,
    //CustomerReviews,
    FAQAccordion,
    SocialMedia,
    ContactInformation,
  },
  methods: {
    scrollToSection({ sectionId, headerHeight }) {
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(headerHeight);
        const rect = element.getBoundingClientRect();
        const offset = rect.top + window.scrollY - headerHeight;
        window.scrollTo({ top: offset, behavior: "smooth", duration: 10000 });
      }
    },
  },
  mounted() {
    AOS.init({ once: true });
  },
};
</script>

<style>
html {
  height: 100%;
  overflow-x: hidden;
}

body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fffdfd;
  background-color: #080c1e;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent body from scrolling */
}

button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: white;
  border: none;
  padding: 15px 32px;
  font-size: 24px;
  border-radius: 25px;
  cursor: pointer;
}

button:hover {
  background-color: #c2c2c2;
}

.sticky-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensures the header stays above other content */
  background-color: #080c1e; /* Ensures the header has a background */
}

.full-page-container {
  flex: 1;
  width: 100vw; /* Ensure container width is 100% of viewport width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: auto; /* Allow vertical scrolling */
}

.page-section {
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
