<!-- <script setup lang="ts">
// 登入畫面、紙娃娃、登入後畫面(不含room)
import SelectAppearance from '@/components/Doll/SelectAppearance.vue';
import { Loading } from 'element-plus/es/components/loading/src/service';
// 使用語系
import { ref, computed } from 'vue'; // Add 'ref' to the import statement

// 收衣服的格式
// let userDollCategory = computed(() => {
//     if (route.name) {
//         return route.name;
//     }
//     return '';
// });

let userDollCategory = ref("001");

// 給子層
const parentData = ref("001"); 

// 收子層
function changeCategory(value: string): void {
    userDollCategory.value = value
    console.log("userDollCategory",userDollCategory.value);
}

</script>

<template>
    <div>
      <div class="doll-img"></div>
      <SelectAppearance 
          :appearance-category="parentData" 
          @child-set-select-appearance="changeCategory"
      />
    </div>
    <span class="text-area">{{ userDollCategory }} 可以拿來抓資料顯示</span>
</template>

<style lang="scss" scoped>
.doll-img {
  width: 230px;
  height: 230px;
  background-image: url("@/image/doll/body/charsim.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: #dc603d;
}

</style>
 -->

 <template>
  <div class="select-appearance">
    <SelectAppearance
      class="compare-sport-icon"
      :cur-sport="sportId"
      @childSetSelectAppearance="getSportId"
    />
    <span class="text-area">{{ sportId }} 可以拿來抓資料顯示</span>
  </div>
</template>

<script setup lang="ts">
// @ is an alias to /src
import SelectAppearance from "@/components/Doll/SelectAppearance.vue";
import { ref, Ref } from 'vue';


let sportId: Ref<string> = ref("1");

function getSportId(getSportId: string) {
  console.log("getSportId sportId", getSportId);
  // 從子元件傳進來
  sportId.value = getSportId;
}
</script>

<style lang="scss" scoped>
.text-area {
  font-size: 24px;
  color: brown;
}

.select-appearance{
  width: 500px;
}
</style>