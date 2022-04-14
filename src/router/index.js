import Vue from "vue";
import VueRouter from "vue-router";
import BoardView from "../views/BoardView.vue";

Vue.use(VueRouter);

const routes = [
  {
    // 가장 처음 화면
    path: "/",
    name: "home",
    component: BoardView,
  },
  {
    path: "/board",
    name: "board",
    // 아래 children사용을 위해 component연결
    component: BoardView,
    children: [
      {
        path: ":page",
        component: function () {
          return import("../components/PageComponent.vue");
        },
      },
    ],
  },
  {
    // 로그인화면
    path: "/login",
    name: "login",
    component: function () {
      return import("../views/LoginView.vue");
    },
  },
  {
    // 유저화면
    path: "/user/:user",
    name: "user",
    component: function () {
      return import("../views/UserView.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;