//种植业股----农林牧渔增加值
import request from '@/utils/request'

// 农林牧渔增加值 分页
export function  ZJZ_NLMYList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-addvalue/selectListByPage',
      data
    })
  }

  // 农林牧渔增加值 删除
  export function  ZJZ_NLMYDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-addvalue/delete',
      data
    })
  }

    // 农林牧渔增加值  审核
  export function  ZJZ_NLMYAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-addvalue/audit',
      data,
      params
    })
  }

// 农林牧渔增加值  详情
export function  ZJZ_NLMYDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-addvalue/detail?',
        params
    })
}

// 农林牧渔增加值  新增
export function  ZJZ_NLMYInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-addvalue/insert',
        data
    })
}

// 农林牧渔增加值  编辑
export function  ZJZ_NLMYUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/agricultural-forestry-animal-fishery-addvalue/update',
        data
    })
}