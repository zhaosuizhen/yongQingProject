//农机局--农机拥有量 接口
import request from '@/utils/request'

// 农机拥有量分页
export function agriculturalMachinerySelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-num/selectListByPage',
      data
    })
  }

  //农机拥有量 删除
  export function  agriculturalMachineryDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/machine-num/delete',
      data
    })
  }
//农机拥有量 审核
export function  agriculturalMachineryAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-num/audit',
    data,
    params
  })
}

//农机拥有量 详情
export function  agriculturalMachineryDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-num/detail',
    params
  })
}

//农机拥有量 编辑
export function  agriculturalMachineryUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-num/update',
    data
  })
}

//农机拥有量 新增
export function  agriculturalMachineryInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/machine-num/insert',
    data
  })
}