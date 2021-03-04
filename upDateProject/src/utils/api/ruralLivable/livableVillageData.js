//宜居乡村--乡村数据
import request from '@/utils/request'

// 宜居乡村分页
export function  ruralDataList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livable-village-data/selectListByPage',
      data
    })
  }

  // 宜居乡村删除
  export function  ruralDataDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livable-village-data/delete',
      data
    })
  }

    // 宜居乡村 审核
  export function  ruralDataAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livable-village-data/audit',
      data,
      params
    })
  }

// 宜居乡村 详情
export function  ruralDataDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livable-village-data/detail?',
        params
    })
}

// 宜居乡村 新增
export function  ruralDataInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livable-village-data/insert',
        data
    })
}

// 宜居乡村 编辑
export function  ruralDataUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livable-village-data/update',
        data
    })
}