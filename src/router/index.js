import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('../views/home.vue')
    },
    {
        path: '/photo',
        name: 'photo',
        component: ()=>import('../views/photo.vue')
    }
]

const router=new VueRouter({
    //ES6简写，等于routes：routes
        routes
    });

    // eslint-disable-next-line no-unused-vars
    router.beforeEach((to, from, next) => {
        // console.log(to)
        // to 是 访问界面
        // from 是来自哪
        // next是放行方法
        const token = Cookies.get('token')
        // console.log(token);
        if (token) {
          next()
        } else {
            window.location.href = 'http://106.52.170.16:8401/'
        }
      })
export default router
