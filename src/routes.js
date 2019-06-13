
import Vue from 'vue'
import Router from 'vue-router'
import Item from './components/Item'
import Main from './Pages/Main'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AdminPage from './Pages/AdminPage'
import SignUp from './Pages/SignUp'
import LoginPage from './Pages/LoginPage'
import Shops from './Pages/Shops'
import ImageLoad from './components/ImageLoad'
import Woman from './Pages/Woman'
Vue.use(VueAxios, axios)

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/shops',
            name: 'shops',
            component: Shops
        },
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path:'/admin',
            name: 'admin',
            component: AdminPage
        },
        {
            path: '/imgload',
            name: 'imageLoad',
            component: ImageLoad
        },
        {
            path: '/woman',
            name: 'woman',
            component: Woman
        }
    ]
})