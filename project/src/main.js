import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import PrimeVue from "primevue/config";
import Ripple from "primevue/ripple";
import Tooltip from "primevue/tooltip";
import ToastService from "primevue/toastservice";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.$table = console.table;

app
    .directive("ripple", Ripple)
    .directive("tooltip", Tooltip)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .mount('#app')
