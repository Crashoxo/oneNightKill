import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import main from '../layouts/main.vue';
import logInPage from '../layouts/Takoyaki.vue';

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router