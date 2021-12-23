import VueRouter from 'vue-router'
import MainPage from "../pages/MainPage";


export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage
    },
    // {
    //   path: "/cars",
    //   name: "cars",
    //   component: CarsPage
    // },
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