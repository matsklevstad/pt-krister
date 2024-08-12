<template>
  <div class="container">
    <div class="header" data-aos="fade-up" data-aos-delay="300">
      <p>SPØRSMÅL OG SVAR</p>
      <h1>💬 Ofte stilte spørsmål</h1>
    </div>
    <div class="faq-accordion">
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
        <transition name="accordion">
          <div v-if="activeIndex === index" class="faq-answer">
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
            "🙌🏻 En PT-time er tilpasset dine mål og behov. Vi jobber sammen for å utvikle en treningsplan som passer deg, med fokus på riktig teknikk og effektivitet.",
        },
        {
          question: "Tilbyr du online coaching?",
          answer:
            "😁 Ja, jeg tilbyr online coaching hvor vi jobber sammen via video eller telefon. Jeg gir deg skreddersydde treningsplaner og følger opp din progresjon. ",
        },
        {
          question: "Trenger jeg treningsutstyr for å starte?",
          answer:
            "📈 Det kommer an på målene dine. Vi kan starte med kroppsvektøvelser, men jeg anbefaler å investere i noe grunnleggende utstyr for å få mest ut av treningen.",
        },
        {
          question: "Hvordan booker jeg en PT-time?",
          answer:
            "📞 Du kan enkelt booke en time ved å kontakte meg direkte via e-post eller telefon.",
        },
      ],
    };
  },
  methods: {
    toggleItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
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

.faq-accordion {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 8px;
}
h1 {
  font-size: 35px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f7f7f7;
  color: black;
  cursor: pointer;
  font-size: 25px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.faq-answer {
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid #ddd;
  color: black;
  font-size: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}

.accordion-enter,
.accordion-leave-to {
  opacity: 0;
  height: 0;
  padding: 0 1rem;
  margin: 0;
}

span.open {
  font-weight: bold;
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

  h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }

  .faq-accordion {
    width: 95%;
  }

  .faq-accordion p {
    font-size: 15px;
  }
}
</style>
