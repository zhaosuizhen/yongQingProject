// 病虫害页面相关接口
import request_yq from '@/util/request'

//设备数据
export function getEquipmentNumber () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/industrialParkWeb/getEquipmentNumber'
  })
}
/**
 * 墒情站数据、采集器数据
 * 根据不同code获取数据
 */ 
export function getDataOfSoilMoistureStation (params) {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/industrialParkWeb/getDataOfSoilMoistureStation',
    params
  })
}

//获取设备的历史数据
export function getHistoricalDataOfTheDevice (params) {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/industrialParkWeb/getHistoricalDataOfTheDevice',
    params
  })
}


