import request from '@/util/requestBurying'

//访问埋点
export function hitsCount(params) {
    return request({
        method: 'GET',
        url: '/datamanage/api/data-user-behavior-logs/hitsCount',
        params
    })  
}
