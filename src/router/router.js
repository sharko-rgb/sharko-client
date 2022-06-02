import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import UserPages from "@/pages/UserPages";
import ChangePage from "@/pages/ChangePage";
import SavePages from "@/pages/SavePages";
import panelPages from "@/pages/panelPages";
import SeorchPages from "@/pages/SeorchPages";

const routes = [{
        path: '/',
        component: UserPages
    },
    {
        path: '/posts/:category',
        component: ChangePage
    },
    {
        path: '/postsave',
        component: SavePages
    },
    {
        path: '/panelpage',
        component: panelPages
    },
    {
        path: '/seorch/:parametr',
        component: SeorchPages
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;