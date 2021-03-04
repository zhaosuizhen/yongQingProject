//统计局---主要农产品单位面积产量 接口
import request from '@/utils/request'

// 主要农产品单位面积产量分页
export function  agrYieldUnitAreaSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield-area/selectListByPage',
      data
    })
  }

  // 主要农产品单位面积产量删除
  export function  agrYieldUnitAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield-area/delete',
      data
    })
  }

    // 主要农产品单位面积产量 审核
  export function  agrYieldUnitAreaAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield-area/audit',
      data,
      params
    })
  }
   // 主要农产品单位面积产量 详情
   export function  agrYieldUnitAreaDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield-area/detail',
      params
    })
  }

  // 主要农产品单位面积产量 编辑
export function  agrYieldUnitAreaUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-yield-area/update',
    data
  })
}

  // 主要农产品单位面积产量 新增
  export function  agrYieldUnitAreaInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield-area/insert',
      data
    })
  }