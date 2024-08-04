<template>
  <div class="container">
    <p @click="navigateTo('start')">⭐️ KRISTER SÆVIK | PT</p>
    <div class="links">
      <p @click="navigateTo('about')">OM MEG</p>
      <p @click="navigateTo('services')">TJENESTER</p>
      <p @click="navigateTo('reviews')">REFERANSER</p>
      <p @click="navigateTo('blog')">BLOGG</p>
    </div>
    <button>KONTAKT MEG</button>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  methods: {
    navigateTo(section) {
      this.$emit("scrollTo", section);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p,
button {
  font-size: 1.5rem;
  font-weight: lighter;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #080c1e;
  width: 100%;
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
  color: white;
  padding: 0px 50px 0px 50px;
  height: 50%;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
}

button:hover {
  background-color: #046291;
}

/* Media Queries */
@media (max-width: 768px) {
  .container {
    display: none;
  }
}
</style>
