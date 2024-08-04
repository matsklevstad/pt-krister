<template>
  <div class="container">
    <img style="width: 100%" src="../assets/layered-wave.svg" />
    <div class="text-container">
      <h1>Kontaktinformasjon</h1>
      <div class="links-container">
        <p>
          <i class="fa-solid fa-envelope"></i>
          <strong> EPOST:</strong>
          <br />
          <a href="mailto:krister-saevik@gmail.com">krister-saevik@gmail.com</a>
        </p>
        <p>
          <i class="fa-solid fa-phone"></i>
          <strong> TELEFON:</strong>
          <br />
          <a href="tel:+4799385083">+47 993 85 083</a>
        </p>
        <p>
          <i class="fa-solid fa-id-card"></i>
          <strong> ORG.NR:</strong>
          <br />
          930 356 476
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.text-container {
  background: linear-gradient(to bottom, rgb(21, 27, 41) 0%, #080c1e 100%);
  padding-left: 10%;
  margin-bottom: 200px;
  padding-right: 10%;
}

.links-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
}
a {
  color: white;
}

i {
  margin-right: 2px;
}

h1 {
  font-size: 60px;
}
p {
  font-size: 20px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 10px;
  }

  .text-container {
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 75px;
  }
}
</style>
