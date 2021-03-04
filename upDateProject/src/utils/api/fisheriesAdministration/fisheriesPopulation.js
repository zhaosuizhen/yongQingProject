//种植业股----渔业人口情况
import request from '@/utils/request'

// 渔业人口情况 分页
export function  fisheriesPopulationList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-population/selectListByPage',
      data
    })
  }

  // 渔业人口情况 删除
  export function  fisheriesPopulationDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-population/delete',
      data
    })
  }

    // 渔业人口情况  审核
  export function  fisheriesPopulationAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-population/audit',
      data,
      params
    })
  }

// 渔业人口情况  详情
export function  fisheriesPopulationDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-population/detail?',
        params
    })
}

// 渔业人口情况  新增
export function  fisheriesPopulationInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-population/insert',
        data
    })
}

// 渔业人口情况  编辑
export function  fisheriesPopulationUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-population/update',
        data
    })
}