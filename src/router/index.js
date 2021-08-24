import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TodoList from "../views/TodoList.vue";
import SignUpForm from "../components/SignUpForm.vue";
import LoginForm from "../components/LoginForm.vue";
import User from "../views/User.vue";
import Profile from "../views/Profile.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: LoginForm,
    name: "LoginForm",
  },
  {
    path: "/user/:id",
    component: User,
    children: [
      {
        path: "profile",
        component: Profile,
      },
    ],
  },
  {
    path: "/todo",
    name: "Todo",
    component: TodoList,
  },
  {
    path: "/register",
    name: "Register",
    component: SignUpForm,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
