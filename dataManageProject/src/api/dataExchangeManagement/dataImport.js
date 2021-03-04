// 数据库接入配置
import request from '@/utils/request'

//数据导入配置分页查询接口 
export function getPageList (params) {
  return request({
    method: 'GET',
    url: '/datamanage/data-base-import-configuration-table/getPageList',
    params
  })
}

//志信息分页展示接口 
export function pageList (params) {
  return request({
    method: 'GET',
    url: '/datamanage/data-kettle-logs/pageList',
    params
  })
}

//启动按钮 
export function implement (params) {
  return request({
    method: 'GET',
    url: '/datamanage/data-base-import-configuration-table/implement',
    params
  })
}

//数据库配置分页查询接口 
export function getDataBasePageList () {
  return request({
    method: 'GET',
    url: '/datamanage/data-base-connection-configuration/getPageList',
    params:{
        currentPage:1,
        pageSize:1000
    }
  })
}

//获取当前连接下所有数据库 
export function getConnectionAllDataBase (params) {
  return request({
    method: 'POST',
    url: '/datamanage/data-base-connection-configuration/getConnectionAllDataBase',
    params
  })
}

//获取当前连接下指定数据库的所有表 
export function getConnectionAppointDataBaseAllTables (params) {
  return request({
    method: 'GET',
    url: '/datamanage/data-base-connection-configuration/getConnectionAppointDataBaseAllTables',
    params
  })
}

//获取当前连接下指定数据库的指定表的所有字段及类型和注释 
export function getConnectionAppointDataBaseAppointTablesAllField (params) {
  return request({
    method: 'POST',
    url: '/datamanage/data-base-connection-configuration/getConnectionAppointDataBaseAppointTablesAllField',
    params
  })
}

//数据导入接口 
export function dataBasePreservation (data) {
  return request({
    method: 'POST',
    url: '/datamanage/data-base-connection-configuration/dataBasePreservation',
    data
  })
}