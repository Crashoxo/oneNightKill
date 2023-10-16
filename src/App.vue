<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="main-area">
    <div class="top-bar">
      <div class="top-bar-link">
          <router-link class="top-bar-link-latter" to="/">Home</router-link>
          &nbsp;
          <router-link class="top-bar-link-latter" to="/add">Add</router-link>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="game-and-info">
      <component :is="$route.meta.layout || 'div'">
      </component>
    </div>
  </div>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite x" /> -->
</template>

<style>
#app {
  /* 設定你想要的背景顏色 */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border: #cbb523 solid 3px;
  height: 100vh;
  /* 100% 的視窗高度 */
  width: 100%;
  /* 100% 的寬度 */
  display: flex;
  /* 使用彈性佈局 */
  flex-direction: column;
  /* 垂直排列內容 */
  justify-content: center;
  /* 垂直居中內容 */
  align-items: center;
  /* 水平居中內容 */
  background-color: #5d5858;
}

/* 移除 .main-area 的高度，讓它隨內容自動調整高度 */
.main-area {
  background-color: #2c3e50;
  width: 90%;
  height: 80%;
  border: green 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-bar {
  border: #cbb523 3px solid;
  width: 100%;
  height: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-bar-link {
  width: 100%;
  height: 100%;
  /* border: #12d633 3px solid; */
}

.top-bar-link-latter {
  color: yellow;
}

.game-and-info {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  border: #1222d6 3px solid;
}
</style>
