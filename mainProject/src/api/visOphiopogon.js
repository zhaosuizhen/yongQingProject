// 麦冬种植接口
// import request from './request'
import request from '@/util/request'

//获取麦冬鲜/干产量
export function maidongYield () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/liriope/yield'
  })
}


//获取养殖情况数据
export function cattleBreeding (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestockBreedingWeb/cattleBreeding',
    params
  })
}

//获取存栏/出栏量数据
export function inOrOutAmount (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestockBreedingWeb/inOrOutAmount',
    params
  })
}