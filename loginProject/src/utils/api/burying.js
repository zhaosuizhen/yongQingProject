import request from '@/utils/requestBurying'

//登陆埋点
export function visitsCount(params) {
    return request({
        method: 'GET',
        url: '/datamanage/api/data-user-behavior-logs/visitsCount',
        params
    })  
}
