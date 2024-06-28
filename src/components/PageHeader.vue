<template>
  <div class="container">
    <!-- <img src="@/assets/ai-logo.svg" alt="Logo" /> -->
    <div class="links">
      <p>Om meg</p>
      <p>Anmeldelser</p>
      <p>Innhold 1</p>
      <p>Innhold 2</p>
      <p>Blogg</p>
    </div>
    <button>KONTAKT MEG</button>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100px;
  height: 100px;
}

p,
button {
  font-size: 1.5rem;
  font-weight: lighter;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #00a8a8;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
}

button {
  background-color: #324047;
  border: none;
  color: white; /* White text */
  padding: 15px 32px; /* Some padding */
  height: 50%;
  font-size: 16px; /* Increase font size */
  border-radius: 25px; /* Rounded corners */
  cursor: pointer; /* Pointer/hand icon on hover */
}

button:hover {
  background-color: #046291; /* Darker green on hover */
}
</style>
