import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import logInPage from '../layouts/Main.vue';
import GameRoomList from '../layouts/GameRoomList.vue';
import GameRoom from '../layouts/GameRoom.vue';

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
    // 房間列表
    {
        path: '/gameRoomList',
        name: 'gameRoomList',
        component: () => import('../layouts/GameRoomList.vue'),
        meta:{
            layout: GameRoomList
        }
    },
    // 房間
    {
        path: '/room/:id',
        name: 'Room',
        component: () => import('../layouts/GameRoom.vue'),
        meta:{
            layout: GameRoom
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