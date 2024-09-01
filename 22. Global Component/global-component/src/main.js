import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import HelloWorld from './components/HelloWorld.vue'


const app = createApp(App);
app.component("HelloWorld", HelloWorld);

app.mount('#test');