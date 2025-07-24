import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import App from './App.vue';
import quasarUserOptions from './quasar-user-options';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(Quasar, quasarUserOptions);
app.mount('#app');
