import VueRouter from 'vue-router'
import MainPage from "../pages/MainPage";
import DeliveryPage from "../pages/DeliveryPage";
import ReturnExchangePage from "../pages/ReturnExchangePage";

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage
    },
    {
      path: "/delivery",
      name: "delivery",
      component: DeliveryPage
    },
    {
      path: "/return-exchange",
      name: "return-exchange",
      component: ReturnExchangePage
    },
    // {
    //   path: "/contacts",
    //   name: "contacts",
    //   component: ContactsPage
    // },
  ]
})