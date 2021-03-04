//质检办---绿色食品企业产品数据 接口
import request from '@/utils/request'

// 绿色食品企业产品数据分页
export function  qualityGreenFoodSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/green-food-enterprise-product/selectListByPage',
      data
    })
  }

  // 绿色食品企业产品数据删除
  export function  qualityGreenFoodDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/green-food-enterprise-product/delete',
      data
    })
  }

  // 绿色食品企业产品数据审核
  export function  qualityGreenFoodAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/green-food-enterprise-product/audit',
      data,
      params
    })
  }

  // 绿色食品企业产品数据  详情
export function  qualityGreenFoodDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/green-food-enterprise-product/detail',
    params
  })
}

// 绿色食品企业产品数据  编辑
export function  qualityGreenFoodUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/green-food-enterprise-product/update',
    data
  })
}

// 绿色食品企业产品数据  新增
export function  qualityGreenFoodInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/green-food-enterprise-product/insert',
    data
  })
}