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
    children:[
      {
        path: "",
        name: "",
        component: () =>
        import(
          /* webpackChunkName: "about" */ "../components/receptionWait.vue"
        )
      },
      {
        path: "process",
        name: "process",
        component: () =>
        import(
          /* webpackChunkName: "about" */ "../components/receptionProcess.vue"
        )
      },
      {
        path: "complete",
        name: "complete",
        component: () =>
        import(
          /* webpackChunkName: "about" */ "../components/receptionComplete.vue"
        )
      },
      {
        path: "lookup",
        name: "lookup",
        component: () =>
        import(
          /* webpackChunkName: "about" */ "../components/receptionLookup.vue"
        )
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order.vue")
  },

  {
    path: "/menu",
    name: "menu",
    children: [
      {
        path: "update/:menuID/:categoryID",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/MenuUpdate.vue")
      },
      {
        path: "group",
        name: "group",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/MenuGroupPlus.vue"
          )
      },
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "../components/MenuItem.vue")
      }
    ],
    component: () => import(/* webpackChunkName: "about" */ "../views/Menu.vue")
  },

  {
    path: "/",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
