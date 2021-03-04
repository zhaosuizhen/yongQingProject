//渔业渔政股----水库渔业生产情况
import request from '@/utils/request'

// 水库渔业生产情况 分页
export function  reservoirProductionList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-reservoir-product/selectListByPage',
      data
    })
  }

  // 水库渔业生产情况 删除
  export function  reservoirProductionDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-reservoir-product/delete',
      data
    })
  }

    // 水库渔业生产情况  审核
  export function  reservoirProductionAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-reservoir-product/audit',
      data,
      params
    })
  }

// 水库渔业生产情况  详情
export function  reservoirProductionDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-reservoir-product/detail?',
        params
    })
}

// 水库渔业生产情况  新增
export function  reservoirProductionInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-reservoir-product/insert',
        data
    })
}

// 水库渔业生产情况  编辑
export function  reservoirProductionUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-reservoir-product/update',
        data
    })
}