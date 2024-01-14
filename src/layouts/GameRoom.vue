<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useGameData } from "@/stores/game_data";
import { useRoute } from "vue-router";
const route = useRoute();


const gameData = useGameData();


onMounted(() => {
    console.log("GameRoom mounted");
    console.log(route.params.id); // 打印动态参数的值
});
</script>

<template>
    <div class="game-room-and-chat">
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>
</template>

<style lang="scss" scoped>
.game-room-and-chat{
    width: 100%;
    height: 100%;
    background-color: #c71b1b;
}
</style>