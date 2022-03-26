import axios from 'axios'
import Cookies from 'js-cookie'
const service = axios.create({
    baseURL: 'http://106.52.170.16:8090/',
    // baseURL: 'http://127.0.0.1:7008/',
    timeout: 2000000 // 请求超时时间
})

service.interceptors.request.use(
    config => {
        // eslint-disable-next-line no-unused-vars
        const token = Cookies.get('token')
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZDgwODJjMDdmMjBjYzdmOTYyNmY4ZSIsImFjY291bnQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJHdlc3R2alQzb0t0SzNGOUFlaXU2bk9MLkk0VTJVSVZvRU54eWhta1VWc0lDQWdlbnU5eDNTIiwibmFtZSI6ImFkbWluIiwiQXZhdGFyVXJsIjoiaHR0cDovLzEwNi41Mi4xNzAuMTY6OTAwMC9hdmF0YXIvYXZhdGFyX1FR5Zu-54mHMjAxOTExMDgyMjQxNTEuanBnIiwic2V4Ijoi55S3IiwicGhvbmUiOiIxMjM0NTYiLCJzYWx0IjoiNDczMjgxMzQ1ODA4MDcxNTk0MCIsInJvbGVJZCI6IjYxZTM3MzljMTQyZDZkNmRjMDFiN2M4OSIsIm9wZW5JZCI6IiJ9LCJpc3MiOiJzZGwiLCJuYmYiOjE2NDc5OTgwMjl9.GffJCxuSJtiue0BW0rOrdSNKvtVrmVrBCR8og-16UTk'
        if (token) {
            config.headers['token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        // Do something with request error
        // console.log(error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        return response
    },
    // error => {
    //     // Do something with request error
    //     // console.log(error) // for debug
    //     // console.dir(error.response.data.code);
    //     // if(error.response.data.code === 500) {
    //     //     window.location.href = 'http://106.52.170.16:8401/'
    //     // }
    //     Cookies.remove()
    //     // window.location.href = 'http://106.52.170.16:8401/'
    //     // return Promise.reject(error)
    // }
)
export default service