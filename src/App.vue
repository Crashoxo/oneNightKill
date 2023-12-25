<script setup lang="ts">
// 該頁面只畫出主要的框架，還沒有實作功能
import { useRouter } from "vue-router";
import { useGameDate } from "@/stores/game_data";

const gameDate = useGameDate();
const router = useRouter();

// 創建帳號頁面
const logInAccount = () => gameDate.setPage("/logIn", router);
// 房間頁面
const roomPage = () => gameDate.setPage("/", router);

</script>

<template>
  <div class="index-bg">
    <div class="index-top-bar w-full h-8 bg-orange-950" />
    <div class="main-border">

      <!-- 框線 -->
      <div class="main-area bg-secondary">
        <!-- 登入 遊戲 換裝系統顯示 -->
        <div class="display-area">
          <component :is="$route.meta.layout || 'div'"> </component>
          <!-- 變更route -->
          <!-- <div class="top-bar-link">
            <router-link class="top-bar-link-latter" to="/">Home</router-link>
            &nbsp;
            <router-link class="top-bar-link-latter" to="/add">Add</router-link>
          </div> -->
          <!-- route的layout -->
          <!-- <div class="game-and-info">
          
        </div> -->
        </div>
      </div>
    </div>
    <div>
      {{ gameDate.page }}
      <button @click="logInAccount">Change Name</button>
      <button @click="roomPage">Print Name</button>
    </div>
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite x" /> -->
    <div class="index-bottom-bar w-full h-8 bg-orange-950" />
  </div>
</template>

<style scoped>
/* 最底的底色 */
.index-bg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 80rem;
  min-height: 50rem;
  width: 100%;
  height: 100vh;
  /* 條紋背景 */
  background: linear-gradient(to right,
      #fbeed1 0%,
      #fbeed1 10%,
      #f3c8af 10%,
      #f3c8af 20%,
      #fbeed1 20%,
      #fbeed1 30%,
      #f3c8af 30%,
      #f3c8af 40%,
      #fbeed1 40%,
      #fbeed1 70%,
      #f3c8af 70%,
      #f3c8af 100%);
  background-size: 12.5rem 100%;
}


.index-bottom-bar {
  border-top: 2px solid #1a1212;
}

.main-border {
  position: relative;
  width:75rem;
	height:37.5rem;
  background-image: url("@/assets/image/game/main_border.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.main-area {
  position: absolute;
  /* 裡面的方框對齊 */
  top:6.75rem;
	left:3.375rem;
	width:68.5rem;
	height:28.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.display-area {
  width: 100%;
  height: 100%;
}

/*  .top-div-design {
    height: 100px;
    background: #362321;
} */

/* 



.top-bar {
  border: #cbb523 3px solid;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-bar-link {
  width: 100%;
  height: 100%;
}

.top-bar-link-latter {
  color: yellow;
}

 */
/* .game-and-info {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  border: #1222d6 3px solid;
} */
</style>
