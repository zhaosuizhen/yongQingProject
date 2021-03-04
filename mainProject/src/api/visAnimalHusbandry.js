// 畜牧养殖页面相关接口
import request from '@/util/request'

//造林面积 
export function getAfforestationArea () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/forestAndFruitIndustryWeb/getAfforestationArea'
  })
}

//各乡镇造林面积 
export function getAfforestationAreaOfEachTownship (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/forestAndFruitIndustryWeb/getAfforestationAreaOfEachTownship',
    params
  })
}

//鲜果产量 
export function getFreshFruitYield () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/forestAndFruitIndustryWeb/getFreshFruitYield'
  })
}

//各乡镇鲜果产量 
export function getFreshFruitOutPutOfEachTownShip (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/forestAndFruitIndustryWeb/getFreshFruitOutPutOfEachTownShip',
    params
  })
}

//各个鲜果产量 
export function getYieldOfEachFreshFruit (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/forestAndFruitIndustryWeb/getYieldOfEachFreshFruit',
    params
  })
}