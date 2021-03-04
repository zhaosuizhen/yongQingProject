//商业局--农产品交易价格数据 接口
import request from '@/utils/request'

// 农产品交易价格数据分页
export function agriculturalPriceSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-price/selectListByPage',
      data
    })
  }

  //农产品交易价格数据 删除
  export function  agriculturalPriceDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/product-price/delete',
      data
    })
  }
//农产品交易价格数据 审核
export function  agriculturalPriceAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-price/audit',
    data,
    params
  })
}

//农产品交易价格数据 详情
export function  agriculturalPriceDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-price/detail',
    params
  })
}

//农产品交易价格数据 编辑
export function  agriculturalPriceUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-price/update',
    data
  })
}

//农产品交易价格数据 新增
export function  agriculturalPriceInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/product-price/insert',
    data
  })
}