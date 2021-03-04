//种植业股----水产加工等级
import request from '@/utils/request'

// 水产加工等级 分页
export function  aquaticMachiningList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-aquatic-process/selectListByPage',
      data
    })
  }

  // 水产加工等级 删除
  export function  aquaticMachiningDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-aquatic-process/delete',
      data
    })
  }

    // 水产加工等级  审核
  export function  aquaticMachiningAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-aquatic-process/audit',
      data,
      params
    })
  }

// 水产加工等级  详情
export function  aquaticMachiningDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-aquatic-process/detail?',
        params
    })
}

// 水产加工等级  新增
export function  aquaticMachiningInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-aquatic-process/insert',
        data
    })
}

// 水产加工等级  编辑
export function  aquaticMachiningUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-aquatic-process/update',
        data
    })
}