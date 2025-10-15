import { createApp } from 'vue';
import App from './App.vue';
import "./style.css"
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
// import '@vuepic/vue-datepicker/dist/main.css'

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

// App.component('VueDatePicker', VueDatePicker);

createApp(App).use(router).use(pinia).mount('#app');