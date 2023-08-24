import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router instance
import store from './store';   // Import your Vuex store instance

createApp(App).use(router).use(store).mount('#app');
