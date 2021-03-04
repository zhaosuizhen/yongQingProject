//新闻动态 接口
import request from '@/utils/request'

// 新闻动态分页
export function newsTrendsSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/news/selectListByPage',
      data
    })
  }

  //新闻动态 删除
  export function  newsTrendsDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/news/delete',
      data
    })
  }
//新闻动态 审核
export function  newsTrendsAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/news/audit',
    data,
    params
  })
}

//新闻动态 详情
export function  newsTrendsDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/news/detail',
    params
  })
}

//新闻动态 编辑
export function  newsTrendsUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/news/update',
    data
  })
}

//新闻动态 新增
export function  newsTrendsInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/news/insert',
    data
  })
}