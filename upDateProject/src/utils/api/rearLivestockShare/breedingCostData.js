//畜牧股
import request from '@/utils/request'

// 养殖成本数据分页
export function  breedingCostDataList(data) {
    return request({
      method: 'POST',
      url: '/breeding-cost/breeding-cost/selectListByPage',
      data
    })
  }

  // 养殖成本数据删除
  export function  breedingCostDataDelete(data) {
    return request({
      method: 'POST',
      url: '/breeding-cost/breeding-cost/delete',
      data
    })
  }

    // 养殖成本数据 审核
  export function  breedingCostDataAudit(data,params) {
    return request({
      method: 'POST',
      url: '/breeding-cost/breeding-cost/audit',
      data,
      params
    })
  }

// 养殖成本数据 详情
export function  breedingCostDataDetail(params) {
    return request({
        method: 'POST',
        url: '/breeding-cost/breeding-cost/detail',
        params
    })
}

// 养殖成本数据 新增
export function  breedingCostDataInsert(data) {
    return request({
        method: 'POST',
        url: '/breeding-cost/breeding-cost/insert',
        data
    })
}

// 养殖成本数据 编辑
export function  breedingCostDataUpdate(data) {
    return request({
        method: 'POST',
        url: '/breeding-cost/breeding-cost/update',
        data
    })
}