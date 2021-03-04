// 数据备份还原相关接口
import request from '@/utils/request'
// import qs from 'qs'

//展示所有的库数据
export function getDataBaseList () {
  return request({
    method: 'POST',
    url: `/datamanage/db-operate-record/backupDb/getDataBaseList`,
    params:{
        currentPage: 1,
        pageSize: 1000
    }
  })
}

//展示数据库所有的表数据
export function getBaseTableList (params) {
  return request({
    method: 'POST',
    url: `/datamanage/db-operate-record/backupDb/getBaseTableList`,
    params
  })
}

//数据库表备份
export function handleBackupDb (data) {
  return request({
    method: 'POST',
    url: `/datamanage/db-operate-record/backupDb/handleBackupDb`,
    data
  })
}

//展示数据库已备份的表数据
export function getBaseTableListRecovery (params) {
  return request({
    method: 'POST',
    url: `/datamanage/db-operate-record/backupDb/getBaseTableListRecovery`,
    params
  })
}

//根据表名称展示数据库单个表备份的历史数据
export function getBaseTableListRecoveryToTableName (params) {
  return request({
    method: 'POST',
    url: `/datamanage/db-operate-record/backupDb/getBaseTableListRecoveryToTableName`,
    params
  })
}

//数据库表恢复
export function handleImportDb (params) {
  return request({
    method: 'POST',
    url: `/datamanage/db-operate-record/backupDb/handleImportDb`,
    params
  })
}