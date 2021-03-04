//执法台账 接口
import request from '@/utils/request'

// 执法台账分页
export function enforcementAccountList(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/law-enforcement-record/selectListByPage',
      data
    })
  }

  //执法台账 删除
  export function  enforcementAccountDelete(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/law-enforcement-record/delete',
      data
    })
  }
//执法台账 审核
export function  enforcementAccountAudit(data,params) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/law-enforcement-record/audit',
    data,
    params
  })
}

//执法台账 详情
export function  enforcementAccountDetail(params) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/law-enforcement-record/detail',
    params
  })
}

//执法台账 编辑
export function  enforcementAccountUpdate(data) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/law-enforcement-record/update',
    data
  })
}

//执法台账 新增
export function  enforcementAccountInsert(data) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/law-enforcement-record/insert',
    data
  })
}

//图片上传
export function  dynamicUpload(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-output-value/upload',
    data
  })
}