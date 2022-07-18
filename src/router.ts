import { createRouter, createWebHashHistory } from "vue-router";
import AllProducts from "./components/catalog/AllProducts.vue";
import PepperoniProducts from "./components/catalog/PepperoniProducts.vue";
import SpicyPizzaProducts from "./components/catalog/SpicyPizzaProducts.vue";
import ChupaChupsProducts from "./components/catalog/ChupaChupsProducts.vue";
import HariboProducts from "./components/catalog/HariboProducts.vue";
import FrutellaProducts from "./components/catalog/FrutellaProducts.vue";
import MarmeladeProducts from "./components/catalog/MarmeladeProducts.vue";
import PizzaProducts from "./components/catalog/PizzaProducts.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: AllProducts },
    { path: "/pepperoni", component: PepperoniProducts },
    { path: "/spicypizza", component: SpicyPizzaProducts },
    { path: "/chupachups", component: ChupaChupsProducts },
    { path: "/haribo", component: HariboProducts },
    { path: "/frutella", component: FrutellaProducts },
    { path: "/marmelade", component: MarmeladeProducts },
    { path: "/pizza", component: PizzaProducts },
  ],
});
