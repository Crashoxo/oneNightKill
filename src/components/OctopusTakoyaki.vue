<template>
    <div class="octopus-takoyaki">
      <!-- 可愛的章魚燒圖片 -->
      <img :src="takoyakiImage" @click="flipTakoyaki" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const takoyakiImage = ref('../image/game/OctopusTakoyaki.png');
  const isFlipped = ref(false);
  
  const flipTakoyaki = () => {
    if (!isFlipped.value) {
      // 翻轉章魚燒
      takoyakiImage.value = 'path/to/flipped-takoyaki.png';
      isFlipped.value = true;
    }
  };
  </script>
  
  <style scoped>
  .octopus-takoyaki {
    /* 添加章魚燒的 CSS 樣式，例如大小、位置等 */
    width: 100px;
    height: 100px;
    position: relative;
  }
  </style>
  