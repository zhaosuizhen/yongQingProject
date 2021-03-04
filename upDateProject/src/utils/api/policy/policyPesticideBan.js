//政策发规----禁用农药
import request from '@/utils/request'

// 禁用农药分页
export function  noPesticidesList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/policy-pesticide-ban/selectListByPage',
      data
    })
  }

  // 禁用农药删除
  export function  noPesticidesDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/policy-pesticide-ban/delete',
      data
    })
  }

    // 禁用农药 审核
  export function  noPesticidesAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/policy-pesticide-ban/audit',
      data,
      params
    })
  }

// 禁用农药 详情
export function  noPesticidesDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/policy-pesticide-ban/detail?',
        params
    })
}

// 禁用农药 新增
export function  noPesticidesInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/policy-pesticide-ban/insert',
        data
    })
}

// 禁用农药 编辑
export function  noPesticidesUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/policy-pesticide-ban/update',
        data
    })
}