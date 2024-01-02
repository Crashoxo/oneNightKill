<!-- 房間列表 -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useGameData } from "@/stores/game_data";
const gameData = useGameData();


onMounted(() => {
});
</script>

<template>
    <div class="game-room-list">
        <!-- <select v-model="selectLanguage" @change="changeLanguage">
            <option value="">Please select</option>
            <option
                v-for="language in languageList"
                :key="language.value"
                :value="language.value"
            >
                {{ language.label }}
            </option>
        </select> -->
    </div>
</template>