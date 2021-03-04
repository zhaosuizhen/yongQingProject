//经作站--麦冬主产区面积 接口
import request from '@/utils/request'

// 麦冬主产区面积分页
export function maiDongMainAreaList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cash-liriope-plant/selectListByPage',
      data
    })
  }

  //麦冬主产区面积 删除
  export function  maiDongMainAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cash-liriope-plant/delete',
      data
    })
  }
//麦冬主产区面积 审核
export function  maiDongMainAreaAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-plant/audit',
    data,
    params
  })
}

//麦冬主产区面积 详情
export function  maiDongMainAreaDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-plant/detail?',
    params
  })
}

//麦冬主产区面积 编辑
export function  maiDongMainAreaUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-plant/update',
    data
  })
}

//麦冬主产区面积 新增
export function  maiDongMainAreaInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-plant/insert',
    data
  })
}