//农经股----经济作物面积
import request from '@/utils/request'

// 经济作物面积 分页
export function  economicsPlantAreaList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-area/selectListByPage',
      data
    })
  }

  // 经济作物面积 删除
  export function  economicsPlantAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-area/delete',
      data
    })
  }

    // 经济作物面积  审核
  export function  economicsPlantAreaAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-area/audit',
      data,
      params
    })
  }

// 经济作物面积  详情
export function  economicsPlantAreaDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-area/detail?',
        params
    })
}

// 经济作物面积  新增
export function  economicsPlantAreaInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-area/insert',
        data
    })
}

// 经济作物面积  编辑
export function  economicsPlantAreaUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-area/update',
        data
    })
}