//渔业渔政股----主要水产苗种
import request from '@/utils/request'

// 主要水产苗种 分页
export function  aquaticSeedlingList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-aquatic-seed/selectListByPage',
      data
    })
  }

  // 主要水产苗种 删除
  export function  aquaticSeedlingDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-aquatic-seed/delete',
      data
    })
  }

    // 主要水产苗种  审核
  export function  aquaticSeedlingAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fishery-aquatic-seed/audit',
      data,
      params
    })
  }

// 主要水产苗种  详情
export function  aquaticSeedlingDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-aquatic-seed/detail?',
        params
    })
}

// 主要水产苗种  新增
export function  aquaticSeedlingInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-aquatic-seed/insert',
        data
    })
}

// 主要水产苗种  编辑
export function  aquaticSeedlingUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fishery-aquatic-seed/update',
        data
    })
}