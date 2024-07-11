<template>
  <div class="container">
    <p>HVA JEG TILBYR</p>
    <h1>Tjenester</h1>

    <div class="grid">
      <div class="grid-item">
        <h3>#1</h3>
        <h2>Kosthold</h2>
        <p>Jeg setter opp kostholdsplan.</p>
      </div>
      <div class="grid-item">
        <h3>#2</h3>
        <h2>Trening</h2>
        <p>Jeg lager treningsprogram.</p>
      </div>
      <div class="grid-item">
        <h3>#3</h3>
        <h2>Veiledning</h2>
        <p>Jeg tilbyr personlig veiledning.</p>
      </div>
      <div class="grid-item">
        <h3>#4</h3>
        <h2>Oppfølging</h2>
        <p>Jeg følger opp fremgangen din.</p>
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
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: black;
}
</style>
