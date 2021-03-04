//农业机械化与设施股---农机拥有量-数量 接口
import request from '@/utils/request'

// 农机拥有量-数量分页
export function  haveCountList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-count/selectListByPage',
      data
    })
  }

  // 农机拥有量-数量删除
  export function  haveCountDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-count/delete',
      data
    })
  }

    // 农机拥有量-数量 审核
  export function  haveCountAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-count/audit',
      data,
      params
    })
  }
   // 农机拥有量-数量 详情
   export function  haveCountDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-count/detail?',
      params
    })
  }

  // 农机拥有量-数量 编辑
export function  haveCountUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-count/update',
    data
  })
}

  // 农机拥有量-数量 新增
  export function  haveCountInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-count/insert',
      data
    })
  }