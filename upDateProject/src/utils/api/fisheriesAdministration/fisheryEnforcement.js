//种植业股----渔业执法情况
import request from '@/utils/request'

// 渔业执法情况 分页
export function  fisheryEnforcementList(data) {
    return request({
      method: 'POST',
      url: '/aquatic-enforcement/aquatic-enforcement/selectListByPage',
      data
    })
  }

  // 渔业执法情况 删除
  export function  fisheryEnforcementDelete(data) {
    return request({
      method: 'POST',
      url: '/aquatic-enforcement/aquatic-enforcement/delete',
      data
    })
  }

    // 渔业执法情况  审核
  export function  fisheryEnforcementAudit(data,params) {
    return request({
      method: 'POST',
      url: '/aquatic-enforcement/aquatic-enforcement/audit',
      data,
      params
    })
  }

// 渔业执法情况  详情
export function  fisheryEnforcementDetail(params) {
    return request({
        method: 'POST',
        url: '/aquatic-enforcement/aquatic-enforcement/detail?',
        params
    })
}

// 渔业执法情况  新增
export function  fisheryEnforcementInsert(data) {
    return request({
        method: 'POST',
        url: '/aquatic-enforcement/aquatic-enforcement/insert',
        data
    })
}

// 渔业执法情况  编辑
export function  fisheryEnforcementUpdate(data) {
    return request({
        method: 'POST',
        url: '/aquatic-enforcement/aquatic-enforcement/update',
        data
    })
}