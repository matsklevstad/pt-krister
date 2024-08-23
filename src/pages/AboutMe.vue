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
          <p>ONLINE COACH | PERSONLIG TRENER</p>
          <h1>😁 Hei, jeg er Krister!</h1>
        </div>
        <p>
          Mitt navn er Krister Sævik, og jeg er sertifisert personlig
          trener/coach gjennom et årsstudium i PT og en bachelor i trening ved
          Nord Universitet. Jeg jobber fulltid som online coach/PT og etter 8 år
          i treningsbransjen har jeg hjulpet hundrevis av mennesker med å bli
          sterk og veltrent fra svært ulike utgangspunkt.
          <br /><br />
          Jeg hjelper deg å bygge muskelmasse, redusere fettprosent og bli
          sterkere. Mange overvurderer hva som skal til, og ser en veltrent
          kropp som noe uoppnåelig. Du trenger ikke å trene 6 dager i uka eller
          følge en streng kostholdsplan. Hvis du ønsker min hjelp til å bli
          sterk og veltrent en gang for alle, ikke nøl med å ta kontakt for en
          uforpliktende prat.
          <br /><br />
          Kanskje er du bare en telefonsamtale unna og endre livet ditt. Du har
          ingenting å tape, alt og vinne. Vi høres!
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
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  padding-top: 40px;
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
}

.image-container {
  width: 40%;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.05); /* Adjust the percentage as needed */
}

hr {
  width: 1px;
  background-color: #ccc;
}

h1 {
  font-size: var(--header-h1-large-device);
}

.header p {
  font-size: var(--header-p-large-device);
  margin: 0;
}

p {
  font-size: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 0;
    padding-top: 5%;
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
    font-size: var(--header-p-small-device);
  }

  h1 {
    font-size: var(--header-h1-small-device);
  }
}
</style>
