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
    },
    {
        path: '/test',
        name: 'test',
        component: ()=>import('../views/test.vue')
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
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZDgwODJjMDdmMjBjYzdmOTYyNmY4ZSIsImFjY291bnQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJGpoT01DSGJsaWwwdDFjeHFXZVZxSGVoaWxsc3pEdXFhQzQvTm1hRElINWFhc1VIakdFQy5DIiwibmFtZSI6ImFkbWluIiwiQXZhdGFyVXJsIjoiaHR0cDovLzEwNi41Mi4xNzAuMTY6OTAwMC9hdmF0YXIvYXZhdGFyX1FR5Zu-54mHMjAxOTExMDgyMjQxNTEuanBnIiwic2V4Ijoi55S3IiwicGhvbmUiOiIxMjM0NTYiLCJzYWx0IjoiMTMwMjA3Njk4MzU0MTI2MTg0NyIsInJvbGVJZCI6IjYxZTM3MzljMTQyZDZkNmRjMDFiN2M4OSIsIm9wZW5JZCI6IiJ9LCJleHAiOjE2NDcwNDU3OTgsImlzcyI6InNkbCIsIm5iZiI6MTY0Njk1OTM5OH0.Ri9cni1pp3ohO1LpHAqC_bGQGUakV-RojJ6r-Ey4MJI'
        // console.log(token);
        // eslint-disable-next-line no-undef
        if (token) {
          next()
        } else {
            window.location.href = 'http://106.52.170.16:8401/'
        }
      })
export default router
