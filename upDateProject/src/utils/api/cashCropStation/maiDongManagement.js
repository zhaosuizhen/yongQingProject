//经作站--麦冬经营主体 接口
import request from '@/utils/request'

// 麦冬经营主体分页
export function maiDongManagementList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cash-liriope-business/selectListByPage',
      data
    })
  }

  //麦冬经营主体 删除
  export function  maiDongManagementDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cash-liriope-business/delete',
      data
    })
  }
//麦冬经营主体 审核
export function  maiDongManagementAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-business/audit',
    data,
    params
  })
}

//麦冬经营主体 详情
export function  maiDongManagementDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-business/detail?',
    params
  })
}

//麦冬经营主体 编辑
export function  maiDongManagementUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-business/update',
    data
  })
}

//麦冬经营主体 新增
export function  maiDongManagementInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-liriope-business/insert',
    data
  })
}