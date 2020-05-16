import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/information",
    name: "Information",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Information.vue")
  },
  {
    path: "/order",
    name: "order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order.vue")
  },
  {
    path: "/update/:menuName/:menuPrice/:category",
    name: "update",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MenuUpdateView.vue")
  },
  {
    path: "/menu",
    name: "menu",
    children:[
      {
        path:'update/:menuID',
        component: () => import(/* webpackChunkName: "about" */ "../components/MenuUpdate.vue")
      },
      {
        path:'group',
        name:"group",
        component: () => import(/* webpackChunkName: "about" */ "../components/MenuGroupPlus.vue")
      },
      {
        path:'',
        component: () => import(/* webpackChunkName: "about" */ "../components/MenuItem.vue")
      }
    ],
    component: () => import(/* webpackChunkName: "about" */ "../views/Menu.vue")
    
  },
  {
    path: "/group",
    name: "group",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/MenuGroup.vue")
  },
  {
    path: "/",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
