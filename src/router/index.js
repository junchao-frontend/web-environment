import Vue from 'vue'
import VueRouter from 'vue-router'
// import Cookies from 'js-cookie'
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
        // const token = Cookies.get('token')
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZDgwODJjMDdmMjBjYzdmOTYyNmY4ZSIsImFjY291bnQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJHdlc3R2alQzb0t0SzNGOUFlaXU2bk9MLkk0VTJVSVZvRU54eWhta1VWc0lDQWdlbnU5eDNTIiwibmFtZSI6ImFkbWluIiwiQXZhdGFyVXJsIjoiaHR0cDovLzEwNi41Mi4xNzAuMTY6OTAwMC9hdmF0YXIvYXZhdGFyX1FR5Zu-54mHMjAxOTExMDgyMjQxNTEuanBnIiwic2V4Ijoi55S3IiwicGhvbmUiOiIxMjM0NTYiLCJzYWx0IjoiNDczMjgxMzQ1ODA4MDcxNTk0MCIsInJvbGVJZCI6IjYxZTM3MzljMTQyZDZkNmRjMDFiN2M4OSIsIm9wZW5JZCI6IiJ9LCJpc3MiOiJzZGwiLCJuYmYiOjE2NDg2MDMwODF9.KH34joNDrDvL_VM7968aUPgKqisKkN0Re_2fRXP8ADY'
        // console.log(token);
        // eslint-disable-next-line no-undef
        if (token) {
          next()
        } else {
            window.location.href = 'http://106.52.170.16:8401/'
        }
      })
export default router
