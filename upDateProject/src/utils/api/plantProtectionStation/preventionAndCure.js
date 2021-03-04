//植保站----病虫害防止趋势
import request from '@/utils/request'

// 病虫害防止趋势 分页
export function  preventionAndCureList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/plant-disease-control/selectListByPage',
      data
    })
  }

  // 病虫害防止趋势 删除
  export function  preventionAndCureDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/plant-disease-control/delete',
      data
    })
  }

    // 病虫害防止趋势  审核
  export function  preventionAndCureAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/plant-disease-control/audit',
      data,
      params
    })
  }

// 病虫害防止趋势  详情
export function  preventionAndCureDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/plant-disease-control/detail?',
        params
    })
}

// 病虫害防止趋势  新增
export function  preventionAndCureInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/plant-disease-control/insert',
        data
    })
}

// 病虫害防止趋势  编辑
export function  preventionAndCureUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/plant-disease-control/update',
        data
    })
}

