//统计局---农林牧渔总产值 接口
import request from '@/utils/request'

// 农林牧渔总产值分页
export function  statistTotalValueSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nlmy/selectListByPage',
      data
    })
  }

  // 农林牧渔总产值删除
  export function  statistTotalValueDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nlmy/delete',
      data
    })
  }

    // 农林牧渔总产值 审核
  export function  statistTotalValueAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nlmy/audit',
      data,
      params
    })
  }
   // 农林牧渔总产值 详情
   export function  statistTotalValueDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nlmy/detail',
      params
    })
  }

  // 农林牧渔总产值 编辑
export function  statistTotalValueUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/nlmy/update',
    data
  })
}

  // 农林牧渔总产值 新增
  export function  statistTotalValueInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nlmy/insert',
      data
    })
  }