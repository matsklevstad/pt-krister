<template>
  <div class="container">
    <img style="width: 100%" src="../assets/layered-wave.svg" />
    <div class="text-container">
      <h1>Kontaktinformasjon</h1>
      <div class="links-container">
        <p>
          <i class="fa-solid fa-envelope"></i>
          <strong> EPOST:</strong>
          <br />
          <a href="mailto:krister-saevik@gmail.com">krister-saevik@gmail.com</a>
        </p>
        <p>
          <i class="fa-solid fa-phone"></i>
          <strong> TELEFON:</strong>
          <br />
          <a href="tel:+4799385083">+47 993 85 083</a>
        </p>
        <p>
          <i class="fa-solid fa-id-card"></i>
          <strong> ORG.NR:</strong>
          <br />
          <a
            href="https://data.brreg.no/enhetsregisteret/oppslag/enheter/930356476"
          >
            930 356 476
          </a>
        </p>
      </div>

      <form @submit.prevent="sendEmail">
        <h2>✉️ Send meg en uforpliktende forespørsel!</h2>
        <div class="form-group">
          <label for="name">Hva heter du?</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            placeholder="Mats Klevstad"
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
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import FormData from "form-data";
import Mailgun from "mailgun.js";

// Reactive form state
const form = reactive({
  name: "",
  telephone: "",
  email: "",
  message: "",
});

const sendEmail = () => {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.VUE_APP_MAILGUN_API_KEY,
  });
  const timestamp = new Date();
  const emailData = {
    from: `${form.name} <${"mailgun@" + process.env.VUE_APP_MAILGUN_DOMAIN}>`,
    to: ["matsi99@live.com"],
    subject: "Ny forespørsel hos PT-Krister.no",
    text: `Du har mottatt en ny melding fra ${form.name}:\n\n${
      form.message
    } \n\n \nKontaktinformasjon:\nTelefon: ${form.telephone}\nE-post: ${
      form.email
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
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.text-container {
  background: linear-gradient(
    to bottom,
    rgb(21, 27, 41) 0%,
    var(--primary-background-color) 100%
  );
  padding-left: 10%;
  margin-bottom: 200px;
  padding-right: 20%;
}

.links-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
}

a {
  color: white;
}

i {
  margin-right: 2px;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 40px;
  text-align: center;
}

p {
  font-size: 20px;
}

/* Form Styles */
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;
  justify-content: center;
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
