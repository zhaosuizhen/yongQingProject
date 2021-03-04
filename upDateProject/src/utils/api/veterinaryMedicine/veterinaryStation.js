//兽医兽药股---兽医站 接口
import request from '@/utils/request'

// 兽医站分页
export function  veterinaryStationList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-station/selectListByPage',
      data
    })
  }

  // 兽医站删除
  export function  veterinaryStationDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-station/delete',
      data
    })
  }

    // 兽医站 审核
  export function  veterinaryStationAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-station/audit',
      data,
      params
    })
  }
   // 兽医站 详情
   export function  veterinaryStationDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-station/detail?',
      params
    })
  }

  // 兽医站 编辑
export function  veterinaryStationUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/vet-station/update',
    data
  })
}

  // 兽医站 新增
  export function  veterinaryStationInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-station/insert',
      data
    })
  }