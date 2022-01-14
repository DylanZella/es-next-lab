import {createApp} from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';
import {store, key} from '@/store/store';

// TODO: 2021-10-22 Current not care size, which should be minimal in the future.
const app = createApp(App);

// 传入 injection key
app.use(store, key);

app.mount('#app');
