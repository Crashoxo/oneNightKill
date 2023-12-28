import { defineStore } from "pinia";
import { Router } from "vue-router";
import { apiUserLogIn, apiUserLogOut } from "../Api/service";

interface gameDataState {
    page: string;
    name: string;
    language: string;
    body: string;
    head: string;
    hat: string;
    token: string;
}

// Vue層傳入的帳號資料
interface userProfile {
    name: string;
    language: string;
    body: string;
    head: string;
    hat: string;
    token: string;
}

export const useGameData = defineStore("gameData", {
    state: (): gameDataState => ({
        //  預設頁面
        page: "initialPage",
        //  預設帳號資料
        name: "123",
        language: "",
        body: "",
        head: "",
        hat: "",
        // token
        token: "",
    }),

    getters: {
        getPage(): string {
            return this.page;
        },
        getProfile(): object {
            const { name, language, body, head, hat, token } = this;
            return { name, language, body, head, hat, token };
        },
    },

    actions: {
        // 設定頁面
        setPage(newPage: string, router: Router) {
            this.page = newPage;
            router.push(this.page);
        },
        // 登入
        async setProfile(profile: userProfile, userAccountData: Object) :Promise<void> {
            console.log("抓API會員資料");
            try {
                const response = await apiUserLogIn(userAccountData);
                console.log("结果", response);

                // 寫入cookie
                const { token, expired } = response; //token、expired = data內的token、expired
                console.log(token, expired);
                document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;

                // 從cookie hexToken拿出token
                const pickCookieToken = document.cookie.replace(
                    /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
                    "$1"
                );
                console.log(pickCookieToken);
                
                // 後端API要做一個判斷，如果沒有此帳號，就回傳success就回傳false
                // EX:
                // message: "登入失敗"
                // success: false
                // token: ""
                if (response.success) {
                    //todo: 取得後端資料就不用假資料了，該段刪除
                    const userTempData = {
                        name: "Crash",
                        language: "zh-en",
                        body: "F",
                        head: "01",
                        hat: "01",
                        token: pickCookieToken,
                    };
                    const { name, language, body, head, hat, token } = userTempData;
                    // this.name = response.name;
                    this.name = name;
                    this.language = language;
                    this.body = body;
                    this.head = head;
                    this.hat = hat;
                    this.token = token;
                    
                } else {
                    console.log("查無此帳號！視為快速登入");
                    const { name, language, body, head, hat, token } = profile;
                    this.name = name;
                    this.language = language;
                    this.body = body;
                    this.head = head;
                    this.hat = hat;
                    this.token = token;
                }
            } catch (error) {
                console.log("API讀取失敗！", error);
            }
        },
        // 登出
        async setLogOut():Promise<void> {
            console.log("抓API會員資料");
            try {
                const response = await apiUserLogOut({ token: this.token });
                console.log("结果", response);
                // 後端API要做一個判斷，如果失敗回應，就回傳success就回傳false
                // EX:
                // {
                //     "success": true,
                //     "message": "已登出"
                //   }
                if (response.success) {
                    this.name = '';
                    this.language = '';
                    this.body = '';
                    this.head = '';
                    this.hat = '';
                    this.token = '';
                } else {
                    console.log("已登出狀況,請重新登入");
                    this.name = '';
                    this.language = '';
                    this.body = '';
                    this.head = '';
                    this.hat = '';
                    this.token = '';
                }
            } catch (error) {
                console.log("API讀取失敗！", error);
            }
        },
    },
});