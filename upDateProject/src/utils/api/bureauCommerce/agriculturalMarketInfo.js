//商业局--农产品批发市场信息 接口
import request from '@/utils/request'

// 农产品批发市场信息分页
export function agriculturalMarketInfoSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/market/selectListByPage',
      data
    })
  }

  //农产品批发市场信息 删除
  export function  agriculturalMarketInfoDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/market/delete',
      data
    })
  }
//农产品批发市场信息 审核
export function  agriculturalMarketInfoAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/market/audit',
    data,
    params
  })
}

//农产品批发市场信息 详情
export function  agriculturalMarketInfoDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/market/detail',
    params
  })
}

//农产品批发市场信息 编辑
export function  agriculturalMarketInfoUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/market/update',
    data
  })
}

//农产品批发市场信息 新增
export function  agriculturalMarketInfoInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/market/insert',
    data
  })
}