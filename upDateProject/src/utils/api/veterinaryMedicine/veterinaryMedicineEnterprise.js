//兽医兽药股---兽药经营企业 接口
import request from '@/utils/request'

// 兽药经营企业分页
export function  veterinaryMedicineEnterpriseList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-vet/selectListByPage',
      data
    })
  }

  // 兽药经营企业删除
  export function  veterinaryMedicineEnterpriseDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-vet/delete',
      data
    })
  }

    // 兽药经营企业 审核
  export function  veterinaryMedicineEnterpriseAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-vet/audit',
      data,
      params
    })
  }
   // 兽药经营企业 详情
   export function  veterinaryMedicineEnterpriseDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-vet/detail?',
      params
    })
  }

  // 兽药经营企业 编辑
export function  veterinaryMedicineEnterpriseUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-vet/update',
    data
  })
}

  // 兽药经营企业 新增
  export function  veterinaryMedicineEnterpriseInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise-vet/insert',
      data
    })
  }