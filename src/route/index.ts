import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import main from '../layouts/main.vue';
import logInPage from '../layouts/Takoyaki.vue';
import CrateAccount from '../layouts/CrateAccount.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta:{
            layout: main
        }
    },
    {
        path: '/logIn',
        name: 'logIn',
        component: () => import('../views/add.vue'),
        meta:{
            layout: logInPage
        }
    },
    {
        path: '/crateAccount',
        name: 'crateAccount',
        component: () => import('../layouts/CrateAccount.vue'),
        meta:{
            layout: CrateAccount
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router