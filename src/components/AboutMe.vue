<template>
  <div class="container">
    <div class="content">
      <div class="infobox">
        <h1 data-aos="fade-down" data-aos-delay="400">
          Hei, jeg er Krister 😁
        </h1>
        <p data-aos="fade-down" data-aos-delay="600">
          👉🏻 Jeg er utdannet ved Norges idrettshøgskole og har spesialisert meg
          innen styrke- og kondisjonstrening. Jeg har også erfaring med
          kostholdsveiledning og skreddersyr treningsprogrammer for å møte
          individuelle mål og behov.
          <br /><br />
          👉🏻 Med åtte års erfaring i treningsbransjen har jeg hjulpet utallige
          klienter med å oppnå deres drømmekropp og opprettholde en sunn
          livsstil. Min lidenskap for fitness og helse er drivkraften bak
          suksessen til mine klienter.
          <br /><br />
          👉🏻 Ta det første steget mot en bedre versjon av deg selv i dag!
        </p>
      </div>
      <div class="image-container" data-aos="fade-down" data-aos-delay="600">
        <img src="../assets/krister-saevik.jpg" alt="Pull Down Image" />
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AboutMe",
  mounted() {
    AOS.init();
  },
  methods: {
    // Your component's JavaScript
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #080c1e;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.infobox {
  padding: 20px;
  width: 40%;
  text-align: left;
  font-weight: lighter;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Make the image round */
}

h1 {
  font-size: 3rem;
  font-weight: lighter;
}

p {
  font-size: 1.5rem;
  font-weight: lighter;
}

@media (max-width: 768px) {
  .content {
    display: flex;
    flex-direction: column-reverse;
  }

  .infobox {
    width: 90%;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .image-container {
    margin: auto;
  }

  p {
    font-size: medium;
    font-weight: lighter;
  }
  h1 {
    font-size: xx-large;
  }
  @media (max-width: 480px) {
    p,
    button {
      font-size: 1.2rem;
    }

    button {
      padding: 10px 20px;
    }
  }
}
</style>
