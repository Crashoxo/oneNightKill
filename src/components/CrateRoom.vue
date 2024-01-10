<!-- 建立房間 -->
<script setup lang="ts">
import { ref, Ref, computed } from "vue";
import ShowDoll from "@/components/Doll/ShowDoll.vue";
// 遊戲背景select list
import { gameRoomBgList } from "@/config/gameRoomBg";
import { useGameData } from "@/stores/game_data";
import { useI18n } from "vue-i18n";
const gameData = useGameData();

// 創建房間資訊，之後要打API存進Room List
let crateRoomData: Ref<Object> = ref({});
// 選擇的背景 預設房間1
let selectBg: Ref<string> = ref("001");
// 房間名稱
let roomName: Ref<string> = ref("");
// 房間最大人數
let maxPlayer: Ref<number> = ref(2);

// 因為不是直接在template使用，所以要用computed使用語系
const showRoomNameTip = computed(() => {
    const { t } = useI18n();
    return t("S_LOGIN");
});

function cratedRoom(): void {
    // 設定房間資訊
    crateRoomData.value = {
        roomName: roomName.value,
        maxPlayer: maxPlayer.value,
        roomBgUrl: selectBg.value,
    };

    // 打API
    gameData.setRoom(crateRoomData.value);
    console.log("???", crateRoomData.value);
}
</script>

<template>
    <div class="crate-room-area" :class="`crate-game-rooms-bg-${selectBg}`">
        <router-link class="" to="/">回首頁</router-link>
        <div class="crate-room-area-doll">
            <ShowDoll />
        </div>
        <div class="crate-room-option-area">
            <input
                class="crate-room-option"
                type="text"
                v-model="roomName"
                required
                :placeholder="showRoomNameTip"
            />
            <select class="crate-room-option" v-model="maxPlayer">
                <option v-for="n in 5" :key="n" :value="n + 1">
                    {{ n + 1 }}
                </option>
            </select>
            <select class="crate-room-option" v-model="selectBg">
                <option
                    v-for="roomBg in gameRoomBgList"
                    :key="roomBg.value"
                    :value="roomBg.value"
                >
                    {{ roomBg.label }}
                </option>
            </select>
            <button 
                class="crate-room-option crate-room-btn"
                @click="cratedRoom"
            >
                建立房間
                {{ $t("S_LOGIN") }}
            </button>
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
    box-shadow: inset 0.0625rem 0.5rem 0.3125rem #9494944c;
    background-image: url($bgUrl);
}

// 建立icon class
@each $id, $bgName in $gameRoomListUrl {
    .crate-game-rooms-bg-#{$id} {
        @include gameRoomBg(
            "src/assets/image/game/crate-room-bg/" + $bgName + ".jpg"
        );
    }
}

.crate-room-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.crate-room-option-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
}

.crate-room-option {
    width: 100%;
    margin-top: 1rem;
    font-weight: bold;
    text-align: center;
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 0.0625rem solid #000000;
}

.crate-room-btn {
    cursor: pointer;
    transition: transform 0.2s ease;
}

.crate-room-btn:active {
    transform: translateY(2px) translateX(2px);
}
</style>