//农业机械化与设施股---农机经营主体 接口
import request from '@/utils/request'

// 农机经营主体分页
export function  NJJYZTList(data) {
    return request({
      method: 'POST',
      url: '/agricultural-subject/agricultural-subject/selectListByPage',
      data
    })
  }

  // 农机经营主体删除
  export function  NJJYZTDelete(data) {
    return request({
      method: 'POST',
      url: '/agricultural-subject/agricultural-subject/delete',
      data
    })
  }

    // 农机经营主体 审核
  export function  NJJYZTAudit(data,params) {
    return request({
      method: 'POST',
      url: '/agricultural-subject/agricultural-subject/audit',
      data,
      params
    })
  }
   // 农机经营主体 详情
   export function  NJJYZTDetail(params) {
    return request({
      method: 'POST',
      url: '/agricultural-subject/agricultural-subject/detail?',
      params
    })
  }

  // 农机经营主体 编辑
export function  NJJYZTUpdate(data) {
  return request({
    method: 'POST',
    url: '/agricultural-subject/agricultural-subject/update',
    data
  })
}

  // 农机经营主体 新增
  export function  NJJYZTInsert(data) {
    return request({
      method: 'POST',
      url: '/agricultural-subject/agricultural-subject/insert',
      data
    })
  }