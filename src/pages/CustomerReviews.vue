<template>
  <div class="container">
    <div class="header" data-aos="fade-up" data-aos-delay="300">
      <p>HVA SYNES ANDRE?</p>
      <h1>🏆 Kundeanmeldelser</h1>
    </div>
    <div data-aos="fade-up" data-aos-delay="500" v-html="widgetHtml"></div>
  </div>
</template>

<script>
export default {
  name: "PTServices",
  data() {
    return {
      widgetHtml: "", // This will store the HTML to render the widget
    };
  },
  mounted() {
    this.loadWidget();
  },
  methods: {
    loadWidget() {
      // Define your widget configuration or URL

      this.widgetHtml = `<div data-widget-textcarousel="${process.env.VUE_APP_REVIEW_ID}"></div>`;

      // Optionally, add any additional initialization or script execution
      const script = document.createElement("script");
      script.src = "https://app.simplyreview.com/widgets/textcarousel/index.js";
      script.defer = true;
      document.body.appendChild(script);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 80vh;
  flex-direction: column;
  display: flex;
  padding-left: 10%;
  padding-right: 20%;
  overflow: hidden;
}

h1 {
  font-size: var(--header-h1-large-device);
}

p {
  font-size: var(--header-p-large-device);
}

/*styles for SimplyReview widget:*/
/* -------- */
:deep(.style-module_row__1luKZ) {
  opacity: 1 !important;
}

/* Scrollbar? 
:deep(.simply-carousel) {
  overflow-x: scroll !important;
  scrollbar-width: thin !important;
  scrollbar-color: grey white !important;
}*/

:deep(.simply-carousel)::-webkit-scrollbar {
  width: 60px;
  background-color: white;
}

:deep(.simply-carousel)::-webkit-scrollbar-thumb {
  background-color: grey;
}

:deep(.style-module_headline__38-gz),
:deep(.style-module_text__3LokZ) {
  color: white !important;
}

:deep(#Layer_1 g path) {
  fill: white !important;
}
/* -------- */

@media (max-width: 768px) {
  .container {
    padding: 0px;
    padding-top: 5%;
    min-height: 70vh;
    padding-bottom: 10%;
  }

  .header {
    padding-left: 5%;
  }

  h1 {
    font-size: var(--header-h1-small-device);
  }

  .header p {
    font-size: var(--header-p-small-device);
  }

  p {
    font-size: 15px;
  }
}
</style>
