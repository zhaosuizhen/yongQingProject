//渔业渔政股----渔业增加值
import request from '@/utils/request'

// 渔业增加值 分页
export function  fisheryAddYieldList(data) {
    return request({
      method: 'POST',
      url: '/fishery-increase/fishery-increase/selectListByPage',
      data
    })
  }

  // 渔业增加值 删除
  export function  fisheryAddYieldDelete(data) {
    return request({
      method: 'POST',
      url: '/fishery-increase/fishery-increase/delete',
      data
    })
  }

    // 渔业增加值  审核
  export function  fisheryAddYieldAudit(data,params) {
    return request({
      method: 'POST',
      url: '/fishery-increase/fishery-increase/audit',
      data,
      params
    })
  }

// 渔业增加值  详情
export function  fisheryAddYieldDetail(params) {
    return request({
        method: 'POST',
        url: '/fishery-increase/fishery-increase/detail',
        params
    })
}

// 渔业增加值  新增
export function  fisheryAddYieldInsert(data) {
    return request({
        method: 'POST',
        url: '/fishery-increase/fishery-increase/insert',
        data
    })
}

// 渔业增加值  编辑
export function  fisheryAddYieldUpdate(data) {
    return request({
        method: 'POST',
        url: '/fishery-increase/fishery-increase/update',
        data
    })
}