<template>
  <div class="container">
    <div
      class="header"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <p>SPØRSMÅL OG SVAR</p>
      <h1>💬 Ofte stilte spørsmål</h1>
    </div>
    <div class="faq-accordion-container">
      <div
        v-for="(item, index) in questionList"
        :key="index"
        class="faq-item"
        data-aos-duration="1000"
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
            <p v-html="item.answer"></p>
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
          question: "Hvordan booker jeg en PT-time?",
          answer:
            "Du kan enkelt booke en time ved å kontakte meg direkte via e-post eller telefon. Jeg kan også nås ved å benytte <a href='#contact-form'>kontaktskjemaet</a>.",
        },
        {
          question: "Hva er prisen for en PT-time?",
          answer:
            "Prisen for en PT-time varierer avhengig av lengden på timen og om du ønsker en pakke med flere timer. Ta kontakt for mer informasjon om priser og tilgjengelighet.",
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
  max-width: var(--content-max-width);
  min-height: 90vh;
  flex-direction: column;
  padding-left: var(--section-pad-x);
  padding-right: var(--section-pad-x);
  overflow: hidden;
  box-sizing: border-box;
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
  font-size: 20px;
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

@media (min-width: 769px) and (max-width: 1023px) {
  .faq-question {
    font-size: 18px;
  }
  .faq-answer {
    font-size: 17px;
  }
}

@media (max-width: 768px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    min-height: 70vh;
    padding-bottom: 40px;
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

  .faq-question {
    padding: 10px;
    font-size: 15px;
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
