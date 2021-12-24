import VueRouter from 'vue-router'
import MainPage from "../pages/MainPage";
import DeliveryPage from "../pages/DeliveryPage";


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
    // {
    //   path: "/services",
    //   name: "services",
    //   component: ServicesPage
    // },
    // {
    //   path: "/contacts",
    //   name: "contacts",
    //   component: ContactsPage
    // },
  ]
})