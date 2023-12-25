<script setup lang="ts">
// 登入畫面、紙娃娃、登入後畫面(不含room)
import { onMounted, ref } from "vue";
import { computed } from 'vue';
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
let userAccount = ref('User-123');
let userPassword = ref('123');
let selectLanguage = ref('language_tw');

// 推Router
const gameDate = useGameDate();
const router = useRouter();
const crateAccount = () => gameDate.setPage("/crateAccount", router);


const { getProfile} =storeToRefs(gameDate);
// 快速登入之使用者名稱
const userName = ref("Crash");

// const curLang = computed(() => gameDate.getProfile().language);

// 登入、快速登入
// 符合時帶入帳號密碼資料及紙娃娃
// function logIn(userAccount: string, userPassword: string): void {
function logIn(): void {
  // 登入
  if (userAccount.value === "123" && userPassword.value === "123") {
    // todo: 取得後端資料後改這
    const userTempDate = {
      name: 'Crash',
      language: 'language_en',
      doll: {
        body: 'F',
        head: '01',
        hat: '01'
      }
    }
    // 寫入會員資料去底層
    gameDate.setProfile(userTempDate)
    console.log("getProfile", gameDate.page);
    console.log("getProfile", getProfile.value);
  };

  // 快速登入
  if (userAccount.value === "User-123" && userPassword.value === "123") {
  }
}


onMounted(() => {
  console.log("mounted");
});

</script>

<template>
<div class="login-and-doll">
    <!-- 登入畫面 -->
    <div class="login-area">
      <!-- 帳號 -->
      <div class="account-area">
        <div class="account-icon"></div>
        <input type="text" v-model="userAccount" />
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
      <button class="logIn-btn" @click="logIn">
        登入/快速登入
      </button>
    </div>
    <div class="doll-area">
      <!-- 紙娃娃 -->
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

.account-icon {
  width: 20px;
  height: 20px;
  padding-right: 5px;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-image: url("@/image/Icon/user-regular.svg");
  background-color: $mind-bg-color;
}

.password-icon {
  width: 20px;
  height: 20px;
  padding-right: 5px;
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-image: url("@/image/Icon/lock-solid.svg");
  background-color: $mind-bg-color;
}

.account-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
}
</style>
