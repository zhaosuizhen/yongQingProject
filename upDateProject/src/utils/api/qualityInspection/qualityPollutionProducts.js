/**
 * 质检办--无公害企业产品数据模块请求
 */
import request from '@/utils/request'

// 无公害企业产品数据分页查询
export function qualityPollutionSelectList (data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nuisanceless/selectListByPage',
      data
    })
  }

//无公害企业产品数据 删除
export function qualityPollutionDeleteItems (data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/nuisanceless/delete',
    data
  })
}

// 无公害企业产品数据 审核
export function qualityPollutionAudit (data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/nuisanceless/audit',
    data,
    params
  })
}

// 无公害企业产品数据 详情
export function qualityPollutionDetail (params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/nuisanceless/detail',
    params
  })
}

// 无公害企业产品数据 编辑
export function qualityPollutionUpdate (data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/nuisanceless/update',
    data
  })
}

// 无公害企业产品数据 新增
export function qualityPollutionInsert (data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/nuisanceless/insert',
    data
  })
}
