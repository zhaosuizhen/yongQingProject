import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import login from './view/login'; //登录页面
import home1 from './view/home';   //主页面 导航

const routes = [
    {
        path: '/',
		redirect: '/login',
    },
    {
        path: '/login',
        component: login,
        name: 'login',
    },
    {
        path: '/home',
        component: home1,
        name: 'home',
    },

]
var router =  new VueRouter({
    routes
})

export default router