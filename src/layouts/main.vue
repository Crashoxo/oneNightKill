<template>
  <div class="login-and-doll">
    <!-- 登入畫面 -->
    <div class="login-area">
      <!-- 帳號 -->
      <div class="account-area">
        <div class="account-icon"></div>
        <input type="text" v-model="accountNumber" />
      </div>
      <div class="account-area">
        <div class="password-icon"></div>
        <input type="text" v-model="passWord" />
      </div>
      <!-- 語系選擇 -->
      <select v-model="selectLanguage">
        <option value="">Please select</option>
        <option v-for="language in languageOptions" :key="language.value" :value="language.value">
          {{ language.label }}
        </option>
      </select>
      <div>Selected value: {{ selectLanguage }}</div>
      <div>{{ accountNumber }} {{ passWord }}</div>
      <button 
          class="crate-account"
          @click="crateAccount"
      >
          註冊帳號
      </button>
    </div>
    <!-- 紙娃娃 -->
    <div class="doll-area"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useGameDate } from "@/stores/game_data";

interface Option {
  label: string;
  value: string;
}

export default defineComponent({
  name: "DropdownAndInput",
  setup() {
    // 語系選擇options
    const languageOptions: Option[] = [
      { label: "繁體中文", value: "language_tw" },
      { label: "English", value: "language_en" },
      { label: "簡體中文", value: "language_cn" },
    ];
    // 語系選擇
    const selectLanguage = ref("");
    // 帳號
    const accountNumber = ref("");
    const passWord = ref("");
    // 路由
    const gameDate = useGameDate();
    const router = useRouter();

    return {
      languageOptions,
      selectLanguage,
      accountNumber,
      passWord,
      crateAccount: () => gameDate.setPage("/crateAccount", router),
    };
  },
});
</script>

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

.password-icon{
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
