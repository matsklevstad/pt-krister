<template>
  <form @submit.prevent="sendEmail">
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
          required
          placeholder="950 00 000"
        />
      </div>
      <div class="form-group">
        <label for="telephone">Hva er epostadressen din?</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="ola@nordmann.no"
        />
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
    <button type="submit">SEND MELDING</button>
  </form>
</template>

<script>
import { reactive } from "vue";
import FormData from "form-data";
import Mailgun from "mailgun.js";

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
    };
  },
  methods: {
    // Your component's methods go here
    sendEmail() {
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
        to: ["matsi99@live.com"],
        subject: "Ny forespørsel hos PT-Krister.no",
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
        .then((msg) => {
          console.log(msg);
          alert(
            "Takk for din henvendelse! Jeg vil kontakte deg så snart som mulig."
          );
        })
        .catch((err) => {
          console.log(err);
          alert("Beklager, det oppstod en feil. Vennligst prøv igjen senere.");
        });
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 7px 29px 0px;
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
  background-color: var(--secondary-background-color);
  align-items: center;
  text-align: left;
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
  textarea {
    font-size: 15px;
  }

  .text-container {
    padding-left: 5%;
    padding-right: 5%;
    margin-bottom: 75px;
  }
}
</style>
