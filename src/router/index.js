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
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZDgwODJjMDdmMjBjYzdmOTYyNmY4ZSIsImFjY291bnQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJEJHMk1xek8xSUhHLlNob2xFRVBub3VMSlg5NmtRaXhtMGtGRklVaWRWZEpNeU15Y1dtZDBxIiwibmFtZSI6ImFkbWluIiwiQXZhdGFyVXJsIjoiaHR0cDovLzEwNi41Mi4xNzAuMTY6OTAwMC9hdmF0YXIvYXZhdGFyX1FR5Zu-54mHMjAxOTExMDgyMjQxNTEuanBnIiwic2V4Ijoi5aWzIiwicGhvbmUiOiIxMjM0NTY3ODkyMjM3Iiwic2FsdCI6IjQzNDQ2MDA2OTM4NzQ5ODAxNzciLCJyb2xlIjoi6LaF57qn566h55CG5ZGYIn0sImV4cCI6MTY0MzI4Nzc0MywiaXNzIjoic2RsIiwibmJmIjoxNjQzMjAxMzQzfQ.7HN11zDsJMv9DEsdp_7UoX89whxndAg6w-ie9pKqg6I'
        // console.log(token);
        if (token) {
          next()
        } else {
            window.location.href = 'http://106.52.170.16:8401/'
        }
      })
export default router
