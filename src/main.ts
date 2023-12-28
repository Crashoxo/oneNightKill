import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './route/index'

// 讓所有頁面都可以吃到 tailwind 的 css
import './assets/css/tailwind.css'

// 使用 vue-i18n
// 方法: i18n/index > main.ts > App.vue > 看哪裡要用就import + const { t } = useI18n();
import i18n from './i18n/index';

// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

// axios匯入
import axios from './Api/request'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus); // element-plus
app.config.globalProperties.$http = axios; // axios
app.use(i18n);
app.mount('#app')