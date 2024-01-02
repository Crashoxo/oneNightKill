import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import logInPage from '../layouts/Main.vue';
import GameRoomList from '../layouts/GameRoomList.vue';

const routes: Array<RouteRecordRaw> = [
    // 登入帳號 Main.vue
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta:{
            layout: logInPage
        }
    },
    // 註冊帳號
    {
        path: '/gameRoomList',
        name: 'gameRoomList',
        component: () => import('../layouts/GameRoomList.vue'),
        meta:{
            layout: GameRoomList
        }
    }
    // {
    //     path: '/logIn',
    //     name: 'logIn',
    //     component: () => import('../views/add.vue'),
    //     meta:{
    //         layout: logInPage
    //     }
    // },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router