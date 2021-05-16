import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Coin from "../views/Coin/Coin.vue";
import Coins from "../views/Coin/Coins.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coin:symbol",
    name: "Coin",
    component: Coin,
    props: true,
  },
  {
    path: "/coin",
    name: "Coins",
    component: Coins,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
