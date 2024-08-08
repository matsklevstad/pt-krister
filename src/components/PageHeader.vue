<template>
  <div id="sticky-header" class="nav-menu" ref="navMenu">
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
        <!--<li @click="navigateTo('reviews')">REFERANSER</li>-->
        <li @click="navigateTo('social')">SOSIALE MEDIER</li>
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
      showMobileMenu: false,
      initialHeaderHeight: 0,
    };
  },
  mounted() {
    this.initialHeaderHeight =
      document.querySelector(".sticky-header").clientHeight;
    document.addEventListener("mousedown", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  },
  methods: {
    navigateTo(section) {
      this.showMobileMenu = false;
      this.$emit("scrollTo", {
        sectionId: section,
        headerHeight: this.initialHeaderHeight,
      });
    },
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    handleClickOutside(event) {
      if (
        this.showMobileMenu &&
        this.$refs.navMenu &&
        !this.$refs.navMenu.contains(event.target)
      ) {
        this.showMobileMenu = false;
      }
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

i {
  display: none; /* Hidden by default on larger screens */
}

p {
  font-size: 25px;
  cursor: pointer;
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
    transition: opacity 0.5s linear, visibility 0.5s linear, height 0.5s linear;

    overflow: hidden;
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
    width: 100%;
  }

  button {
    width: 100%;
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
