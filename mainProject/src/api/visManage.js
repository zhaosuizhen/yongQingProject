// 经营主体相关接口
// import request from './request'
import request from '@/util/request'

//获取经营主体数据————企业数量、占地面积、企业产值
export function getbusinessdata () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/getbusinessdata'
  })
}

//获取主体类型统计数据
export function getbusinesstype () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/getbusinesstype'
  })
}

//获取经营类型统计数据
export function getJYLX () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/getJYLX'
  })
}

//获取乡镇主体分布数据
export function gettownssum () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/gettownssum'
  })
}

//获取历年企业增长数量数据
export function getbusinessgdpyears () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/getbusinessgdpyears'
  })
}

//获取三品一标企业数据  
export function thirdgrade () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/thirdgrade'
  })
}

//获取经营主体分页  
export function getPageList (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/management/pageList',
    params
  })
}

