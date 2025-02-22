import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './vuetify';
import router from '@/router/index'


const app = createApp(App);
app.use(vuetify); // Register Vuetify with Vue
app.use(router); // Register Vue Router with Vue
app.mount('#app');

