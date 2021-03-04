//土肥站---监测点基本情况 接口
import request from '@/utils/request'

// 监测点基本情况分页
export function  basicPointsSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place/selectListByPage',
      data
    })
  }

  // 监测点基本情况删除
  export function  basicPointsDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place/delete',
      data
    })
  }

    // 监测点基本情况 审核
  export function  basicPointsAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place/audit',
      data,
      params
    })
  }
   // 监测点基本情况 详情
   export function  basicPointsDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place/detail',
      params
    })
  }

  // 监测点基本情况 编辑
export function  basicPointsUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/testing-place/update',
    data
  })
}

  // 监测点基本情况 新增
  export function  basicPointsInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place/insert',
      data
    })
  }

  //监测点下拉列表
  export function  testingOption(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/testing-place/selectListByName',
      data
    })
  }
  
