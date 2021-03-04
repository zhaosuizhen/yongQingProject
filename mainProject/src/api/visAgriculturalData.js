// 农机数据页面相关接口
import request from '@/util/request'

//农村从业人口 
export function employedPopulation () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/productionPlantingWeb/employedPopulation'
  })
}

//单品种面积 
export function areaOfSingleVariety (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/productionPlantingWeb/areaOfSingleVariety',
    params
  })
}

//各乡镇面积 
export function townshipArea (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/productionPlantingWeb/townshipArea',
    params
  })
}

//种植单产 
export function plantingYieldPerUnitArea (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/productionPlantingWeb/plantingYieldPerUnitArea',
    params
  })
}

//种植产量 
export function plantingYield (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/productionPlantingWeb/plantingYield',
    params
  })
}

//种植面积 
export function plantingArea (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/productionPlantingWeb/plantingArea',
    params
  })
}