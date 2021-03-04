//种植业股----果园面积
import request from '@/utils/request'

// 果园面积 分页
export function  orchardAreaList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/orchard-area/selectListByPage',
      data
    })
  }

  // 果园面积 删除
  export function  orchardAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/orchard-area/delete',
      data
    })
  }

    // 果园面积  审核
  export function  orchardAreaAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/orchard-area/audit',
      data,
      params
    })
  }

// 果园面积  详情
export function  orchardAreaDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/orchard-area/detail?',
        params
    })
}

// 果园面积  新增
export function  orchardAreaInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/orchard-area/insert',
        data
    })
}

// 果园面积  编辑
export function  orchardAreaUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/orchard-area/update',
        data
    })
}