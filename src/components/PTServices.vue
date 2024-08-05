<template>
  <div class="container">
    <div class="header">
      <p>HVA JEG TILBYR</p>
      <h1>📦 Tjenester</h1>
    </div>
    <div class="boxes">
      <div class="grid">
        <div class="grid-item" data-aos="flip-down" data-aos-delay="100">
          <!--400 per grid-->
          <h1>🥦 Kosthold</h1>
          <p>
            Jeg setter opp skreddersydde kostholdsplaner basert på dine mål og
            preferanser, med fokus på balanse, næring og langsiktige
            helsefordeler.
          </p>
        </div>
        <div class="grid-item" data-aos="flip-down" data-aos-delay="200">
          <h1>🏋🏻‍♀️ Trening</h1>
          <p>
            Jeg utarbeider skreddersydde treningsprogrammer tilpasset dine
            fysiske mål og treningsnivå, med en metodikk som fremmer
            effektivitet, progresjon og motivasjon.
          </p>
        </div>
        <div class="grid-item" data-aos="flip-down" data-aos-delay="300">
          <h1>💬 Veiledning</h1>
          <p>
            Jeg tilbyr personlig veiledning og støtte gjennom hele din helse- og
            treningsreise, med en tilnærming som skaper en støttende atmosfære
            for dine individuelle mål.
          </p>
        </div>
        <div class="grid-item" data-aos="flip-down" data-aos-delay="400">
          <h1>📊 Oppfølging</h1>
          <p>
            Jeg følger nøye opp din fremgang og tilpasser planene etter dine
            individuelle behov, for å sikre at du oppnår og opprettholder
            ønskede resultater.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "PTServices",
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 90vh;
  flex-direction: column;
  display: flex;
  padding-left: 10%;
  overflow: hidden;
}

h1 {
  font-size: 35px;
}
.grid {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: black;
}

p {
  font-size: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 0px;
    height: 100vh;
  }

  .header {
    padding-left: 5%;
  }

  .grid {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    justify-items: center;
    gap: 10px;
  }
  .grid-item {
    padding: 10px;
    width: 90%;
  }
  .grid-item h1 {
    font-size: 20px;
    margin: 0;
  }
  h1 {
    font-size: 30px;
  }

  .header p {
    font-size: 20px;
  }

  p {
    font-size: 15px;
    margin: 0;
  }
}
</style>
