import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVueNext } from "bootstrap-vue-next";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

createApp(App)
.use(BootstrapVueNext)
.use(router)
.mount('#app')
