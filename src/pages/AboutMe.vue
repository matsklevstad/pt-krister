<template>
  <div class="container">
    <div class="content">
      <div
        class="infobox"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div class="header">
          <p>ONLINE COACH | PERSONLIG TRENER</p>
          <h1>😁 Hei, jeg er Krister!</h1>
        </div>
        <p>
          Mitt navn er <strong>Krister Sævik</strong>, og jeg er sertifisert
          personlig trener og coach med et årsstudium i personlig trening og en
          bachelor i trening fra Nord Universitet. Jeg jobber fulltid som online
          coach og PT, og med over <strong>8 års erfaring</strong> i
          treningsbransjen har jeg hjulpet hundrevis av mennesker med å oppnå en
          sterk og veltrent kropp, uavhengig av deres utgangspunkt. <br /><br />
          Jeg hjelper deg med å <strong>bygge muskelmasse</strong>,
          <strong>redusere fettprosenten</strong>, og
          <strong>bli sterkere</strong>. Mange overvurderer hva som skal til for
          å få en veltrent kropp, og ser det som noe uoppnåelig. Men sannheten
          er at du ikke trenger å trene seks dager i uka eller følge en streng
          kostholdsplan. Hvis du ønsker min hjelp til å bli sterk og veltrent en
          gang for alle, ikke nøl med å ta kontakt for en uforpliktende prat.
          <br /><br />
          Kanskje er du bare en telefonsamtale unna å endre livet ditt.<strong>
            Du har ingenting å tape, men alt å vinne. Vi høres!</strong
          >
        </p>
      </div>
      <hr data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1000" />
      <div
        class="image-container"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img src="../assets/krister-saevik-2.png" alt="Pull Down Image" />
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
  max-width: var(--content-max-width);
  min-height: 100vh;
  margin-top: 60px;
  flex-direction: column;
  padding-top: 40px;
  padding-left: var(--section-pad-x);
  padding-right: var(--section-pad-x);
  box-sizing: border-box;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.infobox {
  width: 50%;
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

.header h1 {
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 2s steps(40, end) forwards, blink-caret 0.75s step-end 2s;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
}

.header p {
  font-size: var(--header-p-large-device);
  margin: 0;
}

p {
  font-size: 20px;
}

@media (min-width: 769px) and (max-width: 1023px) {
  .infobox {
    width: 55%;
  }
  .image-container {
    width: 40%;
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 40px;
    overflow: hidden;
    min-height: 70vh;
    margin-top: 60px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .infobox {
    width: 100%;
  }
  .header h1 {
    white-space: normal;
    width: 100%;
    animation: none;
  }
  hr {
    visibility: hidden;
  }

  img {
    width: 80%;
    border-radius: 50%;
  }

  .image-container {
    width: 100%;
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
