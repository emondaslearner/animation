import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

createApp(App).mount('#app')
