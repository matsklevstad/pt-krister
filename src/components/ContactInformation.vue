<template>
  <div class="container">
    <img style="width: 100%" src="../assets/layered-wave.svg" />
    <div class="text-container">
      <h1>Kontaktinformasjon</h1>
      <div class="links-container">
        <p>
          <strong>EPOST:</strong>
          <br />
          <a href="mailto:krister-saevik@gmail.com">krister-saevik@gmail.com</a>
        </p>
        <p>
          <strong>TELEFON:</strong>
          <br />
          <a href="tel:+4799385083">+47 993 85 083</a>
        </p>
        <p>
          <strong>ORG.NR:</strong>
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
  background: linear-gradient(
    to bottom,
    rgb(23, 29, 40) 0%,
    rgba(22, 27, 38, 0) 100%
  );
}

.links-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
}
a {
  color: white;
}

h1 {
  font-size: 60px;
  padding-left: 10%;
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
}
</style>
