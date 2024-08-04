<template>
  <div class="container">
    <h1>Hva synes kundene mine?</h1>
    <p>
      Utforsk suksesshistorier og les mer om vellykkede samarbeid med andre
      kunder.
    </p>
    <div class="reviews">
      <div class="review-container">
        <h2>⭐️⭐️⭐️⭐️⭐️</h2>
        <h3>Fantastisk opplevelse</h3>
        <p>
          Krister har virkelig overgått mine forventninger som PT. Jeg har sett
          store forbedringer på kort tid. Han er utrolig kunnskapsrik, og hver
          økt er nøye planlagt for å maksimere resultatene mine. Jeg føler meg
          sterkere og mer energisk enn noensinne!
        </p>
        <p>Ola Nordmann</p>
      </div>
      <div class="review-container">
        <h2>⭐️⭐️⭐️⭐️⭐️</h2>
        <h3>Utrolig fornøyd</h3>
        <p>
          Med Krister som PT har jeg endelig klart å nå målene mine. Han gir meg
          akkurat den motivasjonen jeg trenger. Treningene hans er utfordrende,
          men alltid gjennomførbare, og han vet akkurat hvordan han skal pushe
          meg til å yte mitt beste. Anbefales på det sterkeste!
        </p>
        <p>Kari Hansen</p>
      </div>
      <div class="review-container">
        <h2>⭐️⭐️⭐️⭐️⭐️</h2>
        <h3>Anbefales på det sterkeste</h3>
        <p>
          Krister er en dyktig og motiverende PT. Treningsøktene er både
          effektive og morsomme. Han tilpasser programmene etter mine behov og
          sørger for at jeg alltid har riktig teknikk. Resultatene jeg har
          oppnådd på kort tid er intet mindre enn imponerende.
        </p>
        <p>Per Olsen</p>
      </div>
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
  align-self: start;
  height: 100%;
  background-color: #080c1e;
  margin-top: 100px;
  padding-left: 10%;
}

h1 {
  font-size: 50px;
  font-weight: lighter;
}

p {
  font-size: 20px;
  font-weight: lighter;
}

.reviews {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
}

.review-container {
  background-color: white;
  color: #000000;
  padding: 20px;
  border-radius: 18px;
  text-align: center;
}

.review-container p {
  font-size: 16px;
  margin-bottom: 75px;
}

h3 {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}
</style>
