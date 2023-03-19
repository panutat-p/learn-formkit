import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import '@formkit/themes/genesis';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import App from './App.vue';

createApp(App).use(plugin, defaultConfig).mount('#app');
