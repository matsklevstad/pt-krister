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
            Perfekt for deg som ønsker fleksibel oppfølging hvor som helst og
            når som helst.
          </p>
          <p>
            <i class="fa-solid fa-check"></i>
            <strong>Tilgang til egen app</strong> <br />
            <i class="fa-solid fa-check"></i>
            <strong>Skreddersydd treningsprogram</strong>
            <br />
            <i class="fa-solid fa-check"></i>
            <strong>Ukentlige oppdateringer og justeringer</strong><br />
            <i class="fa-solid fa-check"></i>
            <strong>Ukentlig check-ins</strong> <br />
            <i class="fa-solid fa-check"></i>
            <strong>24/7 tilgang til chat med coach</strong>
            <br />
            <i class="fa-solid fa-check"></i>
            <strong>Kostholdsveiledning</strong> <br />
          </p>
        </div>
        <div
          class="grid-item"
          data-aos="flip-down"
          data-aos-duration="600"
          data-aos-delay="800"
        >
          <h1>PERSONLIG TRENER</h1>
          <p>Ideelt for deg som ønsker hands-on oppfølging og veiledning.</p>

          <p>
            <i class="fa-solid fa-check"></i>
            <strong>Skreddersydd treningsprogram</strong>
            <br />
            <i class="fa-solid fa-check"></i> <strong>Fysiske PT-timer</strong>
            <br />
            <i class="fa-solid fa-check"></i>
            <strong>Teknikkinstruksjon</strong> <br />
            <i class="fa-solid fa-check"></i> <strong>Tett oppfølging</strong>
            <br />
            <br />
            <br />
            <br />
            <br />
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
  background-color: var(--secondary-background-color, 0.7);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: left;
  position: relative;
  z-index: 1;
}

.grid-item:nth-child(1) {
  background-image: url("../assets/poly-grid-1.svg");
  color: white;
}

.grid-item:nth-child(2) {
  background-image: url("../assets/poly-grid-silver-2.svg");
  color: var(--primary-background-color);
}

.grid-item p {
  position: relative;
  z-index: 2;
}

i {
  margin-top: 20px;
  margin-right: 5px;
  background-color: white;
  color: var(--primary-background-color);
  border-radius: 50%;
  padding: 5px;
  border: 1px solid var(--primary-background-color);
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
