<!-- 房間列表 -->
<!-- 此頁面要隨時打API抓房間資料，因為要隨時更新遊戲人數及房間狀態 -->
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useGameData } from "@/stores/game_data";
import CrateRoom from "@/components/CrateRoom.vue";
const gameData = useGameData();

const gameRoomList = [
    {
        id: 1,
        name: "room1",
        player: 1,
        maxPlayer: 5,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 2,
        name: "room2",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 3,
        name: "room3",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 4,
        name: "room4",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 5,
        name: "room5",
        player: 1,
        maxPlayer: 2,
        status: "start",
        roomUrl: "001",
    },
    {
        id: 6,
        name: "room6",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 7,
        name: "room6",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 8,
        name: "room6",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 9,
        name: "room6",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
    {
        id: 10,
        name: "room6",
        player: 1,
        maxPlayer: 2,
        status: "waiting",
        roomUrl: "001",
    },
];

onMounted(() => {});
</script>

<template>
    <!-- 房間列表 -->
    <div class="game-room-list-and-crate-room">
        <div class="game-room-list-area">
            <div class="game-room-list">
                <div
                    v-for="gameRoom in gameRoomList"
                    class="game-room-wrap"
                    :class="`game-rooms-bg-${gameRoom.roomUrl}`"
                    :key="gameRoom.id"
                >
                    <div class="game-room-info">
                            <div class="game-room-status-havor">{{gameRoom.status}}</div>
                            <div class="game-room-status-show-area">
                                <div :class="`game-room-status-${gameRoom.status}`"></div>
                            </div>
                            <div class="game-room-name">{{gameRoom.name}}</div>
                            <div class="game-room-attend-amount">{{gameRoom.player }}/{{gameRoom.maxPlayer}}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 建立房間 -->
        <div class="crate-room-area">
            <CrateRoom />
        </div>
    </div>
</template>

<style lang="scss" scoped>
// 背景圖片路徑檔名
// $id, $bgName
$gameRoomListUrl: (
    "001": "001",
);

@mixin gameRoomBg($bgUrl) {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    box-shadow:inset 0.0625rem 0.5rem 0.3125rem #9494944c;
    background-image: url($bgUrl);
}

// 建立icon class
@each $id, $bgName in $gameRoomListUrl {
    .game-rooms-bg-#{$id} {
        @include gameRoomBg("src/assets/image/game/room-list-bg/" + $bgName + ".png");
    }
}

// Icon路徑檔名
// $id, $iconName
$roomListIconUrl: (
    "waiting": "waiting",
    "start": "start",
);

@mixin iconMask($maskUrl) {
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-image: url($maskUrl);
}

// 建立icon class
@each $id, $iconName in $roomListIconUrl {
    
    .game-room-status-#{$id} {
        width: 1.2rem;
        height: 1.2rem;
        background-color: #ccc;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        z-index: 2;
        @include iconMask("@/assets/icon/game-list/" + $iconName + ".svg");
    }
}

.game-room-list-and-crate-room {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: rgb(243, 200, 175);
    background: linear-gradient(
        59deg,
        rgba(243, 200, 175, 1) 45%,
        rgba(251, 238, 209, 1) 100%
    );
}

.game-room-list-area {
    flex: 1; // 直接站滿剩下的空間
    overflow-y: scroll; /* Change this line */
    overflow-x: hidden; /* Change this line */
}

.crate-room-area {
    flex: none;
    width: 20rem;

}

.game-room-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap:0.625rem;
    padding-left: 0.5rem; /* Add this line */
}

.game-room-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 15rem;
    height: 8rem;
    margin-top: 1rem;
    border: 2px solid rgb(78, 41, 1);
    border-radius: 1rem;
    // 動畫
    transition: transform 0.3s;
    cursor: pointer;
}

.game-room-wrap::after {
    content: "";
    position: absolute;
    top:-0.625rem;
	left:-0.625rem;
	right:-0.625rem;
	bottom:-0.625rem;
	border:10px solid transparent;
    border-radius: 1.2rem; 
    transition: border-color 0.3s; 
}

.game-room-wrap:hover::after {
    border-color: rgb(48, 30, 9);
}

.game-room-wrap:active {
    transform: scale(0.95);
}

.game-room-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 3rem;
    background-color: rgba(244, 165, 96, 0.498);
    border-radius: 1rem;
    border: 2px solid rgb(78, 41, 1);
    box-shadow:inset -0.125rem -0.5em 0.3125rem #323232c3;
}

.game-room-status-havor {
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    padding: 0.5rem;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    background-color: #f0f0f066;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transition: opacity 0.4s ease;
    opacity: 0;
    z-index: 3;
}

.game-room-wrap:hover .game-room-status-havor {
    display: block;
    opacity: 1;
}

.game-room-status-show-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.3rem;
    height: 2.3rem;
    background-color: sandybrown;
    border: 3px solid rgb(185, 99, 6);
    border-radius: 2rem;
    z-index: 1;
}


.game-room-name {
    min-width: 8rem;
    height: 1.8rem;
    margin-left: -5px;
    text-align: center;
    background-color: sandybrown;
    border: 1px solid rgb(78, 41, 1);
    border-left: none;
    border-radius: 0.7rem;
}

.game-room-attend-amount {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 100%;
}
</style>