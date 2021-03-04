//兽医兽药股---诊疗机构 接口
import request from '@/utils/request'

// 诊疗机构分页
export function  veterinaryHospitalList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-hospital/selectListByPage',
      data
    })
  }

  // 诊疗机构删除
  export function  veterinaryHospitalDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-hospital/delete',
      data
    })
  }

    // 诊疗机构 审核
  export function  veterinaryHospitalAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-hospital/audit',
      data,
      params
    })
  }
   // 诊疗机构 详情
   export function  veterinaryHospitalDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-hospital/detail?',
      params
    })
  }

  // 诊疗机构 编辑
export function  veterinaryHospitalUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/vet-hospital/update',
    data
  })
}

  // 诊疗机构 新增
  export function  veterinaryHospitalInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/vet-hospital/insert',
      data
    })
  }