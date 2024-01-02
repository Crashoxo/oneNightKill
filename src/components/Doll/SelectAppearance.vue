<!--  人偶類型選單 -->
<script setup lang="ts">
import { defineEmits, defineProps, onMounted } from 'vue'
// 紙娃娃設定檔
import { dollCategory } from "@/config/doll";

// 傳給父層
const emit = defineEmits(['child-set-select-appearance'])

// 收取父層
type Props = {
      curAppearance: String
};
const props = withDefaults(defineProps<Props>(), {
      curAppearance: () => '2'
});

// 切換類型，並且emit出去
function changeDollCategory(dollCategoryId: string) {
  emit('child-set-select-appearance', dollCategoryId);
}

// 一個sport item的class set
function dollCategoryOptionClassSet(dollCategoryId: string) {
  return [
    "option-wrap",
    {
      "is-active": `${dollCategoryId}` === `${props.curAppearance}`,
    },
  ];
}

onMounted(() => {
});

</script>

<template>
    <div class="doll-category-list-field">
        <div
          v-for="dollCategoryItem in dollCategory"
          :key="dollCategoryItem.dollCategoryId"
          :ref="`option-${dollCategoryItem.dollCategoryId}`"
          :class="dollCategoryOptionClassSet(dollCategoryItem.dollCategoryId)"
          @click="changeDollCategory(dollCategoryItem.dollCategoryId)"
        >
                  {{ dollCategoryItem.dollCategoryId }}
              <div class="option-icon" :class="`doll-category-${dollCategoryItem.dollCategoryId}`"/>
              <div class="option-name">
                  {{ $t(dollCategoryItem.text_key) }}
              </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// 圖片路徑檔名
// $id, $iconName
$dollCategoryUrl: (
  '1': "body",
  '2': "hair",
  '3': "hat",
);

@mixin iconMask($maskUrl) {
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-image: url($maskUrl);
}

// 建立icon class
@each $id, $iconName in $dollCategoryUrl {
  .doll-category-#{$id} {
    @include iconMask("@/assets/icon/dollCategory/" + $iconName + ".svg");
  }
}


.doll-category-list-field {
  position: relative; // 給子層黏著
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 100%;
  // height: 4.53rem;
  background: #000;
  overflow-x: auto;  // 設定橫向拉霸
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
    // 黏在最上面
    position: sticky;
    left: 0;
    right: 0;
    background: #000;
    color: #fff;
    z-index: 1;
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
</style>