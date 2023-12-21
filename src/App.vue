<template>
  <div class="index-bg">
    <div class="index-top-bar" />
    <div class="main-border">
      <!-- 框線 -->
      <div class="main-area">
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
    <div class="index-bottom-bar" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useGameDate } from "@/stores/game_data";

export default defineComponent({
  setup() {
    const gameDate = useGameDate();
    const router = useRouter();
    return {
      gameDate,
      // 登入頁面
      logInAccount: () => gameDate.setPage("/logIn", router),
      // 房間頁面
      roomPage: () => gameDate.setPage("/", router),
      // printName: () => gameDate.printName(),
    };
  },
});
</script>

<style scoped>
/* 最底的底色 */
.index-bg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  height: 100vh;
  /* 條紋背景 */
  background: linear-gradient(
    to right,
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
    #f3c8af 100%
  );
  background-size: 200px 100%;
}

.index-top-bar,
.index-bottom-bar {
  width: 100%;
  height: 30px;
  background: #362321;
}

.index-bottom-bar {
  border-top: 2px solid #1a1212;
}

.main-border {
  position: relative;
  width: 1200px;
  height: 600px;
  background-image: url("@/image/game/main_border.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.main-area {
  position: absolute;
  top: 108px;
  left: 54px;
  width: 1096px;
  height: 457px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #f3c8af;
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
