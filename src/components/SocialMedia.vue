<template>
  <div class="container">
    <div
      class="header"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay="300"
    >
      <p>SOSIALE MEDIER</p>
      <h1>👉🏻 Følg meg på Instagram</h1>
    </div>
    <div
      class="insta-container"
      data-aos="fade-up"
      data-aos-duration="700"
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
  min-height: 90vh;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  padding-left: 10%;
  padding-right: 20%;
}

h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}

.insta-container {
  display: flex;
}

iframe {
  width: 100%;
  background-color: #324047;
  border: 1px solid white;
  height: 1028px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .container {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    background-color: red;
    min-height: 70vh;
  }

  p {
    font-size: 20px;
  }

  h1 {
    font-size: 30px;
  }

  iframe {
    height: 454px;
  }
}
</style>
