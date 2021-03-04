// 基础信息
import request from '@/util/request'

//获取农林牧渔数据  
export function agricultureAndForestry () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/geographicInformation/agricultureAndForestry'
  })
}

//获取农林牧渔产值数据  
export function agricultureAndForestryByYear (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/geographicInformation/agricultureAndForestryBy2019',
    params
  })
}

//获取耕地面积数据  
export function cultivatedLandSumArea () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/geographicInformation/cultivatedLandSumArea'
  })
}

//获取各乡镇耕地面积数据  
export function cultivatedLandAreaByTownShip (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/geographicInformation/cultivatedLandAreaByTownShip',
    params
  })
}

//获取植保防治趋势数据  
export function getPlantDiseaseControl () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getPlantDiseaseControl'
  })
}

//获取投入品用量数据  
export function getProductionType () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getProductionType'
  })
}