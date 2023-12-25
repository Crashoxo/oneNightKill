import { defineStore } from "pinia";
import { Router } from "vue-router";
import { getSeller } from "../Api/service";

interface gameDataState {
    page: string;
    name: string;
    language: string;
    body: string;
    head: string;
    hat: string;
}

interface userProfile {
    name: string;
    language: string;
    body: string;
    head: string;
    hat: string;
}

export const useGameDate = defineStore("gameData", {
    state: (): gameDataState => ({
        page: "initialPage",
        name: "123",
        language: "",
        body: "",
        head: "",
        hat: "",
    }),

    getters: {
        getPage(): string {
            return this.page;
        },
        getProfile(): object {
            const { name, language, body, head, hat } = this;
            return { name, language, body, head, hat };
        },
    },

    actions: {
        setPage(newPage: string, router: Router) {
            this.page = newPage;
            router.push(this.page);
        },
        async setProfile(profile: userProfile, userAccountData: Object) {
            console.log("抓API會員資料");
            try {
                const response = await getSeller(userAccountData);
                console.log("结果", response);
                if (response.success) {
                    const userTempDate = {
                        name: "Crash",
                        language: "language_en",
                        body: "F",
                        head: "01",
                        hat: "01",
                    };
                    const { name, language, body, head, hat } = userTempDate;
                    this.name = name;
                    this.language = language;
                    this.body = body;
                    this.head = head;
                    this.hat = hat;
                } else {
                    console.log("查無此帳號！視為快速登入");
                    const { name, language, body, head, hat } = profile;
                    this.name = name;
                    this.language = language;
                    this.body = body;
                    this.head = head;
                    this.hat = hat;
                }
            } catch (error) {
                console.log("获取失败！", error);
            }
        },
    },
});