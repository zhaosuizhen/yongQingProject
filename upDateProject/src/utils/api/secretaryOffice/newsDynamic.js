//县委秘书办---新闻动态 接口
import request from '@/utils/request'


// 新闻动态分页
export function  newsDynamicList(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/c-policy-information/selectListByPage',
      data
    })
  }

  // 新闻动态删除
  export function  newsDynamicDelete(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/c-policy-information/delete',
      data
    })
  }

    // 新闻动态 审核
  export function  newsDynamicAudit(data,params) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/c-policy-information/audit',
      data,
      params
    })
  }
   // 新闻动态 详情
   export function  newsDynamicDetail(params) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/c-policy-information/detail?',
      params
    })
  }

  // 新闻动态 编辑
export function  newsDynamicUpdate(data) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/c-policy-information/update',
    data
  })
}

  // 新闻动态 新增
  export function  newsDynamicInsert(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/c-policy-information/insert',
      data
    })
  }