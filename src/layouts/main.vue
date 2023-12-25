<script setup lang="ts">
// 登入畫面、紙娃娃、登入後畫面(不含room)
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useGameDate } from "@/stores/game_data";
import { storeToRefs } from "pinia";


interface Option {
  label: string;
  value: string;
}

const languageOptions: Option[] = [
  { label: "繁體中文", value: "language_tw" },
  { label: "English", value: "language_en" },
  { label: "簡體中文", value: "language_cn" },
];

// 取得使用者keyin的帳號密碼
//
let userAccount = ref("littlegirlrou@yahoo.com.tw");
let userPassword = ref("irisiris");
let selectLanguage = ref("language_tw");

// 推Router
const gameDate = useGameDate();
const router = useRouter();
const crateAccount = () => gameDate.setPage("/crateAccount", router);

const { getProfile } = storeToRefs(gameDate);

// const curLang = computed(() => gameDate.getProfile().language);

// 登入、快速登入
// 沒有資料或DB沒資料，視為快速登入
function logIn(): void {
    // 快速登入資料，控在版面上
    const userFastPass = {
      name: userAccount.value,
      language: selectLanguage,
      body: "F",
      head: "01",
      hat: "01",
    };

    // API需要傳入的資料
    const userAccountData = {
        username: userAccount.value,
        password: userPassword.value,
    };

    // 登入
    gameDate.setProfile(userFastPass, userAccountData);

    console.log("getProfile", gameDate.page);
    console.log("getProfile", gameDate.name);
}


onMounted(() => {
  console.log("mounted");
});
</script>

<template>
  <div class="login-and-doll ">
    <!-- 登入畫面 -->
    <div class="login-area">
      <!-- 帳號 -->
      <div class="account-area">
        <div class="account-icon"></div>
        <input type="text" v-model="userAccount" required/>
      </div>
      <div class="account-area">
        <div class="password-icon"></div>
        <input type="text" v-model="userPassword" />
      </div>
      <!-- 語系選擇 -->
      <select v-model="selectLanguage">
        <option value="">Please select</option>
        <option v-for="language in languageOptions" :key="language.value" :value="language.value">
          {{ language.label }}
        </option>
      </select>
      <div>Selected value: {{ selectLanguage }}</div>
      <div>{{ userAccount }} {{ userPassword }}</div>
      <div class="log-in-and-crate-account flex flex-row">
        <button class="main-btn " @click="logIn">登入/快速登入</button>
        <button class="main-btn" @click="crateAccount">註冊帳號</button>
      </div>

    </div>
    <div class="doll-area">
      <!-- 紙娃娃 -->
      {{ gameDate.name }}
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

.login-and-doll {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.login-area,
.doll-area {
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
  mask-image: url("@/assets/icon/user-regular.svg");
}

.password-icon {
  mask-image: url("@/assets/icon/lock-solid.svg");
}

.account-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 1.8rem;
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
  text-align: center;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -0.375rem 0.5rem 0.625rem rgba(81, 41, 10, 0.1), 0rem 0.125rem 0.125rem rgba(81, 41, 10, 0.2);
}

.main-btn:active {
  background-color: #f3f4f6;
  box-shadow: -1px 2px 5px rgba(81, 41, 10, 0.15), 0px 1px 1px rgba(81, 41, 10, 0.15);
  transform: translateY(0.125rem);
}
</style>
