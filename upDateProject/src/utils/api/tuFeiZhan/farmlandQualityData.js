//土肥站---监测点耕地质量数据 接口
import request from '@/utils/request'

// 监测点耕地质量数据分页
export function  farmlandQualitySelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place-check/selectListByPage',
      data
    })
  }

  // 监测点耕地质量数据删除
  export function  farmlandQualityDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place-check/delete',
      data
    })
  }

    // 监测点耕地质量数据 审核
  export function  farmlandQualityAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place-check/audit',
      data,
      params
    })
  }
   // 监测点耕地质量数据 详情
   export function  farmlandQualityDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place-check/detail',
      params
    })
  }

  // 监测点耕地质量数据 编辑
export function  farmlandQualityUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/testing-place-check/update',
    data
  })
}

  // 监测点耕地质量数据 新增
  export function  farmlandQualityInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place-check/insert',
      data
    })
  }