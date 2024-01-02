<!-- 語系變動直接存進store -->
<!-- 登入者拿存在table的語系 -->
<!-- 語系選擇 -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
// 語系選單
import { languageList } from "@/config/language";
import { seti18nLang } from "@/i18n/index";
// 取得使用者資料 Getter & 把語系資料存進store
import { useGameData } from "@/stores/game_data";

// 取得使用者資料 Getter
const gameData = useGameData();

// 取得使用者語系
const userLanguage = computed(() => gameData.getProfile.language);

// 預設store的language，沒有就繁中
// 拿一個容器裝，因為computed不能直接修改
const TempLanguage = ref(userLanguage.value || "zh-tw");
// v-model值 改寫
let selectLanguage = computed({
    get: () => TempLanguage.value,
    set: (value) => {
        TempLanguage.value = value;
    },
});

// 選語系
function changeLanguage(): void {
    // i18n語系寫入
    seti18nLang(selectLanguage.value);
    // 存入store
    gameData.setLanguage(selectLanguage.value);
}

onMounted(() => {
    changeLanguage();
});
</script>

<template>
    <div class="select-language-option">
        <select v-model="selectLanguage" @change="changeLanguage">
            <option value="">Please select</option>
            <option
                v-for="language in languageList"
                :key="language.value"
                :value="language.value"
            >
                {{ language.label }}
            </option>
        </select>
    </div>
</template>