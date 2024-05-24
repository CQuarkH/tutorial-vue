import { createMemoryHistory, createRouter } from "vue-router";
import Contador from "../components/Contador.vue";

const routes = [
   { path: "/", component: Contador },
   // { path: '/about', component: AboutView },
];

export const router = createRouter({
   history: createMemoryHistory(),
   routes,
});
