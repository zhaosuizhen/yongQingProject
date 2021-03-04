//植保站----病害描述
import request from '@/utils/request'

// 病害描述 分页
export function  diseaseDescribeList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/plant-disease/selectListByPage',
      data
    })
  }

  // 病害描述 删除
  export function  diseaseDescribeDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/plant-disease/delete',
      data
    })
  }

    // 病害描述  审核
  export function  diseaseDescribeAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/plant-disease/audit',
      data,
      params
    })
  }

// 病害描述  详情
export function  diseaseDescribeDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/plant-disease/detail?',
        params
    })
}

// 病害描述  新增
export function  diseaseDescribeInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/plant-disease/insert',
        data
    })
}

// 病害描述  编辑
export function  diseaseDescribeUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/plant-disease/update',
        data
    })
}

// 病害描述  获取列表
export function  diseaseDescribeGetCropList(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/plant-disease/getCropList',
        data
    })
}