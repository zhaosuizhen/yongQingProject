//植保站----土壤采样面积分布
import request from '@/utils/request'

// 土壤采样面积分布 分页
export function  monitoringPointDataList(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/land-distribution-yield/selectListByPage',
      data
    })
  }

  // 土壤采样面积分布 删除
  export function  monitoringPointDataDelete(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/land-distribution-yield/delete',
      data
    })
  }

    // 土壤采样面积分布  审核
  export function  monitoringPointDataAudit(data,params) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/land-distribution-yield/audit',
      data,
      params
    })
  }

// 土壤采样面积分布  详情
export function  monitoringPointDataDetail(params) {
    return request({
        method: 'POST',
        url: '/com.clesun.bigdata_update_nanxian/land-distribution-yield/detail?',
        params
    })
}

// 土壤采样面积分布  新增
export function  monitoringPointDataInsert(data) {
    return request({
        method: 'POST',
        url: '/com.clesun.bigdata_update_nanxian/land-distribution-yield/insert',
        data
    })
}

// 土壤采样面积分布  编辑
export function  monitoringPointDataUpdate(data) {
    return request({
        method: 'POST',
        url: '/com.clesun.bigdata_update_nanxian/land-distribution-yield/update',
        data
    })
}

