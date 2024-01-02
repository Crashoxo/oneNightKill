<!-- 1. 拿到分類，顯示對應的服裝類型 -->
<!-- 2. 並且把點擊的服裝類型存到store，變換紙娃娃 -->
<script setup lang="ts">
// ref "值"會改變用
import { ref, Ref, computed, onMounted } from "vue";
import { ItemType } from "@/types";
// 紙娃娃設定檔
import { dollItems } from "@/config/doll";
import SelectAppearance from "@/components/Doll/SelectAppearance.vue";
import { useGameData } from "@/stores/game_data";
const gameData = useGameData();

// 取得使用者的doll資料
const userProfile = computed(() => gameData.getProfile);

// 傳值給子層，子層更新後回傳給父層
// 給子層
let dollCategoryId: Ref<string> = ref("1"); // 預設值
function getDollCategoryId(getDollCategoryId: string) {
    // 從子元件傳進來
    dollCategoryId.value = getDollCategoryId;
}

// 改變紙娃娃顯示樣式
const changeAppearanceItemList = computed(() => {
    // 顯示對應的服裝類型
    return dollItems.filter((item: ItemType) => {
        // 只顯示女生髮型
        if (
            tempDoll.value.body === "bodyF" &&
            item.group === "2" &&
            !item.isGirl
        ) {
            return false;
        }

        // 只顯示男生髮型
        if (
            tempDoll.value.body === "bodyM" &&
            item.group === "2" &&
            item.isGirl
        ) {
            return false;
        }
        return item.group === dollCategoryId.value;
    });
});

// 暫存紙娃娃樣式
const tempDoll = computed(() => {
    const { body, hair, hat } = userProfile.value;
    return  {
        body: body || "bodyF",
        hair: hair || "hair01",
        hat: hat || "",
    };
});

// 點擊服裝類型，變換紙娃娃
function changeAppearanceItem(dollItem: Object) {
    const config = {
        "1": "body",
        "2": "hair",
        "3": "hat",
    };

    // 使用 dollItem.group 获取相应的属性名
    const property = config[dollItem.group];
    switch (dollItem.dollItemsId) {
        case "001-1": {
            tempDoll.value.body = "bodyM";
            tempDoll.value.hair = "hair04";
            break;
        }
        case "001-2": {
            tempDoll.value.body = "bodyF";
            tempDoll.value.hair = "hair01";
            break;
        }
        default:
            // 更新 tempDoll 的值
            tempDoll.value[property] = dollItem.doll_url;
            break;
    }

    // 把娃娃資料存進store
    gameData.setDoll(tempDoll.value);
}

onMounted(() => {});
</script>

<template>
    <div
        class="doll-system h-5/6 w-full flex flex-col justify-evenly items-center"
    >
        <!-- 樣式顯示 -->
        <div class="doll-item-area">
            <div
                v-for="dollItem in changeAppearanceItemList"
                class="doll-item-wrap"
                :key="dollItem.dollItemsId"
                @click="changeAppearanceItem(dollItem)"
            >
                <img
                    class="cursor-pointer"
                    :src="`src/assets/image/doll/${dollItem.doll_url}.png`"
                    alt=""
                />
            </div>
        </div>
        <!-- 分類選單 -->
        <div class="select-appearance">
            <SelectAppearance
                class="compare-sport-icon"
                :cur-appearance="dollCategoryId"
                @childSetSelectAppearance="getDollCategoryId"
            />
            <!-- {{ dollCategoryId }}  -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.doll-item-area {
    flex: 1; // 直接站滿剩下的空間
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
}

.select-appearance {
    flex: none;
    width: 30rem;
}

.doll-item-wrap {
    padding: 0.5rem;
}
</style>
