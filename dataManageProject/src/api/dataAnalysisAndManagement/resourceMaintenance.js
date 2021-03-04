// 用户行为分析相关接口
import request from '@/utils/request'
// import qs from 'qs'

//资源专题初始化数据接口
export function getInitializationDataResourceMaintenance () {
  return request({
    method: 'GET',
    url: `/datamanage/data-resource-maintenance/getInitializationDataResourceMaintenance`
  })
}

//获取数据库中所有表名称及注释
export function getTableName () {
  return request({
    method: 'GET',
    url: `/datamanage/date-menu-tree/getTableName`
  })
}

//根据表名称获取表字段及注释
export function getTableFieldsAndNotesByTableName (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-resource-table/getTableFieldsAndNotesByTableName`,
    params
  })
}

//资源专题新增接口
export function addDataResourceMaintenance (data) {
  return request({
    method: 'POST',
    url: `/datamanage/data-resource-maintenance/addDataResourceMaintenance`,
    data
  })
}

//根据id发布数据
export function updateIsReleaseById (params) {
  return request({
    method: 'POST',
    url: `/datamanage/data-resource-maintenance/updateIsReleaseById`,
    params
  })
}

//获取当前连接下指定数据库的指定表的数据
export function getConnectionAppointDataBaseAppointTablesData (tableName) {
  return request({
    method: 'GET',
    url: `/datamanage/data-base-connection-configuration/getConnectionAppointDataBaseAppointTablesData`,
    params: {
      dataBaseName: 'data_management',
      dataBasePassword: 'QsNyt@2007',
      dataBasePort: '2020',
      dataBaseType: 0,
      dataBaseUrl: '39.98.226.242',
      dataBaseUsername: 'root',
      tableName
    }
  })
}
