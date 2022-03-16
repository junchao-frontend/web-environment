import request from '@/utils/request'

// cems折线图数据
export const getCemsData = (params) => {
    return request({
        url: '/getBigScreenLook',
        methods: 'get',
        params
    })
}

// 数据采集模块data
export const getCollectionData = (params) => {
    return request({
        url: '/getBigScreenLook/dataCount',
        methods: 'get',
        params
    })
}