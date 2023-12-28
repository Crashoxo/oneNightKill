<script setup lang="ts">
import { ref, computed } from "vue";
// 語系選單
import { languageList } from "@/config/language";
import { seti18nLang } from '@/i18n/index';
// 取得使用者資料 Getter
import { useGameData } from "@/stores/game_data";
// 設定預設語系 初始化
seti18nLang('zh-tw');

// 語系不需要在該組件內被儲存至store，因"快速登入"或"註冊"時語系會被儲存至store
// 因此Language需要emit出去，讓其他組件可以使用
const gameData = useGameData();


// 給父層
const emit = defineEmits(['child-set-language'])

function changeLanguage(): void {
    seti18nLang(selectLanguage.value);
    // 給父層
    emit('child-set-language', selectLanguage.value)
}

// 如果gameData.language改變，預設改變
const userLAnguage = computed(() => gameData.getProfile.language);
let selectLanguage = ref( userLAnguage || "zh-tw");

</script>

<template>
  <div>
    <select 
        v-model="selectLanguage"
        @change="changeLanguage"
        >
            <option value="">Please select</option>
            <option
                v-for="language in languageList"
                :key="language.value"
                :value="language.value"
            >
                {{ language.label }}
            </option>
    </select>
    {{ selectLanguage }}
  </div>
</template>