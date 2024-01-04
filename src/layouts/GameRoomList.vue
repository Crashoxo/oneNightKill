<!-- 房間列表 -->
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
    <div class="game-room-list-and-crate-room">
        <div class="game-room-list-area">
            <div class="game-room-list">
                <div
                    v-for="gameRoom in gameRoomList"
                    class="room try"
                    :class="`game-rooms-bg-${gameRoom.roomUrl}`"
                    :key="gameRoom.id"
                >
                    <div class="try01">
                        <div class="try02">
                            <div class="try03">{{gameRoom.status}}</div>
                            <div class="try04">{{gameRoom.name}}</div>
                            <div class="try05">{{ gameRoom.player }}/{{gameRoom.maxPlayer}}</div>
                        </div>
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
// 圖片路徑檔名
// $id, $iconName
$gameRoomListUrl: (
    "001": "001",
);

@mixin gameRoomBg($bgUrl) {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    box-shadow: inset 1px 0.5rem 5px #9494944c;
    background-image: url($bgUrl);
}

// 建立icon class
@each $id, $bgName in $gameRoomListUrl {
    .game-rooms-bg-#{$id} {
        @include gameRoomBg("src/assets/image/game/room-list-bg/" + $bgName + ".png");
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
    grid-gap: 10px;
    padding-left: 0.5rem; /* Add this line */
}

.try {
    width: 15rem;
    height: 8rem;
    border: 2px solid rgb(78, 41, 1);
    // // 圓弧
    border-radius: 1rem;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1rem;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s; // add this line to animate the transform

}

.try::after {
    content: "";
    border: 10px solid transparent; // make the border transparent when not hovered
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px; // add this line
    bottom: -10px; // add this line
    border-radius: 1.2rem; // add this line to make the border rounded
    transition: border-color 0.3s; // add this line to animate the color change
}

.try:hover::after {
    border-color: rgba(23, 1, 78, 0.891); // change the border color when hovered
}

.try:active {
    transform: scale(0.95); // scale the element down to 95% when active
}

.try01 {
    width: 15rem;
    height: 3.5rem;
    border: 2px solid rgb(78, 41, 1);
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(244, 165, 96, 0.498);
    box-shadow: inset -2px -0.5em 5px #323232c3;
}

.try02 {
    width: 14.5rem;
    height: 2.5rem;
    // border: 1px solid rgb(78, 41, 1);
    border-radius: 0.8rem;
    // box-shadow: inset 2px -0.5em 6px #323232;

    // -webkit-box-shadow: #121010 0px 17px 10px 6px;
    // -moz-box-shadow: #121010 0px 17px 10px 6px;
    // box-shadow: #121010 0px 17px 10px 6px;
    // 往內陰影
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 0.4rem;
}

.try03 {
    border: 3px solid rgb(185, 99, 6);
    background-color: sandybrown;
    border-radius: 50px;
    width: 35px;
    height: 35px;
    z-index: 1;
}

.try04 {
    left: 2.6rem; // change this to move the pseudo-element left and right
    border: 1px solid rgb(78, 41, 1);
    background-color: sandybrown;
    border-left: none;
    border-radius: 0.7rem;
    min-width: 8rem;
    height: 1.8rem;
    margin-left: -5px;
    text-align: center;
}

.try05 {
    width: 3.5rem;
    height: 100%;
    // border: 1px solid rgb(78, 41, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.aaa {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("src/assets/image/game-room/001.png");
    width: 100%;
    height: 100%;
    border-radius: 0.7rem;
    box-shadow: inset 1px 0.5rem 5px #9494944c;
}
</style>