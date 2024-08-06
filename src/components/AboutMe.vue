<template>
  <div class="container">
    <div class="content">
      <!-- data-aos="flip-up"> -->
      <div class="infobox" data-aos="fade-up" data-aos-duration="700">
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
      <div class="image-container" data-aos="fade-up" data-aos-duration="700">  
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
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 200px;
  padding-left: 10%;
  padding-right: 20%;
}
.content {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.infobox {
  width: 50%;
  text-align: left;
  font-weight: lighter;
}

img {
  width: 300%;
  max-width: 600px;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
  border-radius: 50%; /* Make the image round */
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
  }
  .content {
    display: flex;
    flex-direction: column;

    gap: 0px;
    justify-content: center;
  }
  .infobox {
    padding-left: 5%;
    padding-right: 5%;
    width: 90%;
  }
  img {
    width: 150px;
    height: 150px;
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
