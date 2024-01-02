<script setup lang="ts">
// 登入畫面、紙娃娃、登入後畫面(不含room)
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useGameData } from "@/stores/game_data";
// 使用語系
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import SelectLanguageOption from "@/components/SelectLanguageOption.vue";
import DollSystem from "@/components/Doll/DollSystem.vue";
import ShowDoll from "@/components/Doll/ShowDoll.vue";

// 註冊帳號名稱用
let crateName = ref("");
// 取得使用者key的帳號密碼
let userAccount = ref("littlegirlrou@yahoo.com.tw");
let userPassword = ref("irisiris");

// 推Router
const gameData = useGameData();
const router = useRouter();
// const crateAccount = () => gameData.setPage("/crateAccount", router);

// token 檢查是否已登入
const userToken = computed(() => gameData.getProfile.token);

// 如果gameData.Profile改變，預設改變
const userProfile = computed(() => gameData.getProfile);

// 是否註冊中
const userRegistering = ref(false);

// 登入、快速登入
// 沒有資料或DB沒資料，視為快速登入
function logIn(): void {
    const { language, body, hair, hat } = userProfile.value;
    // 快速登入資料，控在版面上
    // 正常登入控在API的DB
    const userFastPass = {
        name: userAccount.value,
        language: language, // selectLanguage.value寫入store
        body: body, // dollCategoryId.value寫入store
        hair: hair, // dollCategoryId.value寫入store
        hat: hat, // dollCategoryId.value寫入store
        token: "tempToken",
    };

    // API需要傳入的資料
    const userAccountData = {
        username: userAccount.value,
        password: userPassword.value,
    };

    // 登入
    gameData.setProfile(userFastPass, userAccountData);
}

// 登出
function logout(): void {
    gameData.setLogOut();
}

// 註冊帳號
function registeredAccount(): void {
    // 註冊資料
    const registerAccount = {
        name: crateName.value,
        username: userAccount.value,
        password: userPassword.value,
    };

    // 打API
    gameData.setRegisterData(registerAccount);

    // 退出註冊
    // API成功才轉跳，並且直接登入
    userRegistering.value = false;
}

onMounted(() => {});
</script>

<template>
    <div class="login-and-doll-system">
        <div class="login-and-user-doll">
            <!-- 登入後顯示 -->
            <div
                v-if="userToken"
                class="login-area w-full h-5/6 flex flex-col justify-unset items-center"
            >
                <ShowDoll />
                <p>{{ gameData.name }}</p>
                <SelectLanguageOption class="m-1"/>
                <div class="log-in-and-crate-account flex flex-row m-2">
                    <button class="main-btn" @click="">
                        {{ $t("S_LOGIN") }}進入房間
                    </button>
                    <button class="main-btn" @click="logout">登出</button>
                </div>
            </div>
            <!-- 註冊畫面 -->
            <div
                v-else-if="userRegistering"
                class="login-area w-full h-5/6 flex flex-col justify-unset items-center"
            >
                <ShowDoll />
                <div class="account-area">
                    <div class="account-icon"></div>
                    <input type="text" v-model="crateName" />
                </div>
                <div class="account-area">
                    <div class="account-icon"></div>
                    <input type="text" v-model="userAccount" required />
                </div>
                <div class="account-area">
                    <div class="password-icon"></div>
                    <input type="text" v-model="userPassword" required />
                </div>
                <SelectLanguageOption class="m-1"/>
                <div class="log-in-and-crate-account flex flex-row m-2">
                    <button class="main-btn" @click="registeredAccount">
                        註冊
                    </button>
                </div>
            </div>
            <!-- 登入前畫面 -->
            <div
                v-else
                class="login-area w-full h-5/6 flex flex-col justify-unset items-center"
            >
                <!-- {{ t('S_COMMON_ES_TIME') }} -->
                <ShowDoll />
                <div class="account-area">
                    <div class="account-icon"></div>
                    <input type="text" v-model="userAccount" required />
                </div>
                <div class="account-area">
                    <div class="password-icon"></div>
                    <input type="text" v-model="userPassword" />
                </div>
                <SelectLanguageOption class="m-2"/>
                <div class="log-in-and-crate-account flex flex-row m-1">
                    <button class="main-btn" @click="logIn">
                        {{ $t("S_LOGIN") }} 登入/快速登入
                    </button>
                    <button class="main-btn" @click="userRegistering = true">
                        註冊帳號
                    </button>
                </div>
            </div>
        </div>

        <!-- 紙娃娃 -->
        <div class="doll-area-system">
            <DollSystem />

            <!-- element -->
            <!-- <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
$mind-bg-color: #f5f5f5;

.login-and-doll-system {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
}

.login-and-user-doll,
.doll-area-system {
    flex-grow: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 2px solid $mind-bg-color;
}

.account-icon,
.password-icon {
    width: 1.25rem;
    height: 1.25rem;
    padding-right: 1.5rem;
    mask-repeat: no-repeat;
    mask-size: contain;
    background-color: $mind-bg-color;
}

.account-icon {
    mask-image: url("@/assets/icon/main/user-regular.svg");
}

.password-icon {
    mask-image: url("@/assets/icon/main/lock-solid.svg");
}

.account-area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 1.8rem;
    margin: 0.1rem;
}

// 按鈕
.main-btn {
    background-color: transparent;
    background-image: linear-gradient(to bottom, #fff, #f8eedb);
    border: 0 solid #e5e7eb;
    border-radius: 0.5rem;
    color: #482307;
    cursor: pointer;
    display: flex;
    font-size: 100%;
    font-weight: 700;
    line-height: 1.5rem;
    outline: 0.125rem solid transparent;
    padding: 0.5rem 1.5rem;
    margin-right: 0.5rem;
    text-align: center;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -0.375rem 0.5rem 0.625rem rgba(81, 41, 10, 0.1),
        0rem 0.125rem 0.125rem rgba(81, 41, 10, 0.2);
}

.main-btn:active {
    background-color: #f3f4f6;
    box-shadow: -1px 2px 5px rgba(81, 41, 10, 0.15),
        0px 1px 1px rgba(81, 41, 10, 0.15);
    transform: translateY(0.125rem);
}
</style>
