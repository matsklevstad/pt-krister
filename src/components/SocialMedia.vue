<template>
  <div class="container">
    <div class="header" data-aos="fade-up">
      <p>SOSIALE MEDIER</p>
      <h1>👉🏻 Følg meg på Instagram</h1>
    </div>
    <div class="insta-container">
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
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "SocialMedia",
  mounted() {
    AOS.init();
  },
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
  height: 100%;
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
  }

  .header {
    margin-top: 10px;
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
