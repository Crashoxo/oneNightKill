<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
// 語系選單
import { languageList } from "@/config/language";
import { seti18nLang } from '@/i18n/index';
// 取得使用者資料 Getter
import { useGameData } from "@/stores/game_data";

// 語系不需要在該組件內被儲存至store，因"快速登入"或"註冊"時語系會被儲存至store
// 因此Language需要emit出去，讓其他組件可以使用

// 取得使用者資料 Getter
const gameData = useGameData();

// 給父層
const emit = defineEmits(['child-set-language'])

// 如果gameData.language改變，預設改變
const userLanguage = computed(() => gameData.getProfile.language);

// 預設:store language，沒有就繁中
// 拿一個容器裝，因為computed不能直接修改
const TempLanguage = ref(userLanguage.value || 'zh-tw');
// v-model值 改寫
let selectLanguage = computed({
  get: () => TempLanguage.value,
  set: (value) => {
    TempLanguage.value = value;
    // 語言存入store
    gameData.setLanguage(TempLanguage.value);
  },
});


function changeLanguage(): void {
    seti18nLang(selectLanguage.value);
    // 給父層
    console.log("??",selectLanguage.value);
    
    emit('child-set-language', selectLanguage.value)
}

onMounted(() => {
  changeLanguage()
});

</script>


<template>
  <div class="select-language-option">
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
  </div>
</template>