//渔业渔政股----渔业产值
import request from '@/utils/request'

// 渔业产值 分页
export function  fisheryYieldList(data) {
    return request({
      method: 'POST',
      url: '/fishery-production/fishery-production/selectListByPage',
      data
    })
  }

  // 渔业产值 删除
  export function  fisheryYieldDelete(data) {
    return request({
      method: 'POST',
      url: '/fishery-production/fishery-production/delete',
      data
    })
  }

    // 渔业产值  审核
  export function  fisheryYieldAudit(data,params) {
    return request({
      method: 'POST',
      url: '/fishery-production/fishery-production/audit',
      data,
      params
    })
  }

// 渔业产值  详情
export function  fisheryYieldDetail(params) {
    return request({
        method: 'POST',
        url: '/fishery-production/fishery-production/detail',
        params
    })
}

// 渔业产值  新增
export function  fisheryYieldInsert(data) {
    return request({
        method: 'POST',
        url: '/fishery-production/fishery-production/insert',
        data
    })
}

// 渔业产值  编辑
export function  fisheryYieldUpdate(data) {
    return request({
        method: 'POST',
        url: '/fishery-production/fishery-production/update',
        data
    })
}