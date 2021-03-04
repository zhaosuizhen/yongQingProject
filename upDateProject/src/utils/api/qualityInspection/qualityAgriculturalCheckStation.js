//质检办---农产品检测站信息 接口
import request from '@/utils/request'

// 农产品检测站信息分页
export function  qualityCheckStationSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-checkpoint/selectListByPage',
      data
    })
  }

  // 农产品检测站信息删除
  export function  qualityCheckStationDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-checkpoint/delete',
      data
    })
  }

    // 农产品检测站信息 审核
  export function  qualityCheckStationAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-checkpoint/audit',
      data,
      params
    })
  }
   // 农产品检测站信息 详情
   export function  qualityCheckStationDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-checkpoint/detail',
      params
    })
  }

  // 农产品检测站信息 编辑
export function  qualityCheckStationUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-checkpoint/update',
    data
  })
}

  // 农产品检测站信息 新增
  export function  qualityCheckStationInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-checkpoint/insert',
      data
    })
  }