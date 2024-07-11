<template>
  <div data-aos="fade-left" class="container">
    <div class="header">
      <p>HVA JEG TILBYR</p>
      <h1>Tjenester</h1>
    </div>
    <div class="boxes">
      <div class="grid">
        <div data-aos="flip-left" data-aos-delay="400" class="grid-item">
          <h3>#1</h3>
          <h2>Kosthold</h2>
          <p>
            Jeg setter opp skreddersydde kostholdsplaner basert på dine mål og
            preferanser, med fokus på balanse, næring og langsiktige
            helsefordeler.
          </p>
        </div>
        <div data-aos="flip-left" data-aos-delay="800" class="grid-item">
          <h3>#2</h3>
          <h2>Trening</h2>
          <p>
            Jeg utarbeider skreddersydde treningsprogrammer tilpasset dine
            fysiske mål og treningsnivå, med en metodikk som fremmer
            effektivitet, progresjon og motivasjon.
          </p>
        </div>
        <div data-aos="flip-left" data-aos-delay="1200" class="grid-item">
          <h3>#3</h3>
          <h2>Veiledning</h2>
          <p>
            Jeg tilbyr personlig veiledning og støtte gjennom hele din helse- og
            treningsreise, med en tilnærming som skaper en støttende atmosfære
            for dine individuelle mål.
          </p>
        </div>
        <div data-aos="flip-left" data-aos-delay="1600" class="grid-item">
          <h3>#4</h3>
          <h2>Oppfølging</h2>
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
  font-size: 3rem;
  line-height: 1.1;
}
.grid {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: black;
}
</style>
