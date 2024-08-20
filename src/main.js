import { createApp } from "vue";
import MainApp from "./MainApp.vue";
import { inject } from "@vercel/analytics";

const app = createApp(MainApp);

// Use the Vercel Analytics plugin
app.use(inject);

app.mount("#app");
