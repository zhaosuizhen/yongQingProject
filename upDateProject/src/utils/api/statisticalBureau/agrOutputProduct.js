//统计局---主要农产品产量 接口
import request from '@/utils/request'


// 主要农产品产量分页
export function  agrOutputProductSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield/selectListByPage',
      data
    })
  }

  // 主要农产品产量删除
  export function  agrOutputProductDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield/delete',
      data
    })
  }

    // 主要农产品产量 审核
  export function  agrOutputProductAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield/audit',
      data,
      params
    })
  }
   // 主要农产品产量 详情
   export function  agrOutputProductDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield/detail',
      params
    })
  }

  // 主要农产品产量 编辑
export function  agrOutputProductUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-yield/update',
    data
  })
}

  // 主要农产品产量 新增
  export function  agrOutputProductInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-yield/insert',
      data
    })
  }