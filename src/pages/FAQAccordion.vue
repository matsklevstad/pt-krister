<template>
  <div class="container">
    <div class="header" data-aos="fade-up" data-aos-delay="300">
      <p>SPØRSMÅL OG SVAR</p>
      <h1>💬 Ofte stilte spørsmål</h1>
    </div>
    <div class="faq-accordion-container">
      <div
        v-for="(item, index) in questionList"
        :key="index"
        class="faq-item"
        data-aos-duration="600"
        :data-aos-delay="600 + index * 50"
        data-aos="fade-up"
      >
        <div class="faq-question" @click="toggleItem(index)">
          <h3>{{ item.question }}</h3>
          <span style="font-size: 25px">
            <i v-if="activeIndex === index" class="fa-solid fa-minus"></i>
            <i v-else class="fa-solid fa-plus"></i>
          </span>
        </div>
        <transition
          name="accordion"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div v-show="activeIndex === index" class="faq-answer">
            <p>{{ item.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQAccordion",
  data() {
    return {
      activeIndex: null,
      questionList: [
        {
          question: "Hva kan jeg forvente av en PT-time?",
          answer:
            "En PT-time er tilpasset dine mål og behov. Vi jobber sammen for å utvikle en treningsplan som passer deg, med fokus på riktig teknikk og effektivitet.",
        },
        {
          question: "Tilbyr du online coaching?",
          answer:
            "Ja, jeg tilbyr online coaching hvor vi jobber sammen via video eller telefon. Jeg gir deg skreddersydde treningsplaner og følger opp din progresjon.",
        },
        {
          question: "Hvordan booker jeg en PT-time?",
          answer:
            "Du kan enkelt booke en time ved å kontakte meg direkte via e-post eller telefon. Jeg kan også nås ved å benytte kontaktskjemaet i bunn av nettsiden.",
        },
      ],
    };
  },
  methods: {
    toggleItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    beforeEnter(el) {
      el.style.maxHeight = "0";
      el.style.padding = "0 1rem";
    },
    enter(el) {
      el.offsetHeight;
      el.style.transition = "max-height 0.3s ease-out, padding 0.3s ease-out";
      el.style.maxHeight = el.scrollHeight + "px";
      el.style.padding = "1rem";
    },
    leave(el) {
      el.style.transition = "max-height 0.3s ease-out, padding 0.3s ease-out";
      el.style.maxHeight = "0";
      el.style.padding = "0 1rem";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 20%;
  overflow: hidden;
}

.faq-accordion-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  width: 100%;
}

.faq-item {
  border-radius: 8px;
}

.header p {
  font-size: var(--header-p-large-device);
}

h1 {
  font-size: var(--header-h1-large-device);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--secondary-background-color);
  cursor: pointer;
  font-size: 25px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.faq-answer {
  padding: 1rem;
  background-color: #f9f9f9;
  color: black;
  font-size: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .container {
    padding: 0px;
    padding-top: 5%;
    min-height: 70vh;
    padding-bottom: 10%;
  }

  .header {
    padding-left: 5%;
    padding-right: 5%;
  }

  .header p {
    font-size: var(--header-p-small-device);
  }

  h1 {
    font-size: var(--header-h1-small-device);
  }

  h3 {
    font-size: 20px;
  }

  .faq-question {
    padding: 10px;
  }

  .faq-accordion-container {
    width: 95%;
    gap: 20px;
  }

  .faq-accordion-container p {
    font-size: 15px;
    margin: 0;
  }
}
</style>
