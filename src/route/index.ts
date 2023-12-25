import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import logInPage from '../layouts/Main.vue';
// import logInPage from '../layouts/Takoyaki.vue';
import CrateAccount from '../layouts/CrateAccount.vue';

const routes: Array<RouteRecordRaw> = [
    // 登入帳號
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
        path: '/crateAccount',
        name: 'crateAccount',
        component: () => import('../layouts/CrateAccount.vue'),
        meta:{
            layout: CrateAccount
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