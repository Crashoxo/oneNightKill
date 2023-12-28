import axios from 'axios';

// 創建axios
const service = axios.create({
    // baseURL: '/api',
    baseURL: 'https://vue3-course-api.hexschool.io/',
    timeout: 80000
});

// 添加 請求攔截器
service.interceptors.request.use(
    (config: any) => {
        // 抓cookie的value
        let token: string = document.cookie //此處换成自己拿到的token，通常存在在cookie或store里面

        if (token) {
            // 如果 config.headers 不存在，初始化為空物件
            config.headers = config.headers || {};

            // 視需要可自行加入token，此處將token加入到headers中
            config.headers['hexToken'] = token;
            config.headers.Authorization = token;
        }
        return config
    },
    error => {
        // Do something with request error
        console.log("出錯啦", error) // for debug
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response: any) => {
        return response.data
    },    /*  */
    error => {
        console.log('err' + error) // for debug
        if (error.response.status == 403) {
            // ElMessage.error('錯了')
            console.log('錯了');

        } else {
            // ElMessage.error('伺服器請求錯誤，請稍後再試')
            console.log('伺服器請求錯誤，請稍後再試');
        }
        return Promise.reject(error)
    }
)
export default service;