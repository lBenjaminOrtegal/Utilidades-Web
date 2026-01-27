import { createApp } from 'vue';
import App from './App.vue';
import "./style.css"
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
<<<<<<< HEAD
=======
// import '@vuepic/vue-datepicker/dist/main.css'
>>>>>>> 41d4f36c8f56e580d5d458c6b123a417eb15094c

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App).use(router).use(pinia).mount('#app');