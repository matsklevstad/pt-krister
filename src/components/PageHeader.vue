<template>
  <div id="sticky-header" class="nav-menu" ref="navMenu">
    <div class="nav-buttons">
      <p class="logo" @click="navigateTo('start')">COACH | PT KRISTER SÆVIK</p>
      <i @click="showMenu" class="fa fa-bars"></i>
    </div>
    <div
      class="nav-content"
      :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
    >
      <ul class="nav-items">
        <li @click="navigateTo('about')"><span>😁</span> OM MEG</li>
        <li @click="navigateTo('services')"><span>📦</span> TJENESTER</li>
        <li @click="navigateTo('reviews')"><span>🏆</span> KUNDEANMELDELSER</li>
        <li @click="navigateTo('faq')"><span>💬</span> SPØRSMÅL OG SVAR</li>
        <li @click="navigateTo('social')"><span>🚀 </span>SOSIALE MEDIER</li>
      </ul>
      <button @click="navigateTo('contact-me')">KONTAKT MEG</button>
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
    window.addEventListener("scroll", this.handleScroll); // Add scroll event listener
  },
  beforeUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("scroll", this.handleScroll); // Remove scroll event listener
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
    handleScroll() {
      if (this.showMobileMenu) {
        this.showMobileMenu = false;
      }
    },
  },
};
</script>

<style scoped>
.nav-menu {
  background-color: var(--primary-background-color);
  padding-left: 2.5%;
  padding-right: 2.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  flex-wrap: nowrap;
}

.nav-items {
  display: flex;
  gap: 5px;
  font-size: 15px;
  list-style: none;
  flex-wrap: nowrap;
}

li {
  cursor: pointer;
  padding: 0 10px;
}

li:hover {
  text-decoration: underline;
}

i {
  display: none; /* Hidden by default on larger screens */
}

.logo {
  cursor: pointer;
  font-size: 25px;
}

button {
  font-size: 15px;
  padding: 10px 20px;
}

span {
  display: none;
}

@media (min-width: 950px) and (max-width: 1500px) {
  .nav-content {
    width: 80%;
  }

  .logo {
    font-size: 15px;
  }
  button {
    font-size: 12px;
    padding: 10px 20px;
  }
  li {
    font-size: 12px;
  }
  .nav-items {
    gap: 2px;
  }
}

/* Media Queries for smaller screens */
@media (max-width: 950px) {
  .nav-menu {
    display: auto;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 10px var(--primary-background-color-opacity); /* Nice shadow */
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
    font-size: 15px;
  }
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
    gap: 15px;
    font-size: 15px;
  }

  .logo {
    font-size: 20px;
  }

  i {
    display: block;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }

  span {
    display: inline;
  }
}
</style>
