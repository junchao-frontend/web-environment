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
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxZDgwODJjMDdmMjBjYzdmOTYyNmY4ZSIsImFjY291bnQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJGpoT01DSGJsaWwwdDFjeHFXZVZxSGVoaWxsc3pEdXFhQzQvTm1hRElINWFhc1VIakdFQy5DIiwibmFtZSI6ImFkbWluIiwiQXZhdGFyVXJsIjoiaHR0cDovLzEwNi41Mi4xNzAuMTY6OTAwMC9hdmF0YXIvYXZhdGFyX1FR5Zu-54mHMjAxOTExMDgyMjQxNTEuanBnIiwic2V4Ijoi55S3IiwicGhvbmUiOiIxMjM0NTYiLCJzYWx0IjoiMTMwMjA3Njk4MzU0MTI2MTg0NyIsInJvbGVJZCI6IjYxZTM3MzljMTQyZDZkNmRjMDFiN2M4OSIsIm9wZW5JZCI6IiJ9LCJleHAiOjE2NDcwNDU3OTgsImlzcyI6InNkbCIsIm5iZiI6MTY0Njk1OTM5OH0.Ri9cni1pp3ohO1LpHAqC_bGQGUakV-RojJ6r-Ey4MJI'
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