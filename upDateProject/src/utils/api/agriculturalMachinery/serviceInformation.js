//农业机械化与设施股---农机服务情况 接口
import request from '@/utils/request'

// 农机服务情况分页
export function  serviceInformationList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-service/selectListByPage',
      data
    })
  }

  // 农机服务情况删除
  export function  serviceInformationDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-service/delete',
      data
    })
  }

    // 农机服务情况 审核
  export function  serviceInformationAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-service/audit',
      data,
      params
    })
  }
   // 农机服务情况 详情
   export function  serviceInformationDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-service/detail?',
      params
    })
  }

  // 农机服务情况 编辑
export function  serviceInformationUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-service/update',
    data
  })
}

  // 农机服务情况 新增
  export function  serviceInformationInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-service/insert',
      data
    })
  }