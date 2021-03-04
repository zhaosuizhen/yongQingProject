//农经股----经济作物单产
import request from '@/utils/request'

// 经济作物单产 分页
export function  economicsPlantUtilList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-yield-area/selectListByPage',
      data
    })
  }

  // 经济作物单产 删除
  export function  economicsPlantUtilDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-yield-area/delete',
      data
    })
  }

    // 经济作物单产  审核
  export function  economicsPlantUtilAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-cash-yield-area/audit',
      data,
      params
    })
  }

// 经济作物单产  详情
export function  economicsPlantUtilDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-yield-area/detail?',
        params
    })
}

// 经济作物单产  新增
export function  economicsPlantUtilInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-yield-area/insert',
        data
    })
}

// 经济作物单产  编辑
export function  economicsPlantUtilUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-cash-yield-area/update',
        data
    })
}