//经作站--麦冬产量 接口
import request from '@/utils/request'

// 麦冬产量分页
export function maiDongYieldList(data) {
    return request({
      method: 'POST',
      url: '/liriope/yield/selectListByPage',
      data
    })
  }

  //麦冬产量 删除
  export function  maiDongYieldDelete(data) {
    return request({
      method: 'POST',
      url: '/liriope/yield/delete',
      data
    })
  }
//麦冬产量 审核
export function  maiDongYieldAudit(data,params) {
  return request({
    method: 'POST',
    url: '/liriope/yield/audit',
    data,
    params
  })
}

//麦冬产量 详情
export function  maiDongYieldDetail(params) {
  return request({
    method: 'POST',
    url: '/liriope/yield/detail?',
    params
  })
}

//麦冬产量 编辑
export function  maiDongYieldUpdate(data) {
  return request({
    method: 'POST',
    url: '/liriope/yield/update',
    data
  })
}

//麦冬产量 新增
export function  maiDongYieldInsert(data) {
  return request({
    method: 'POST',
    url: '/liriope/yield/insert',
    data
  })
}