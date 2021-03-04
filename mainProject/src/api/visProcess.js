// 渔业养殖相关接口
import request from '@/util/request'

//获取养殖品种占比数据  
export function getaquatictypeproportion () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/aquaticstock/getProportionOfVarieties'
  })
}

//获取渔业人口数据  
export function getfisheriespeople () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/aquaticstock/getFisheriesPeople'
  })
}

//获取主要养殖品种规模数据  
export function getmaintypescale (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/aquaticstock/getMainTypeScale',
    params
  })
}

//获取渔业养殖数据  
export function getaquaticoutvalue (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/aquaticstock/getAquaticOutValue',
    params
  })
}

//获取渔业执法数据  
export function getLawEnforcement (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/aquaticstock/getLawEnforcement',
    params
  })
}