<template>
  <div class="container">
    <div class="header">
      <p>HVA JEG TILBYR</p>
      <h1>Tjenester</h1>
    </div>
    <div class="boxes">
      <div class="grid">
        <div class="grid-item">
          <!--400 per grid-->
          <h3>#1</h3>
          <h2>🥦 Kosthold</h2>
          <p>
            Jeg setter opp skreddersydde kostholdsplaner basert på dine mål og
            preferanser, med fokus på balanse, næring og langsiktige
            helsefordeler.
          </p>
        </div>
        <div class="grid-item">
          <h3>#2</h3>
          <h2>🏋🏻‍♀️ Trening</h2>
          <p>
            Jeg utarbeider skreddersydde treningsprogrammer tilpasset dine
            fysiske mål og treningsnivå, med en metodikk som fremmer
            effektivitet, progresjon og motivasjon.
          </p>
        </div>
        <div class="grid-item">
          <h3>#3</h3>
          <h2>💬 Veiledning</h2>
          <p>
            Jeg tilbyr personlig veiledning og støtte gjennom hele din helse- og
            treningsreise, med en tilnærming som skaper en støttende atmosfære
            for dine individuelle mål.
          </p>
        </div>
        <div class="grid-item">
          <h3>#4</h3>
          <h2>📊 Oppfølging</h2>
          <p>
            Jeg følger nøye opp din fremgang og tilpasser planene etter dine
            individuelle behov, for å sikre at du oppnår og opprettholder
            ønskede resultater.
          </p>
        </div>
        <div class="grid-item">
          <h3>#4</h3>
          <h2>📊 Oppfølging</h2>
          <p>
            Jeg følger nøye opp din fremgang og tilpasser planene etter dine
            individuelle behov, for å sikre at du oppnår og opprettholder
            ønskede resultater.
          </p>
        </div>
        <div class="grid-item">
          <h3>#4</h3>
          <h2>📊 Oppfølging</h2>
          <p>
            Jeg følger nøye opp din fremgang og tilpasser planene etter dine
            individuelle behov, for å sikre at du oppnår og opprettholder
            ønskede resultater.
          </p>
        </div>
        <div class="grid-item">
          <h3>#4</h3>
          <h2>📊 Oppfølging</h2>
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
  height: 100%;
  flex-direction: column;
  display: flex;
  padding-left: 10%;
}

h1 {
  font-size: 40px;
  line-height: 1.1;
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

h3 {
  font-size: 30px;
  margin: 0;
}
h2 {
  font-size: 25px;
  margin: 0;
}
p {
  font-size: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 0px;
  }

  .header {
    padding-left: 10%;
    margin-top: 10px;
  }

  .header p {
    font-size: 20px;
  }

  .grid {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    justify-items: center;
    gap: 10px;
  }
  .grid-item {
    padding: 7px;
    width: 90%;
  }
  h2 {
    font-size: large;
    margin: 0;
  }
  h3 {
    font-size: small;
    margin: 0;
  }
  p {
    font-size: small;
    margin: 0;
  }
}
</style>
