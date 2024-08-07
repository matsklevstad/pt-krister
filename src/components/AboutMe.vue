<template>
  <div class="container">
    <div class="content">
      <div
        class="infobox"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300"
      >
        <div class="header">
          <p>PERSONLIG TRENER</p>
          <h1>😁 Hei, jeg er Krister!</h1>
        </div>
        <p>
          Jeg heter Krister Sævik, og jeg er en sertifisert personlig trener med
          en lidenskap for å hjelpe folk med å oppnå sine helse- og treningsmål.
          Med over 10 års erfaring i treningsbransjen, har jeg jobbet med et
          bredt spekter av klienter, fra nybegynnere til eliteutøvere.
          <br /><br />
          Gjennom årene har jeg oppnådd flere sertifiseringer innen
          styrketrening, ernæring, og rehabilitering. Jeg er dedikert til å
          holde meg oppdatert på de nyeste treningsmetodene og forskningen for å
          sikre at mine klienter får den beste og mest effektive treningen.
          <br /><br />
          Sammen kan vi nå dine mål og gjøre trening til en positiv og varig del
          av din livsstil.
        </p>
      </div>
      <hr data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" />
      <div
        class="image-container"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="300"
      >
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
  min-height: 90vh;

  flex-direction: column;
  padding-top: 200px;
  padding-left: 10%;
  padding-right: 20%;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.infobox {
  width: 50%;
  text-align: left;
  font-weight: lighter;
}

.header p {
  margin: 0px;
}
.image-container {
  width: 40%;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

hr {
  width: 1px;
  background-color: #ccc;
}

h1 {
  font-size: 50px;
  font-weight: bold;
}

p {
  font-size: 20px;
  font-weight: lighter;
}

a {
  margin-left: 4px;
  color: white;
}

@media (max-width: 768px) {
  .container {
    margin-top: 0;
    padding: 0;
    padding-bottom: 10%;
    overflow: hidden;
    min-height: 70vh;
  }
  .content {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
  .infobox {
    padding-left: 5%;
    padding-right: 5%;
    width: 90%;
  }
  hr {
    visibility: hidden;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .image-container {
    width: 100vw;
    height: 100%;
    align-items: start;
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 15px;
  }
  .header p {
    font-size: 20px;
  }

  h1 {
    font-size: 30px;
  }
}
</style>
