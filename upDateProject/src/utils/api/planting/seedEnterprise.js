//种植业股----种子企业备案
import request from '@/utils/request'

// 种子企业备案 分页
export function  seedEnterpriseList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-seed/selectListByPage',
      data
    })
  }

  // 种子企业备案 删除
  export function  seedEnterpriseDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-seed/delete',
      data
    })
  }

    // 种子企业备案  审核
  export function  seedEnterpriseAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-seed/audit',
      data,
      params
    })
  }

// 种子企业备案  详情
export function  seedEnterpriseDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/enterprise-seed/detail?',
        params
    })
}

// 种子企业备案  新增
export function  seedEnterpriseInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/enterprise-seed/insert',
        data
    })
}

// 种子企业备案  编辑
export function  seedEnterpriseUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/enterprise-seed/update',
        data
    })
}