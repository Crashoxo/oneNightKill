import { defineStore } from "pinia";
import { Router } from 'vue-router'

// 寫入store的資料型別
export const useGameDate = defineStore('user', {
  state: () => ({
    page: 'initialPage' as string,
  }),
  actions: {
    // 改頁面
    setPage(newPage: string, router: Router) {
      this.page = newPage
      router.push(this.page)
    },
    
    // 方法
    printName() {
      console.log("2.", this.page)
    }
  }
})
