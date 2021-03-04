//种植业股----耕地地力等级
import request from '@/utils/request'

// 耕地地力等级 分页
export function  landLevelList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-product-grade/selectListByPage',
      data
    })
  }

  // 耕地地力等级 删除
  export function  landLevelDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-product-grade/delete',
      data
    })
  }

    // 耕地地力等级  审核
  export function  landLevelAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-product-grade/audit',
      data,
      params
    })
  }

// 耕地地力等级  详情
export function  landLevelDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/land-product-grade/detail?',
        params
    })
}

// 耕地地力等级  新增
export function  landLevelInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/land-product-grade/insert',
        data
    })
}

// 耕地地力等级  编辑
export function  landLevelUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/land-product-grade/update',
        data
    })
}