<!-- Store拿娃娃樣式，串出來源Url，並顯示出來 -->
<!-- 由DollSystem設定Store -->
<script setup lang="ts">
import { computed, ref } from "vue";
// Getter
import { useGameData } from "@/stores/game_data";
const gameData = useGameData();
const userProfile = computed(() => gameData.getProfile);

// 串出人偶樣式來源Url
const userDollDeUrl = computed(() => {
    const { body, hair, hat } = userProfile.value;
    return  `${body}${hair}${hat}`;
});
</script>


<template>
    <img 
        class="show-doll"
        :src="`src/assets/image/doll-mix/${userDollDeUrl}.png`" 
        alt="" 
    />
</template>