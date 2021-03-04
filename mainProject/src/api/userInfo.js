// 登录、用户信息相关接口
import request from '@/util/request'
import request_login from '@/util/request_login'

//登录  
export function login (params) {
  return request_login({
    method: 'POST',
    url: '/clesun/api/v1.0/login',
    params
  })
}

//修改个人信息  
export function modifyPersonalInformation (params) {
  return request_login({
    method: 'POST',
    url: '/clesun/api/v1.0/user/updateUserPassword',
    params
  })
}

//查看个人信息  
export function details (params) {
  return request({
    method: 'POST',
    url: '/clesun/achievement_networking_api/v1.0/login/details',
    params
  })
}