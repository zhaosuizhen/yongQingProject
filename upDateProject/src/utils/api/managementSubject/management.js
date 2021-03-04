//经营主体
import request from '@/utils/request'

// 经营主体分页
export function  managementSubjectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise/selectListByPage',
      data
    })
  }

  // 经营主体删除
  export function  managementSubjectDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise/delete',
      data
    })
  }

    // 经营主体 审核
  export function  managementSubjectAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise/audit',
      data,
      params
    })
  }

// 经营主体 详情
export function  pigBreedDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livestoc-breeding/detail',
        params
    })
}

// 经营主体 新增
export function  pigBreedInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livestoc-breeding/insert',
        data
    })
}

// 经营主体 编辑
export function  pigBreedUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livestoc-breeding/update',
        data
    })
}