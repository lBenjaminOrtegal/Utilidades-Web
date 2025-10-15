import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Malla from "../views/Malla.vue";
import Notas from "../views/Notas.vue";
import Tareas from "../views/Tareas.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/malla",
            name: "malla",
            component: Malla
        },
        {
            path: "/notas",
            name: "notas",
            component: Notas   
        },
        {
            path: "/tareas",
            name: "tareas",
            component: Tareas
        }
    ]
})

export default router