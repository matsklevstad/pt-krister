<template>
  <form id="contact-form" @submit.prevent="sendEmail">
    <h2>✉️ Send meg en uforpliktende forespørsel!</h2>
    <div class="form-group">
      <label for="name">Hva heter du?</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        required
        placeholder="Ola Nordmann"
      />
    </div>
    <div class="form-group-two">
      <div class="form-group">
        <label for="telephone">Hva er telefonnummeret ditt?</label>
        <input
          type="tel"
          id="telephone"
          v-model="form.telephone"
          @input="validateTelephone"
          required
          placeholder="90207050"
        />
        <span v-if="telephoneError" class="error">{{ telephoneError }}</span>
      </div>
      <div class="form-group">
        <label for="email">Hva er epostadressen din?</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          @input="validateEmail"
          required
          placeholder="ola@nordmann.no"
        />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>
    </div>
    <div class="form-group">
      <label for="message">Hva gjelder det?</label>
      <textarea
        id="message"
        v-model="form.message"
        rows="4"
        required
        placeholder="Jeg ønsker å booke en PT-time!"
      ></textarea>
    </div>
    <button
      :disabled="!isFormValid"
      :style="{ opacity: isFormValid ? 1 : 0.5 }"
      type="submit"
    >
      SEND MELDING
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { openModal } from "jenesius-vue-modal";
import FeedbackModal from "@/modals/FeedbackModal.vue";

export default {
  name: "ContactForm",
  data() {
    return {
      form: reactive({
        name: "",
        telephone: "",
        email: "",
        message: "",
      }),
      telephoneError: null,
      emailError: null,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.form.name &&
        this.form.email &&
        this.emailError === null &&
        this.form.telephone &&
        this.telephoneError === null &&
        this.form.message
      );
    },
  },
  methods: {
    validateTelephone() {
      this.form.telephone = this.form.telephone.replace(/\s+/g, "");
      const phonePattern = /^[0-9]{8,10}$/;
      if (!phonePattern.test(this.form.telephone)) {
        this.telephoneError = "Telefonnummeret må være mellom 8 og 10 sifre.";
      } else {
        this.telephoneError = null;
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.form.email)) {
        this.emailError = "Vennligst oppgi en gyldig epostadresse.";
      } else {
        this.emailError = null;
      }
    },
    sendEmail() {
      this.validateTelephone();
      this.validateEmail();

      if (!this.telephoneError && !this.emailError) {
        const mailgun = new Mailgun(FormData);
        const mg = mailgun.client({
          username: "api",
          key: process.env.VUE_APP_MAILGUN_API_KEY,
        });
        const timestamp = new Date();
        const emailData = {
          from: `${this.form.name} <${
            "mailgun@" + process.env.VUE_APP_MAILGUN_DOMAIN
          }>`,
          to: ["matsi99@live.com", "krister@ntebb.no"],
          subject: "Ny forespørsel hos kristersaevik.no",
          text: `Du har mottatt en ny melding fra ${this.form.name}:\n\n${
            this.form.message
          } \n\n \nKontaktinformasjon:\nTelefon: ${
            this.form.telephone
          }\nE-post: ${
            this.form.email
          }\nMelding sendt: ${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`,
        };
        mg.messages
          .create(process.env.VUE_APP_MAILGUN_DOMAIN, emailData)
          .then(() => {
            openModal(FeedbackModal, {
              title: "Takk for meldingen!",
              description: "Jeg vil ta kontakt i løpet av kort tid.",
            });
            this.form.name = "";
            this.form.telephone = "";
            this.form.email = "";
            this.form.message = "";
          })
          .catch(() => {
            openModal(FeedbackModal, {
              title: "Ops, noe gikk galt!",
              description:
                "Meldingen din ble ikke sendt. Vennligst prøv igjen senere, eller ta kontakt med meg på telefon eller e-post.",
            });
          });
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
  background-color: var(--secondary-background-color);
  align-items: center;
  text-align: left;
  animation: box-shadow-animation 5s infinite;
}

@keyframes box-shadow-animation {
  0% {
    box-shadow: rgba(255, 255, 255, 0.7) 0px 7px 29px 0px;
  }
  50% {
    box-shadow: rgba(29, 37, 50, 0.7) 0px 7px 29px 0px;
  }
  100% {
    box-shadow: rgba(255, 255, 255, 0.7) 0px 7px 29px 0px;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 5px;
}

.form-group-two {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 70%;
  justify-content: space-between;
}

label {
  color: white;
  font-size: 20px;
  margin-top: 15px;
}

input,
textarea {
  padding: 10px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  font-size: 20px;
}

.error {
  color: red;
  font-size: 15px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 10px;
  }

  .form-group-two {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .form-group {
    width: 100%;
  }

  label,
  input,
  textarea,
  button {
    font-size: 15px;
  }

  .text-container {
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 75px;
  }
}
</style>
