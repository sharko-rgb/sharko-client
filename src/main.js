import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from './router/router';
import cors from "cors";

const app = createApp(App)

components.forEach(element => {
    app.component(element.name, element)
});

app
    .use(cors)
    .use(router)
    .mount('#app')