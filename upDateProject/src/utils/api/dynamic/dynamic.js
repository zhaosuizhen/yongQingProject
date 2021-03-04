//园区动态 接口
import request from '@/utils/request'

// 园区动态分页
export function dynamicSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/park-dynamics/selectListByPage',
      data
    })
  }

  //园区动态 删除
  export function  dynamicDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/park-dynamics/delete',
      data
    })
  }
//园区动态 审核
export function  dynamicAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/park-dynamics/audit',
    data,
    params
  })
}

//园区动态 详情
export function  dynamicDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/park-dynamics/detail',
    params
  })
}

//园区动态 编辑
export function  dynamicUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/park-dynamics/update',
    data
  })
}

//园区动态 新增
export function  dynamicInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/park-dynamics/insert',
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