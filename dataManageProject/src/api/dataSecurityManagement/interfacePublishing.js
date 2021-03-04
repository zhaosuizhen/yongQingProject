// 数据备份还原相关接口
import request from '@/utils/request'
// import qs from 'qs'

//数据接口发布列表
export function interfacePublishingPageList (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-interface/interfacePublishingPageList`,
    params
  })
}

//接口详情展示
export function details (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-interface/details`,
    params
  })
}

//数据接口发布
export function dataInterfaceRelease (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-interface/dataInterfaceRelease`,
    params
  })
}

//数据接口新增
export function insert (params) {
  return request({
    method: 'POST',
    url: `/datamanage/data-interface/insert`,
    params
  })
}

