//种植业股----林业生产
import request from '@/utils/request'

// 林业生产 分页
export function  forestryProductList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/forestry-production/selectListByPage',
      data
    })
  }

  // 林业生产 删除
  export function  forestryProductDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/forestry-production/delete',
      data
    })
  }

    // 林业生产  审核
  export function  forestryProductAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/forestry-production/audit',
      data,
      params
    })
  }

// 林业生产  详情
export function  forestryProductDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/forestry-production/detail?',
        params
    })
}

// 林业生产  新增
export function  forestryProductInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/forestry-production/insert',
        data
    })
}

// 林业生产  编辑
export function  forestryProductUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/forestry-production/update',
        data
    })
}