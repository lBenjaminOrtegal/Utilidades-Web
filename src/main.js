import { createApp } from 'vue';
import App from './App.vue';
import "./style.css"
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App).use(router).use(pinia).mount('#app');