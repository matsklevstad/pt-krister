<template>
  <div class="nav-menu">
    <div class="nav-buttons">
      <p @click="navigateTo('start')">PT KRISTER SÆVIK</p>
      <i @click="showMenu" class="fa fa-bars"></i>
    </div>
    <div
      class="nav-content"
      :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
    >
      <ul class="nav-items">
        <li @click="navigateTo('about')">OM MEG</li>
        <li @click="navigateTo('services')">TJENESTER</li>
        <li @click="navigateTo('reviews')">REFERANSER</li>
        <!-- <li @click="navigateTo('blog')">BLOGG</li>-->
      </ul>
      <button @click="navigateTo('contact')">KONTAKT MEG</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      showMobileMenu: false, // Changed to false to start hidden
    };
  },
  methods: {
    navigateTo(section) {
      this.$emit("scrollTo", section);
      this.showMobileMenu = false;
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>
.nav-menu {
  background-color: #080c1e;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  font-size: 25px;

}

.nav-items {
  display: flex;
  gap: 20px;
  list-style: none;
}

li {
  cursor: pointer;
  padding: 0 10px;
}

button {
  background-color: #324047;
  border: none;
  color: white;
  padding: 0 50px;
  height: 50px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
}

button:hover {
  background-color: #046291;
}

i {
  display: none; /* Hidden by default on larger screens */
}

p {
  font-size: 25px;
}

/* Media Queries for smaller screens */
@media (max-width: 1200px) {
  .nav-menu {
    display: auto;
    flex-direction: column;
    align-items: center;
  }

  .nav-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease-out;
    overflow: hidden;
    background-color: #080c1e;
  }

  .nav-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .open-menu {
    opacity: 1;
    visibility: visible;
    height: auto; /* Allow content height */
    margin-bottom: 20px;
  }
  /*@TODO: Closed menu takes up space after it is closed/*/
  .closed-menu {
    opacity: 0;
    visibility: hidden;
    height: 0px;
    overflow: hidden; /* Hide content */
  }

  .nav-items {
    flex-direction: column;
    width: 100%;
    display: flex;
  }

  i {
    display: block;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
}
</style>
