import VueRouter from 'vue-router'
import MainPage from "../pages/MainPage";
import DeliveryPage from "../pages/DeliveryPage";
import ReturnExchangePage from "../pages/ReturnExchangePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";

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
    {
      path: "/privacy-policy-page",
      name: "privacy-policy-page",
      component: PrivacyPolicyPage
    },
  ]
})