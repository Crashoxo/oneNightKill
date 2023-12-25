import { defineStore } from "pinia";
import { Router } from 'vue-router'

interface Profile {
  name: string;
  language: string;
  doll: {
    body: string;
    head: string;
    hat: string;
  };
}

interface GameDataState {
  page: string;
  profile: Profile;
}

export const useGameDate = defineStore('gameData', {
  state: (): GameDataState => ({
    // 目前頁面
    page: 'initialPage',
    // 個人資料
    profile: {
      name: '123',
      language: '',
      doll: {
        body: '',
        head: '',
        hat: ''
      },
    },
  }),

  getters: {
    getPage(): string {
      return this.page;
    },
    getProfile(): Profile {
      return this.profile;
    }
  },

  actions: {
    setPage(newPage: string, router: Router) {
      this.page = newPage;
      router.push(this.page);
    },

    setProfile(name: string, language: string, doll: object) {
      this.profile = {
        name: name,
        language: language,
        doll: {
          body: 'F',
          head: '01',
          hat: '01'
        }
      };
    }
  }
});