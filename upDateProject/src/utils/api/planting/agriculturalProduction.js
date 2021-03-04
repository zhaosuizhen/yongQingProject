//种植业股----农业生产条件
import request from '@/utils/request'

// 农业生产条件 分页
export function  agriculturalProductionList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-production/selectListByPage',
      data
    })
  }

  // 农业生产条件 删除
  export function  agriculturalProductionDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-production/delete',
      data
    })
  }

    // 农业生产条件  审核
  export function  agriculturalProductionAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-production/audit',
      data,
      params
    })
  }

// 农业生产条件  详情
export function  agriculturalProductionDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-production/detail?',
        params
    })
}

// 农业生产条件  新增
export function  agriculturalProductionInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-production/insert',
        data
    })
}

// 农业生产条件  编辑
export function  agriculturalProductionUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-production/update',
        data
    })
}