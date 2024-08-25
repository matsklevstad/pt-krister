<template>
  <div class="container">
    <div class="header" data-aos="fade-up" data-aos-delay="300">
      <p>HVA JEG TILBYR</p>
      <h1>📦 Tjenestene mine</h1>
    </div>
    <div class="boxes">
      <div class="grid">
        <div
          class="grid-item"
          data-aos="flip-down"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <h1>ONLINE COACHING</h1>
          <p>
            <i class="fa-solid fa-check"></i> Skreddersydd treningsprogram
            <br />
            <i class="fa-solid fa-check"></i> Ukentlige oppdateringer og
            justeringer<br />
            <i class="fa-solid fa-check"></i> Ukentlig check-ins <br />
            <i class="fa-solid fa-check"></i> 24/7 tilgang til chat med coach
            <br />
            <i class="fa-solid fa-check"></i> Kostholdsveiledning <br />
            <i class="fa-solid fa-check"></i> Teknikkanalyse via video <br />
          </p>
        </div>
        <div
          class="grid-item"
          data-aos="flip-down"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <h1>PERSONLIG TRENER</h1>
          <p>
            <i class="fa-solid fa-check"></i> Skreddersydd treningsprogram
            <br />
            <i class="fa-solid fa-check"></i> Fysiske PT-timer <br />
            <i class="fa-solid fa-check"></i> Teknikkinstruksjon <br />
            <i class="fa-solid fa-check"></i> Tett oppfølging <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PTServices",
};
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  display: flex;
  padding-left: 10%;
  padding-right: 20%;
  overflow: hidden;
}

h1 {
  font-size: var(--header-h1-large-device);
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
}

.grid-item {
  padding: 30px;
  border-radius: 8px;
  background-color: var(--secondary-background-color);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: left;
  position: relative;
  z-index: 1;
}

.grid-item:nth-child(1) {
  background-image: url("../assets/poly-grid-1.svg");
}

.grid-item:nth-child(2) {
  background-image: url("../assets/poly-grid-2.svg");
}

.grid-item p {
  position: relative;
  z-index: 2;
}

i {
  margin-top: 20px;
  margin-right: 5px;
}

p {
  font-size: var(--header-p-large-device);
}

@media (max-width: 768px) {
  .container {
    padding: 0px;
    padding-top: 5%;
    min-height: 80vh;
    padding-bottom: 10%;
  }

  .header {
    padding-left: 5%;
  }

  .grid {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    justify-items: center;
    gap: 25px;
  }
  .grid-item {
    padding: 10px;
    width: 90%;
  }
  .grid-item h1 {
    font-size: 20px;
    text-align: center;
  }
  h1 {
    font-size: var(--header-h1-small-device);
  }

  .header p {
    font-size: var(--header-p-small-device);
  }

  i {
    margin-top: 15px;
  }

  p {
    font-size: var(--header-p-small-device);
  }
}
</style>
