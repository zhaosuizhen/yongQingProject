//农业机械化与设施股---农机拥有量-动力 接口
import request from '@/utils/request'

// 农机拥有量-动力分页
export function  havePowerList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-power/selectListByPage',
      data
    })
  }

  // 农机拥有量-动力删除
  export function  havePowerDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-power/delete',
      data
    })
  }

    // 农机拥有量-动力 审核
  export function  havePowerAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-power/audit',
      data,
      params
    })
  }
   // 农机拥有量-动力 详情
   export function  havePowerDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-power/detail?',
      params
    })
  }

  // 农机拥有量-动力 编辑
export function  havePowerUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-power/update',
    data
  })
}

  // 农机拥有量-动力 新增
  export function  havePowerInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-power/insert',
      data
    })
  }