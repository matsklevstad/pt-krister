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
      <section class="page-section" id="faq">
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
import StartPage from "./pages/StartPage.vue";
import AboutMe from "./pages/AboutMe.vue";
//import CustomerReviews from "./components/CustomerReviews.vue";
import PTServices from "./pages/PTServices.vue";
import SocialMedia from "./pages/SocialMedia.vue";
import ContactInformation from "./pages/ContactInformation.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/globals.css";
import FAQAccordion from "./pages/FAQAccordion.vue";

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
        const rect = element.getBoundingClientRect();
        const offset = rect.top + window.scrollY - headerHeight;
        window.scrollTo({ top: offset, behavior: "smooth" });
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
  background-color: var(--primary-background-color);
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent body from scrolling */
}

button {
  font-family: Avenir, Helvetica Arial, sans-serif;
  background-color: var(--secondary-background-color);
  border: 1px solid rgb(255, 255, 255, 0.5);
  color: white;
  padding: 15px 32px;
  font-size: 24px;
  border-radius: 24px;
  cursor: pointer;
}
button:hover {
  background-color: var(--secondary-background-color-hover);
}
button:active {
  background-color: var(--secondary-background-color-active);
}


.sticky-header {
  position: fixed;
  box-shadow: 0 4px 8px var(--primary-background-color-opacity); /* Horizontal offset, Vertical offset, Blur radius, Color */
  top: 0;
  width: 100%;
  z-index: 1000;
}

.full-page-container {
  flex: 1;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}

.page-section {
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;
}

.page-section-content {
  padding: 20px;
  width: 100%;
}
</style>
