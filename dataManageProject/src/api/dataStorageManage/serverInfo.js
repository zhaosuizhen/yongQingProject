// 服务器状态相关接口
import request from '@/utils/request'
// import qs from 'qs'

//数据存储状态分析---磁盘使用率 
export function diskUtilization () {
  return request({
    method: 'GET',
    url: `/datamanage/data-storage/diskUtilization`
  })
}

//数据存储状态分析---负载均衡 
export function loadBalancing () {
  return request({
    method: 'GET',
    url: `/datamanage/data-storage/loadBalancing`
  })
}

//数据存储状态分析---内存使用率 
export function memoryUsage () {
  return request({
    method: 'GET',
    url: `/datamanage/data-storage/memoryUsage`
  })
}

//数据存储状态分析---内存使用情况 
export function memoryUsageSituation (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-storage/memoryUsageSituation`,
    params
  })
}

//数据存储状态分析---数据存储状态分析---服务器请求数量 
export function memoryUserverRequestsNumbersage (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-storage/serverRequestsNumber`,
    params
  })
}

//数据存储状态分析---用户访问数量
export function userAccessNumber (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-storage/userAccessNumber`,
    params
  })
}
