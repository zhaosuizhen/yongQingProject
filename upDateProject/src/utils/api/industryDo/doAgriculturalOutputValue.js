//产业办--农产品企业产值 接口
import request from '@/utils/request'

// 农产品企业产值分页
export function doAgriculturalOutputValueSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-output-value/selectListByPage',
      data
    })
  }

  //农产品企业产值 删除
  export function  doAgriculturalOutputValueDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-output-value/delete',
      data
    })
  }
//农产品企业产值 审核
export function  doAgriculturalOutputValueAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-output-value/audit',
    data,
    params
  })
}

//农产品企业产值 详情
export function  doAgriculturalOutputValueDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-output-value/detail',
    params
  })
}

//农产品企业产值 编辑
export function  doAgriculturalOutputValueUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-output-value/update',
    data
  })
}

//农产品企业产值 新增
export function  doAgriculturalOutputValueInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-output-value/insert',
    data
  })
}