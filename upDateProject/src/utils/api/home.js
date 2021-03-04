import requestMenu from '@/utils/requestMenu'

export function getMenuById (params) {
    return requestMenu({
        method: 'GET',
        //url: '/bigdata_update_nanxian/user/getMenuById',
        url:'/clesun/controller/v1.0/getMenuById',
        params
      })
}

//退出登录
export function loginOut(){
    return requestMenu({
        method: 'POST',
        url: '/clesun/controller/v1.0/logout',
    })
}

//获取跳转路径
export function getUrl(){
    return requestMenu({
        method: 'GET',
        url: '/clesun/controller/v1.0/getUrl',
    })
}
