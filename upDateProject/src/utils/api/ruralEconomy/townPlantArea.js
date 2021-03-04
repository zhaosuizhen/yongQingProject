//农经股----各乡镇种植面积
import request from '@/utils/request'

// 各乡镇种植面积 分页
export function  townPlantAreaList(data) {
    return request({
      method: 'POST',
      url: '/township-plantarea/township-plant-area/selectListByPage',
      data
    })
  }

  // 各乡镇种植面积 删除
  export function  townPlantAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/township-plantarea/township-plant-area/delete',
      data
    })
  }

    // 各乡镇种植面积  审核
  export function  townPlantAreaAudit(data,params) {
    return request({
      method: 'POST',
      url: '/township-plantarea/township-plant-area/audit',
      data,
      params
    })
  }

// 各乡镇种植面积  详情
export function  townPlantAreaDetail(params) {
    return request({
        method: 'POST',
        url: '/township-plantarea/township-plant-area/detail?',
        params
    })
}

// 各乡镇种植面积  新增
export function  townPlantAreaInsert(data) {
    return request({
        method: 'POST',
        url: '/township-plantarea/township-plant-area/insert',
        data
    })
}

// 各乡镇种植面积  编辑
export function  townPlantAreaUpdate(data) {
    return request({
        method: 'POST',
        url: '/township-plantarea/township-plant-area/update',
        data
    })
}