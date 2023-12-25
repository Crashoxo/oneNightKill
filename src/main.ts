import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './route/index'
// 讓所有頁面都可以吃到 tailwind 的 css
import './assets/css/tailwind.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')