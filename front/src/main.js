import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import PrimeVue from "primevue/config";
import Ripple from "primevue/ripple";
import Tooltip from "primevue/tooltip";
import ToastService from "primevue/toastservice";
import StyleClass from 'primevue/styleclass';

import mitt from "mitt";
import './assets/styles.scss';

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.$table = console.table;

app
    .directive("ripple", Ripple)
    .directive("tooltip", Tooltip)
    .directive('styleclass', StyleClass)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .mount('#app')
