<!-- 建立房間 -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import ShowDoll from "@/components/Doll/ShowDoll.vue";
// 遊戲背景select list
import { gameRoomBgList } from "@/config/gameRoomBg";
// 創建房間資訊，之後要打API存進Room List
let crateRoomData = ref({});
// 選擇的背景 預設房間1
let selectBg = ref("001");
// 房間名稱
let roomName = ref("");
// 房間最大人數
let maxPlayer = ref(2);
</script>

<template>
    <div 
        class="crate-room-area"
        :class="`crate-game-rooms-bg-${selectBg}`">
        <div class="crate-room-area-doll">
            <ShowDoll />
        </div>
        <div class="select-room-bg-option">
            <select v-model="selectBg" @change="">
                <option
                    v-for="roomBg in gameRoomBgList"
                    :key="roomBg.value"
                    :value="roomBg.value"
                >
                    {{ roomBg.label }}
                </option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// 背景圖片路徑檔名
// $id, $bgName
$gameRoomListUrl: (
    "001": "001",
    "002": "002",
    "003": "003",
);

@mixin gameRoomBg($bgUrl) {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    box-shadow:inset 0.0625rem 0.5rem 0.3125rem #9494944c;
    background-image: url($bgUrl);
}

// 建立icon class
@each $id, $bgName in $gameRoomListUrl {
    .crate-game-rooms-bg-#{$id} {
        @include gameRoomBg("src/assets/image/game/crate-room-bg/" + $bgName + ".jpg");
    }
}

.crate-room-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>