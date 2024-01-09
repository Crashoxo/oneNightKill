import { defineStore } from "pinia";
import { Router } from "vue-router";
import { apiUserLogIn, apiUserLogOut } from "../Api/service";

interface gameDataState {
    page: string;
    name: string;
    language: string;
    body: string;
    hair: string;
    hat: string;
    token: string;
}

// Vue層傳入的帳號資料
interface userProfile {
    name: string;
    language: string;
    body: string;
    hair: string;
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
        body: "bodyF",
        hair: "hair01",
        hat: "",
        // token
        token: "",
    }),

    getters: {
        // 取得頁面
        getPage(): string {
            return this.page;
        },
        // 取得doll資料
        getProfile(): object {
            const { name, language, body, hair, hat, token } = this;
            return { name, language, body, hair, hat, token };
        },
    },

    actions: {
        // 設定頁面
        setPage(newPage: string, router: Router) {
            this.page = newPage;
            router.push(this.page);
        },
        // 登入
        // spyToken寫入cookie
        async setProfile(profile: userProfile, userAccountData: Object) :Promise<void> {
            try {
                console.log("抓API會員資料", userAccountData);
                const jsonResponse = await apiUserLogIn(userAccountData);
                const userData = JSON.parse(JSON.stringify(jsonResponse));
                // {
                //     "name": "Crash",
                //     "language": "zh-en",
                //     "body": "bodyM",
                //     "hair": "hair05",
                //     "hat": "hat02",
                //     "token": "1234567890",
                //     "expired": "2021-01-01 00:00:00",
                //     "success": true,
                //     "message": "登入成功"
                // }

                
                const { name, language, body, hair, hat, token, expired } = userData; //token、expired = data內的token、expired
                console.log("token", token);
                
                // 寫入cookie
                document.cookie = `spyToken=${token}; expired=${new Date(expired)}`;

                if (userData.success) {
                    this.name = name;
                    this.language = language;
                    this.body = body;
                    this.hair = hair;
                    this.hat = hat;
                    this.token = token;
                    
                } else {
                    console.log("查無此帳號！視為快速登入");
                    const { name, language, body, hair, hat, token } = profile;
                    document.cookie = `spyToken=${token}`; // 寫入cookie
                    console.log("快速登入Data", name, language, body, hair, hat, token);
                    this.name = name;
                    this.language = language;
                    this.body = body;
                    this.hair = hair;
                    this.hat = hat;
                    this.token = token;
                }
            } catch (error) {
                console.log("API讀取失敗！", error);
            }
        },
        // 登出
        // spyToken清掉
        async setLogOut():Promise<void> {
            console.log("抓API會員資料");
            try {
                const jsonResponse = await apiUserLogOut({ token: this.token });
                const userData = JSON.parse(JSON.stringify(jsonResponse));
                console.log("登出结果", userData);
                document.cookie = `spyToken=`; // 寫入cookie

                if (userData.success) {
                    this.name = '';
                    this.language = '';
                    this.body = 'bodyF';
                    this.hair = 'hair01';
                    this.hat = '';
                    this.token = '';
                } else {
                    console.log("已登出狀況,請重新登入");
                    this.name = '';
                    this.language = '';
                    this.body = 'bodyF';
                    this.hair = 'hair01';
                    this.hat = '';
                    this.token = '';
                }
            } catch (error) {
                console.log("API讀取失敗！", error);
            }
        },
        // 註冊帳號 寫入資料庫 + 寫入store
        setRegisterData(crateUserProfile: Object): void {
            // todo註冊成功
            console.log("註冊帳號", crateUserProfile);
            // todo註冊失敗
            // todoAPI失敗
        },
        // 設定doll資料
        setDoll(DollItem: { body: string, hair: string, hat: string }) {
            this.body = DollItem.body;
            this.hair = DollItem.hair;
            this.hat = DollItem.hat;
        },
        // 設定語言
        setLanguage(selectLanguage: string ) {
            this.language = selectLanguage;
        },
    },
});