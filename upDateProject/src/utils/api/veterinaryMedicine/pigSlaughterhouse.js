//兽医兽药股---生猪定点屠宰场 接口
import request from '@/utils/request'

// 生猪定点屠宰场分页
export function  pigSlaughterhouseList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-slaughter-house/selectListByPage',
      data
    })
  }

  // 生猪定点屠宰场删除
  export function  pigSlaughterhouseDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-slaughter-house/delete',
      data
    })
  }

    // 生猪定点屠宰场 审核
  export function  pigSlaughterhouseAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-slaughter-house/audit',
      data,
      params
    })
  }
   // 生猪定点屠宰场 详情
   export function  pigSlaughterhouseDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-slaughter-house/detail?',
      params
    })
  }

  // 生猪定点屠宰场 编辑
export function  pigSlaughterhouseUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/vet-slaughter-house/update',
    data
  })
}

  // 生猪定点屠宰场 新增
  export function  pigSlaughterhouseInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-slaughter-house/insert',
      data
    })
  }