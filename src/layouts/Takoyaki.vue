<template>
    <div class="game">
      <div class="octopus-takoyaki-container">
        <!-- 放置多個章魚燒組件 -->
        <OctopusTakoyaki v-for="(takoyaki, index) in takoyakis" :key="index" />
      </div>
      <div class="timer">{{ timeRemaining }} 秒</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import OctopusTakoyaki from '../components/OctopusTakoyaki.vue';
  
  const takoyakis = ref([]); // 儲存章魚燒組件的列表
  const timeRemaining = ref(60); // 剩餘時間（60秒）
  
  onMounted(() => {
    // 初始化章魚燒組件列表
    for (let i = 0; i < 5; i++) { // 假設有 5 個章魚燒
      takoyakis.value.push(OctopusTakoyaki);
    }
  
    // 開始計時器
    const timer = setInterval(() => {
      timeRemaining.value--;
      if (timeRemaining.value === 0) {
        clearInterval(timer); // 時間到，停止計時器
        // 在這裡處理遊戲結束的邏輯
      }
    }, 1000);
  });
  </script>
  
  <style scoped>
  .game {
    /* 遊戲頁面的 CSS 樣式 */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .octopus-takoyaki-container {
    /* 放置章魚燒的容器樣式 */
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .timer {
    /* 計時器樣式 */
    font-size: 24px;
    margin-top: 20px;
  }
  </style>
  