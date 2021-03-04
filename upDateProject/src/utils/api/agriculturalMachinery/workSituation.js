//农业机械化与设施股---农机作业情况 接口
import request from '@/utils/request'

// 农机作业情况分页
export function  workSituationList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-operation/selectListByPage',
      data
    })
  }

  // 农机作业情况删除
  export function  workSituationDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-operation/delete',
      data
    })
  }

    // 农机作业情况 审核
  export function  workSituationAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-operation/audit',
      data,
      params
    })
  }
   // 农机作业情况 详情
   export function  workSituationDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-operation/detail?',
      params
    })
  }

  // 农机作业情况 编辑
export function  workSituationUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-operation/update',
    data
  })
}

  // 农机作业情况 新增
  export function  workSituationInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-operation/insert',
      data
    })
  }