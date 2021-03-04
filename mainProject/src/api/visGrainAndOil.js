// 粮油相关接口
import request from '@/util/request'

//获取粮油产业数据  
export function getOilsIndustry () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/cereals/cereals/getOilsIndustry'
  })
}

//获取粮油品牌介绍  
export function getCerealsOils () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/cereals/cereals/getCerealsOils'
  })
}

//产业脱贫
export function getIndustryOutpoor () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/cereals/cereals/getIndustryOutpoor'
  })
}

//粮油价格
export function getOilPrice () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/cereals/cereals/getOilPrice'
  })
}
