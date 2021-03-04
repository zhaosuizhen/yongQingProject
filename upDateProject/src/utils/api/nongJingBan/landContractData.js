//农经办----土地承包数据 接口
import request from '@/utils/request'

// 土地承包数据分页
export function landContractDataSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-contract/selectListByPage',
      data
    })
  }

  // 土地承包数据删除
  export function  landContractDataDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-contract/delete',
      data
    })
  }

  // 土地承包数据审核
  export function  landContractDataAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-contract/audit',
      data,
      params
    })
  }

  // 土地承包数据  详情
  export function  landContractDataDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-contract/detail',
      params
    })
  }

    // 土地承包数据  编辑
    export function  landContractDataUpdate(data) {
      return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/land-contract/update',
        data
      })
    }

  // 土地承包数据  新建
  export function  landContractDataInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-contract/insert',
      data
    })
  }