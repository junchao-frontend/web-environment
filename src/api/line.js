import request from '@/utils/request'

export const getCemsData = (params) => {
    return request({
        url: '/getBigScreenLook',
        methods: 'get',
        params
    })
}