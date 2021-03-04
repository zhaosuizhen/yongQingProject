//畜牧股
import request from '@/utils/request'

// 生猪养殖分页
export function  pigBreedSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livestoc-breeding/selectListByPage',
      data
    })
  }

  // 生猪养殖删除
  export function  pigBreedDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livestoc-breeding/delete',
      data
    })
  }

    // 生猪养殖 审核
  export function  pigBreedAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livestoc-breeding/audit',
      data,
      params
    })
  }

// 生猪养殖 详情
export function  pigBreedDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livestoc-breeding/detail',
        params
    })
}

// 生猪养殖 新增
export function  pigBreedInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livestoc-breeding/insert',
        data
    })
}

// 生猪养殖 编辑
export function  pigBreedUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livestoc-breeding/update',
        data
    })
}