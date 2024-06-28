<template>
  <div class="container">
    <h1>Hei! 😁</h1>
    <div class="content">
      <div class="infobox">
        <h2>⭐️ Krister Sævik | PT | Online Coach</h2>
        <p>
          👉🏻 Jeg er utdannet ved Norges idrettshøgskole og har spesialisert meg
          innen styrke- og kondisjonstrening. Jeg har også erfaring med
          kostholdsveiledning og skreddersyr treningsprogrammer for å møte
          individuelle mål og behov.
        </p>
        <p>
          👉🏻 Med åtte års erfaring i treningsbransjen har jeg hjulpet utallige
          klienter med å oppnå deres drømmekropp og opprettholde en sunn
          livsstil. Min lidenskap for fitness og helse er drivkraften bak
          suksessen til mine klienter.
        </p>
        <p>👉🏻 Ta det første steget mot en bedre versjon av deg selv i dag!</p>
      </div>
      <div>
        <img src="../assets/pulldown.png" alt="Pull Down Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  methods: {
    // Your component's JavaScript
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #324047;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.infobox {
  padding: 20px;
  width: 40%;
  text-align: left;
  font-weight: lighter;
}

img {
  height: 500px;
}

h1 {
  font-size: 4rem;
  font-weight: lighter;
}

p {
  font-size: 1.5rem;
  font-weight: lighter;
}
</style>
