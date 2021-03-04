//农经股----经济作物面积
import request from '@/utils/request'

// 经济作物面积 分页
export function  economicsPlantYieldList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-yield/selectListByPage',
      data
    })
  }

  // 经济作物面积 删除
  export function  economicsPlantYieldDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-yield/delete',
      data
    })
  }

    // 经济作物面积  审核
  export function  economicsPlantYieldAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-yield/audit',
      data,
      params
    })
  }

// 经济作物面积  详情
export function  economicsPlantYieldDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-yield/detail?',
        params
    })
}

// 经济作物面积  新增
export function  economicsPlantYieldInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-yield/insert',
        data
    })
}

// 经济作物面积  编辑
export function  economicsPlantYieldUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-yield/update',
        data
    })
}