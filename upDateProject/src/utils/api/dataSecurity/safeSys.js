//自定义表单 接口
import request from '@/utils/requestManagement'

// 服务器运行状态
export function userCount(){
  return request({
    method: 'POST',
    url: 'clesun/api/v1.0/security/runStatus/getRunStatusInfo'
  })
  .then(res => res.data)
}

// 数据备份状态列表
export function BackupList(){
  return request({
    url: 'clesun/api/v1.0/security/backupDb/getBaseTableList',
    method: 'POST'
  })
  .then(res => res.data)
}

// 数据还原列表
export function RestoreList(){
  return request({
    url: 'clesun/api/v1.0/security/backupDb/getBackupTableRecordList',
    method: 'POST'
  })
  .then(res => res.data)
}

// 数据还原弹窗列表
export function RestoreDetailList($this, params){
  return request({
      url: 'clesun/api/v1.0/security/backupDb/getBackupTableRecordListByName',
      params: {
        tableName: params.tableName
      },
      emulateJSON: true,
      method: 'POST'
    })
    .then(res => res.data)
}

//提交备份请求
export function CommitBackup($this, params){
  return request({
    url: 'clesun/api/v1.0/security/backupDb/handleBackupDb',
    data: JSON.stringify(params),
    method: 'POST'
  })
  .then(res => res.data)
}

//提交还原请求
export function CommitRestore($this, params) {
  return request({
      url: 'clesun/api/v1.0/security/backupDb/handleImportDb',
      params: {
        id: params.id
      },
      method: 'POST'
    })
    .then(res => res.data)
}

// 登录校验
export function Login ($this, params){
  return request({
      url: 'clesun/api/v1.0/security/login',
      params: {
        username: params.username,
        pwd: params.pwd
      },
      method: 'GET'
    })
    .then(res => res.data)
}
