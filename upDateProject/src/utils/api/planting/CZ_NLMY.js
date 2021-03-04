//种植业股----农林牧渔产值
import request from '@/utils/request'

// 农林牧渔产值 分页
export function  CZ_NLMYList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-production/selectListByPage',
      data
    })
  }

  // 农林牧渔产值 删除
  export function  CZ_NLMYDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-production/delete',
      data
    })
  }

    // 农林牧渔产值  审核
  export function  CZ_NLMYAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-production/audit',
      data,
      params
    })
  }

// 农林牧渔产值  详情
export function  CZ_NLMYDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-production/detail?',
        params
    })
}

// 农林牧渔产值  新增
export function  CZ_NLMYInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-production/insert',
        data
    })
}

// 农林牧渔产值  编辑
export function  CZ_NLMYUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-production/update',
        data
    })
}