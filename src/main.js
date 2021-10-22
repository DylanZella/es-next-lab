import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import "tailwindcss/tailwind.css"


// TODO: 2021-10-22 Current not care size, which should be minimal in the future.
const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')