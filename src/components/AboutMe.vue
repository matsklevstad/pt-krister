<template>
  <div class="container">
    <div class="content">
      <div class="infobox">
        <h1>Hei, jeg er Krister 😁</h1>
        <p>
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
      <div class="image-container">
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
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  min-height: -webkit-fill-available;
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
  font-weight: bold;
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .image-container {
    margin: auto;
  }

  p {
    font-size: 15px;
    font-weight: lighter;
  }
  h1 {
    font-size: 30px;
  }
}
</style>
