<template>
  <div class="crate-account-area">
    <div class="crate-account-data-area">
      <!-- 帳號 -->
      <div class="crate-account-input">
        <div class="crate-name-icon"></div>
        <input type="text" v-model="crateName" />
      </div>
      <div class="crate-account-input">
        <div class="crate-account-icon"></div>
        <input type="text" v-model="crateAccount" />
      </div>
      <div class="crate-account-input">
        <div class="crate-password-icon"></div>
        <input type="text" v-model="cratePassWord" />
      </div>
      <!-- 語系選擇 -->
      <select v-model="crateLanguage">
        <option value="">Please select</option>
        <option v-for="language in languageOptions" :key="language.value" :value="language.value">
          {{ language.label }}
        </option>
      </select>
      <div>Selected value: {{ crateLanguage }}</div>
      <div>{{ crateAccount }} {{ cratePassWord }}</div>
      <button class="crate-account-check-button" @click="cratedAccount">註冊</button>
    </div>
    <!-- 紙娃娃 -->
    <div class="crate-account-doll-area">
      <!-- <DollSystem :styleInit="dollSystemInit" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// import DollSystem from "@/components/DollSystem.vue";
import "../assets/css/tailwind.css";
import { useGameData } from "@/stores/game_data";

interface Option {
  label: string;
  value: string;
}

export default defineComponent({
  name: "CrateAccount",
  components: {
    // DollSystem,
  },
  setup() {
    // 語系選擇options
    const languageOptions: Option[] = [
      { label: "繁體中文", value: "language_tw" },
      { label: "English", value: "language_en" },
      { label: "簡體中文", value: "language_cn" },
    ];
    // 帳號
    const crateName = ref("");
    const crateAccount = ref("");
    const cratePassWord = ref("");
    // 語系選擇
    const crateLanguage = ref("");
    // 路由
    const gameData = useGameData();
    const router = useRouter();
    // 紙娃娃樣式是否初始化
    const dollSystemInit = ref(true);
    console.log("gameData", gameData.page);

    // 註冊帳號確認鈕
    // 必須判定是否註冊成功
    // 傳導至首頁並為登入狀態
    const cratedAccount = () => {
      gameData.setPage("/", router);
    };

    onMounted(() => {
      // 紙娃娃樣式是否初始化
      // 用store值做判斷
      if (gameData.page === "/crateAccount") {
        dollSystemInit.value = true;
      } else {
        dollSystemInit.value = false;
      }
    });

    return {
      languageOptions,
      crateName,
      crateAccount,
      cratePassWord,
      crateLanguage,
      dollSystemInit,
      cratedAccount,
    };
  },
});
</script>

<style lang="scss" scoped>
$mind-bg-color: #f5f5f5;

.crate-account-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.crate-account-doll-area,
.crate-account-data-area {
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // border: 1px solid black;
}

.crate-account-input {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
}

.crate-name-icon,
.crate-account-icon,
.crate-password-icon {
  width: 20px;
  height: 20px;
  padding-right: 5px;
  mask-repeat: no-repeat;
  mask-size: contain;
  background-color: $mind-bg-color;
}

.crate-name-icon {
  mask-image: url("@/assets/icon/file-signature-solid.svg");
}

.crate-account-icon {
  mask-image: url("@/assets/icon/user-regular.svg");
}

.crate-password-icon {
  mask-image: url("@/assets/icon/lock-solid.svg");
}
</style>
