<template>
  <div class="container">
    <div class="header" data-aos="fade-up">
      <p>SOSIALE MEDIER</p>
      <h1>👉🏻 Instagram</h1>
    </div>
    <div class="insta-container" data-aos="fade-up" data-aos-delay="500" >
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
}

.header {
  padding-left: 10%;
}

h1 {
  font-size: 40px;
}

p {
  font-size: 20px;
}

.insta-container {
  display: flex;
  justify-content: center;
}

iframe {
  width: 70%;
  background-color: #324047;
  padding: 5%;
  height: 800px;
  border: none;
  border-radius: 24px;
}

@media (max-width: 768px) {
  .container {
    padding: 0px;
  }

  .header {
    padding-left: 5%;
    margin-top: 10px;
  }
  p {
    font-size: 20px;
  }

  h1 {
    font-size: 30px;
  }

  iframe {
    height: 400px;
  }
}
</style>
