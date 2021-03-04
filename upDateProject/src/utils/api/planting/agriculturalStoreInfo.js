//种植业股----农资店信息
import request from '@/utils/request'

// 农资店信息 分页
export function  agriculturalStoreInfoList(data) {
    return request({
      method: 'POST',
      url: '/agricultural-information/agricultural-information/selectListByPage',
      data
    })
  }

  // 农资店信息 删除
  export function  agriculturalStoreInfoDelete(data) {
    return request({
      method: 'POST',
      url: '/agricultural-information/agricultural-information/delete',
      data
    })
  }

    // 农资店信息  审核
  export function  agriculturalStoreInfoAudit(data,params) {
    return request({
      method: 'POST',
      url: '/agricultural-information/agricultural-information/audit',
      data,
      params
    })
  }

// 农资店信息  详情
export function  agriculturalStoreInfoDetail(params) {
    return request({
        method: 'POST',
        url: '/agricultural-information/agricultural-information/detail?',
        params
    })
}

// 农资店信息  新增
export function  agriculturalStoreInfoInsert(data) {
    return request({
        method: 'POST',
        url: '/agricultural-information/agricultural-information/insert',
        data
    })
}

// 农资店信息  编辑
export function  agriculturalStoreInfoUpdate(data) {
    return request({
        method: 'POST',
        url: '/agricultural-information/agricultural-information/update',
        data
    })
}