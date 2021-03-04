//统计局---畜产品产量 接口
import request from '@/utils/request'

// 畜产品产量分页
export function  liveProductValueSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/animal-product-yield/selectListByPage',
      data
    })
  }

  // 畜产品产量删除
  export function  liveProductValueDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/animal-product-yield/delete',
      data
    })
  }

    // 畜产品产量 审核
  export function  liveProductValueAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/animal-product-yield/audit',
      data,
      params
    })
  }
   // 畜产品产量 详情
   export function  liveProductValueDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/animal-product-yield/detail',
      params
    })
  }

  // 畜产品产量 编辑
export function  liveProductValueUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/animal-product-yield/update',
    data
  })
}

  // 畜产品产量 新增
  export function  liveProductValueInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/animal-product-yield/insert',
      data
    })
  }