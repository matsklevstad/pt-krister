<template>
  <div class="container">
    <div
      class="header"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <p>SOSIALE MEDIER</p>
      <h1>🚀 Følg meg på Instagram</h1>
    </div>
    <div
      class="insta-container"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="700"
    >
      <iframe
        :src="instagramUrl"
        frameborder=""
        scrolling="yes"
        allowtransparency="true"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMedia",

  data() {
    return {
      instagramUrl: "https://www.instagram.com/kristersaevik/embed/",
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: var(--content-max-width);
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  padding-left: var(--section-pad-x);
  padding-right: var(--section-pad-x);
  box-sizing: border-box;
}

h1 {
  font-size: var(--header-h1-large-device);
}

p {
  font-size: var(--header-p-large-device);
}

.insta-container {
  display: flex;
}

iframe {
  width: 100%;
  border: 1px solid white;
  height: 1028px;
  border-radius: 8px;
}

@media (min-width: 769px) and (max-width: 1023px) {
  iframe {
    height: 750px;
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    min-height: 70vh;
  }

  p {
    font-size: var(--header-p-small-device);
  }

  h1 {
    font-size: var(--header-h1-small-device);
  }

  iframe {
    height: 454px;
  }
}
</style>
