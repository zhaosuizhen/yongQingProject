//经作站--麦冬加工产品 接口
import request from '@/utils/request'

// 麦冬加工产品分页
export function maiDongProductsList(data) {
    return request({
      method: 'POST',
      url: '/liriope/product/selectListByPage',
      data
    })
  }

  //麦冬加工产品 删除
  export function  maiDongProductsDelete(data) {
    return request({
      method: 'POST',
      url: '/liriope/product/delete',
      data
    })
  }
//麦冬加工产品 审核
export function  maiDongProductsAudit(data,params) {
  return request({
    method: 'POST',
    url: '/liriope/product/audit',
    data,
    params
  })
}

//麦冬加工产品 详情
export function  maiDongProductsDetail(params) {
  return request({
    method: 'POST',
    url: '/liriope/product/detail?',
    params
  })
}

//麦冬加工产品 编辑
export function  maiDongProductsUpdate(data) {
  return request({
    method: 'POST',
    url: '/liriope/product/update',
    data
  })
}

//麦冬加工产品 新增
export function  maiDongProductsInsert(data) {
  return request({
    method: 'POST',
    url: '/liriope/product/insert',
    data
  })
}

//图片上传
export function  uploadImg(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-output-value/upload',
    data,
    params
  })
}