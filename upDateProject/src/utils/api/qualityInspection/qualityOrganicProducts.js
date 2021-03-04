//质检办 --有机食品企业信息 接口
import request from '@/utils/request'

// 有机食品企业信息分页
export function  qualityOrganicSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/organic-food-enterprise-product/selectListByPage',
      data
    })
  }

  // 有机食品企业信息删除
export function  qualityOrganicDelete(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/organic-food-enterprise-product/delete',
    data
  })
}

//有机食品企业信息   审核
export function  qualityOrganicAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/organic-food-enterprise-product/audit',
    data,
    params
  })
}

//有机食品企业信息   数据详情
export function  qualityOrganicDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/organic-food-enterprise-product/detail',
    params
  })
}

//有机食品企业信息   编辑
export function  qualityOrganicUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/organic-food-enterprise-product/update',
    data
  })
}
//有机食品企业信息   新增
export function  qualityOrganicInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/organic-food-enterprise-product/insert',
    data
  })
}


