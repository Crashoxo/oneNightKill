import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './route/index'
// 讓所有頁面都可以吃到 tailwind 的 css
import './assets/css/tailwind.css'

// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

// axios匯入
import axios from './Api/request'


const app = createApp(App)

// element-plus
app.use(ElementPlus);

// axios
app.config.globalProperties.$http = axios;

app.use(router)
app.use(createPinia())
app.mount('#app')