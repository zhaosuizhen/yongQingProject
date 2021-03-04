// 数据清洗配置
import request from '@/utils/request'

//获取当前连接下指定数据库的所有表 
export function getConnectionAppointDataBaseAllTables () {
  return request({
    method: 'GET',
    url: '/datamanage/data-base-connection-configuration/getConnectionAppointDataBaseAllTables',
    params:{
        dataBaseName: 'data_management',
        dataBasePassword: 'QsNyt@2007',
        dataBasePort: '2020',
        dataBaseType: 0,
        dataBaseUrl: '39.98.226.242',
        dataBaseUsername: 'root'
    }
  })
}

//根据表名获取表字段
export function getFieldByTableName (params) {
  return request({
    method: 'GET',
    url: '/datamanage/data-cleaning-module/getFieldByTableName',
    params
  })
}

//根据表名和表字段修改数据
export function updateFieldData (params) {
  return request({
    method: 'POST',
    url: '/datamanage/data-cleaning-module/updateFieldData',
    params
  })
}

//根据表名分页展示数据
export function getPageListByTableName (params) {
  return request({
    method: 'GET',
    url: '/datamanage/data-cleaning-module/getPageListByTableName',
    params
  })
}

//根据表名和表字段清空数据
export function deleteFieldData (params) {
  return request({
    method: 'POST',
    url: '/datamanage/data-cleaning-module/deleteFieldData',
    params
  })
}
