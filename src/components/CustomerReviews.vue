<template>
  <div class="container">
    <h1>Hva synes kundene mine?🤔</h1>
    <p>
      Å teste ut en ny personlig trener kan være skummelt. Her er hva mine
      kunder har å si om meg:
    </p>
    <div class="reviews">
      <h3>Herlig!</h3>
      <p>⭐️⭐️⭐️⭐️⭐️</p>

      <p>
        Han Krister hjalp mæ med å nå mine træningsmål på en effektiv og
        motiveandes måte. Han e kunnskapsrik, profesjonell og alltid
        tilgjengelig for å svare på spørsmål. Æ e veldig fornøyd med resultatene
        jeg har oppnådd med Krister som min personlige trener! Æ klara nå 28
        pullups på rad! 🎉
      </p>
      <p>Frida (22), Bodø</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerReviews",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #080c1e;
  justify-content: center;
  align-items: center;
}

.reviews {
  display: flex;
  flex-direction: column;
  justify-self: center;

  width: 60%;
  align-items: center;
  padding: 20px;
  color: black;
  background-color: #efefef;
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
