<template>
  <div id="sticky-header" class="nav-menu" ref="navMenu">
    <div class="nav-buttons">
      <p
        class="logo"
        @click="navigateTo('about')"
        tabindex="0"
        @keydown.enter="navigateTo('start')"
        @keydown.space="navigateTo('start')"
      >
        COACH | PT KRISTER SÆVIK
      </p>
      <i
        @click="showMenu"
        class="fa fa-bars"
        @keydown.enter="showMenu"
        @keydown.space="showMenu"
        tabindex="0"
      ></i>
    </div>
    <div
      class="nav-content"
      :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
    >
      <ul class="nav-items">
        <li
          @click="navigateTo('about')"
          tabindex="0"
          @keydown.enter="navigateTo('about')"
          @keydown.space="navigateTo('about')"
        >
          <span role="img" aria-label="Grinning face">😁</span> Om meg
        </li>
        <li
          @click="navigateTo('services')"
          tabindex="0"
          @keydown.enter="navigateTo('services')"
          @keydown.space="navigateTo('services')"
        >
          <span role="img" aria-label="Package">📦</span> Tjenester
        </li>
        <li
          @click="navigateTo('reviews')"
          tabindex="0"
          @keydown.enter="navigateTo('reviews')"
          @keydown.space="navigateTo('reviews')"
        >
          <span role="img" aria-label="Trophy">🏆</span> Kundeanmeldelser
        </li>
        <li
          @click="navigateTo('faq')"
          tabindex="0"
          @keydown.enter="navigateTo('faq')"
          @keydown.space="navigateTo('faq')"
        >
          <span role="img" aria-label="Speech bubble">💬</span> Spørsmål og svar
        </li>
        <li
          @click="navigateTo('social')"
          tabindex="0"
          @keydown.enter="navigateTo('social')"
          @keydown.space="navigateTo('social')"
        >
          <span role="img" aria-label="Rocket">🚀</span> Sosiale medier
        </li>
      </ul>
      <button @click="navigateTo('contact-me')">Kontakt meg</button>
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
  box-shadow: 0 4px 10px black; /* Nice shadow */

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
  gap: 40px;
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
  font-style: bold;
  transition: 0.3s ease;
  transform: scale(1.2);
  color: gray;
}

i {
  display: none; /* Hidden by default on larger screens */
}

.logo {
  font-size: 25px;
  cursor: pointer;
  user-select: none;
  font-weight: 100;
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
