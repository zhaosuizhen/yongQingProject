// 生产种植相关接口
import request from '@/util/request'

//获取生产类型占比数据  
export function getPZCL () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getFoodAndCashData'
  })
}

//获取主要品种面积数据  
export function getrapeplantdata () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getRapePlantData'
  })
}

//获取农机数据  
export function machinerycount () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getMachineClass'
  })
}

//获取经济作物、粮食作物数据  
  export function getproductionbytype () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getCropCashAreaAndYield'
  })
}
export function getproductionbytypeFood () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getCropFoodAreaAndYield'
  })
}
//获取种植面积数据  
export function getXZQSLS (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getXZQS',
    params
  })
}

//农事信息查询
export function getPeopleCounts () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cFarmingWeb/peopleCounts'
  })
}
