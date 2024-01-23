import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavView from './components/Nav.vue/'
import FooterView from './components/Footer.vue/'

const app = createApp(App)

app.use(router)

app.component('NavView',NavView)
app.component('FooterView',FooterView)


app.mount('#app')
