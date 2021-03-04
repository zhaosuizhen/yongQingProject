//粮油站---产业脱贫 接口
import request from '@/utils/request'

// 产业脱贫分页
export function  industryLeavePoorList(data) {
    return request({
      method: 'POST',
      url: '/industry-outpoor/industry-outpoor/selectListByPage',
      data
    })
  }

  // 产业脱贫删除
  export function  industryLeavePoorDelete(data) {
    return request({
      method: 'POST',
      url: '/industry-outpoor/industry-outpoor/delete',
      data
    })
  }

    // 产业脱贫 审核
  export function  industryLeavePoorAudit(data,params) {
    return request({
      method: 'POST',
      url: '/industry-outpoor/industry-outpoor/audit',
      data,
      params
    })
  }
   // 产业脱贫 详情
   export function  industryLeavePoorDetail(params) {
    return request({
      method: 'POST',
      url: '/industry-outpoor/industry-outpoor/detail?',
      params
    })
  }

  // 产业脱贫 编辑
export function  industryLeavePoorUpdate(data) {
  return request({
    method: 'POST',
    url: '/industry-outpoor/industry-outpoor/update',
    data
  })
}

  // 产业脱贫 新增
  export function  industryLeavePoorInsert(data) {
    return request({
      method: 'POST',
      url: '/industry-outpoor/industry-outpoor/insert',
      data
    })
  }