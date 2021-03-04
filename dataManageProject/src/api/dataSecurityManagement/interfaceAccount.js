// 数据备份还原相关接口
import request from '@/utils/request'
// import qs from 'qs'

//接口账号分页展示
export function pageList (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-user/pageList`,
    params
  })
}

//新增接口账号配置
export function insert (params) {
  return request({
    method: 'POST',
    url: `/datamanage/data-user/insert`,
    params
  })
}

//接口账号详情展示
export function details (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-user/details`,
    params
  })
}

//接口树状展示
export function dataInterfaceTree (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-interface/dataInterfaceTree`,
    params
  })
}

//数据接口与用户关联新增
export function insertUserInterface (params) {
  return request({
    method: 'POST',
    url: `/datamanage/data-interface-association-user/insert?${params}`
  })
}
