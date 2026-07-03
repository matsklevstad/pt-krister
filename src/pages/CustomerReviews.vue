<template>
  <div class="container">
    <div
      class="header"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <p>HVA SYNES ANDRE?</p>
      <h1>🏆 Kundeanmeldelser</h1>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <div v-if="widgetHtml" v-html="widgetHtml"></div>
      <div v-else class="widget-placeholder">
        <p>⚙️ Kundeanmeldelser vises her i produksjon.<br /><small>Sett <code>VUE_APP_REVIEW_ID</code> i <code>.env.local</code> for å aktivere widgeten.</small></p>
      </div>
    </div>
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
      const reviewId = process.env.VUE_APP_REVIEW_ID;
      if (!reviewId) return; // placeholder shown in template instead

      this.widgetHtml = `<div data-widget-textcarousel="${reviewId}"></div>`;

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
  max-width: var(--content-max-width);
  min-height: 90vh;
  flex-direction: column;
  display: flex;
  padding-left: var(--section-pad-x);
  padding-right: var(--section-pad-x);
  overflow: hidden;
  box-sizing: border-box;
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

::v-deep ._headline_slxya_80 {
  color: white !important;
}

::v-deep ._text_slxya_99 {
  font-size: 18px !important;
  color: white !important;
}

::v-deep ._row_slxya_112 div p {
  font-size: 25px !important;
  color: white !important;
}

::v-deep .simply-carousel-container button {
  font-size: 14px !important;
}

::v-deep #Layer_1 g path {
  fill: white !important;
}

/* -------- */

.widget-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 2px dashed rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  padding: 40px 20px;
}

.widget-placeholder code {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    min-height: 70vh;
    padding-bottom: 40px;
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
