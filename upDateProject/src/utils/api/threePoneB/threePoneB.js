//三品一标
import request from '@/utils/request'

// 三品一标分页
export function  threePoneBList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-quality/selectListByPage',
      data
    })
  }

  // 三品一标删除
  export function  threePoneBDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-quality/delete',
      data
    })
  }

    // 三品一标 审核
  export function  threePoneBAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-quality/audit',
      data,
      params
    })
  }

// 三品一标 详情
export function  threePoneBDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/enterprise-quality/detail?',
        params
    })
}

// 三品一标 新增
export function  threePoneBInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/enterprise-quality/insert',
        data
    })
}

// 三品一标 编辑
export function  threePoneBUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/enterprise-quality/update',
        data
    })
}