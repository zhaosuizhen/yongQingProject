// 生猪相关接口
// import request from './request'

import request from '@/util/request'

//获取养殖产量占比数据  
export function getBreedProportion () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getanimalProductYield'
  })
}

//获取饲料原料价格数据  
export function getMaterialPrice () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getMaterialPrice'
  })
}

//获取养殖规模数据————dataType=0：存栏、dataType=1：出栏
export function getLiveStockYield (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getLiveStockYield',
    params
  })
}

//获取生猪统计数据
export function getLiveStockData (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestock/getLiveStockData',
    params
  })
}

//获取生猪视频
export function getPigVideoUrl () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/video/data'
  })
}

//获取分页数据
export function getBreedPageList (params) {
  return request({
    method: 'POST',
    url: '/clesun/api/v1.0/livestock/getBreedPageList',
    params
  })
}
// *********************************************** //
//获取养殖产量占比
export function proportionOfAquacultureOutput (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/pigBreedingWeb/proportionOfAquacultureOutput',
    params
  })
}

//生猪养殖产量
export function pigBreedingYield () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/pigBreedingWeb/pigBreedingYield'
  })
}

//各乡镇生猪养殖产量
export function eachTowhShipPigBreedingYield (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/pigBreedingWeb/eachTowhShipPigBreedingYield',
    params
  })
}