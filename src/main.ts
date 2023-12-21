import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './route/index'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')