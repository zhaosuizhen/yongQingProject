//种植业股----淡水捕捞产量
import request from '@/utils/request'

// 淡水捕捞产量 分页
export function  freshwaterFishingYieldList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-freshwater-fish/selectListByPage',
      data
    })
  }

  // 淡水捕捞产量 删除
  export function  freshwaterFishingYieldDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-freshwater-fish/delete',
      data
    })
  }

    // 淡水捕捞产量  审核
  export function  freshwaterFishingYieldAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-freshwater-fish/audit',
      data,
      params
    })
  }

// 淡水捕捞产量  详情
export function  freshwaterFishingYieldDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-freshwater-fish/detail?',
        params
    })
}

// 淡水捕捞产量  新增
export function  freshwaterFishingYieldInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-freshwater-fish/insert',
        data
    })
}

// 淡水捕捞产量  编辑
export function  freshwaterFishingYieldUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-freshwater-fish/update',
        data
    })
}