//土肥站---投入品使用情况 接口
import request from '@/utils/request'
// 投入品使用情况分页
export function  inputUsageSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-inputs/selectListByPage',
      data
    })
  }

  // 投入品使用情况删除
  export function  inputUsageDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-inputs/delete',
      data
    })
  }

    // 投入品使用情况 审核
  export function  inputUsageAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-inputs/audit',
      data,
      params
    })
  }
   // 投入品使用情况 详情
   export function  inputUsageDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-inputs/detail',
      params
    })
  }

  // 投入品使用情况 编辑
export function  inputUsageUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-inputs/update',
    data
  })
}

  // 投入品使用情况 新增
  export function  inputUsageInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-inputs/insert',
      data
    })
  }