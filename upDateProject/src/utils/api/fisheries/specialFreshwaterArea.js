//渔业局--淡水特种水产品养殖面积 接口
import request from '@/utils/request'

//接口待开发

// 淡水特种水产品养殖面积分页
export function specialFreshSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/dsyz-product/selectListByPage',
      data
    })
  }

  //淡水特种水产品养殖面积 删除
export function specialFreshDelete(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/dsyz-product/delete',
    data
  })
}

  //淡水特种水产品养殖面积 审核
  export function specialFreshAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/dsyz-product/audit',
      data,
      params
    })
  }

     //淡水特种水产品养殖面积 详情
  export function  specialFreshDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/dsyz-product/detail',
    params
  })
}

    
  //淡水特种水产品养殖面积 编辑
  export function   specialFreshUpdate(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/dsyz-product/update',
      data
    })
  }

//淡水特种水产品养殖面积 新增
export function   specialFreshInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/dsyz-product/insert',
    data
  })
}