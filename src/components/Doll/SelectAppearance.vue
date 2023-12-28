<!-- <script setup lang="ts">
import { computed, ref } from 'vue'

// 傳給父層
const emit = defineEmits(['child-set-select-appearance'])
emit('child-set-select-appearance', '005')

// 收取父層
const props = defineProps<{
  // 性別 衣服 頭髮 帽子
  appearanceCategory: String
}>();

const tableOrderBy = computed(() => props.appearanceCategory);
</script>


<template>
  <h1>{{ tableOrderBy }}</h1>
</template>

<style lang="scss" scoped>


</style> -->
<script setup lang="ts">
import { ref, computed, defineEmits, defineProps } from 'vue'
// 紙娃娃設定檔
import { dollCategory } from "@/config/dollCategory";

// 傳給父層
const emit = defineEmits(['child-set-select-appearance'])

// 收取父層
const props = defineProps<{
  curSport: {
    type: String,
    default: String,
  },
}>();

// 球種列表資料
// const navbarList = computed(() => {
//   let sportArr = props.sportList;
//   console.log("navbarList",);
  
//   return sportArr;
// });

// 切換球種，並且emit出去
function changeCurSport(sportId: string) {
  emit('child-set-select-appearance', sportId);
}

// 一個sport item的class set
function dollCategoryOptionClassSet(sportId: string) {
  return [
    "option-wrap",
    {
      "is-active": `${sportId}` === `${props.curSport}`,
    },
  ];
}
</script>

<template>
  <!-- 使用到 設定檔、Scss設定檔、i18n、Icon -->
    <div class="sports-list-field">
    <div
      v-for="dollItem in dollCategory"
      :key="dollItem.sportId"
      :ref="`option-${dollItem.sportId}`"
      :class="dollCategoryOptionClassSet(dollItem.sportId)"
      @click="changeCurSport(dollItem.sportId)"
    >
      {{ dollItem.sportId }}
      <div class="option-icon" :class="`sport-${dollItem.sportId}`" />

      <div class="option-name">
        {{ $t(dollItem.name) }}
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
// 球種網址物件
$sportUrl: (
  1: "house-solid",
  2: "ghost-solid",
  3: "heart-solid",
  4: "music-solid",
  5: "star-solid",
);

@mixin iconMask($maskUrl) {
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-image: url($maskUrl);
}

// each 建立球種 class
@each $name, $iconName in $sportUrl {
  .sport-#{$name} {
    @include iconMask("/static/images/" + $iconName + ".svg");
  }
}

.sports-list-field {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 100%;
  // height: 4.53rem;
  background: #000;
  overflow-x: auto;
}

.option-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 0 0.625rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #727272;

  &.is-active {
    position: sticky;
    left: 0;
    right: 0;
    background: #000;
    color: #fff;
    z-index: 2;
    > .option-icon {
      background-color: #fff;
    }
  }
}

.option-icon {
  margin-bottom: 0.53rem;
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  background-color: #727272;
}

.option-name {
  text-align: center;
  width: max-content;
}

.flex-icon-sport-id {
  display: flex;
  align-items: center;
}
</style>