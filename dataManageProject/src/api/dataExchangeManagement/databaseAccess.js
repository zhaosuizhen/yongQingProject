// 数据库接入配置
import request from '@/utils/request'

//数据库配置分页查询接口 
export function getPageList (params) {
  return request({
    method: 'GET',
    url: '/datamanage/data-base-connection-configuration/getPageList',
    params
  })
}

//新增数据库连接配置信息 
export function insertDataBaesConnection (data) {
  return request({
    method: 'POST',
    url: '/datamanage/data-base-connection-configuration/insertDataBaesConnection',
    data
  })
}

//修改数据库连接配置信息 
export function updateDataBaesConnection (data) {
  return request({
    method: 'POST',
    url: '/datamanage/data-base-connection-configuration/updateDataBaesConnection',
    data
  })
}

//测试连接是否调通 
export function testConnection (data) {
  return request({
    method: 'POST',
    url: '/datamanage/data-base-connection-configuration/testConnection',
    data
  })
}