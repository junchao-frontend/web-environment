import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
        path: '/photo',
        name: 'photo',
        component: ()=>import('../views/photo.vue')
    },
    {
        path: '/',
        name: 'home',
        component: ()=>import('../views/home.vue')
    }
]

const router=new VueRouter({
    //ES6简写，等于routes：routes
        routes
    });
export default router
