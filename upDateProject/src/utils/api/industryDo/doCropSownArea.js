//产业办--农作物播种面积 接口
import request from '@/utils/request'

// 农作物播种面积分页
export function doCropSownAreaSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-area/selectListByPage',
      data
    })
  }

  //农作物播种面积 删除
  export function  doCropSownAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-area/delete',
      data
    })
  }
//农作物播种面积 审核
export function  doCropSownAreaAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/crop-area/audit',
    data,
    params
  })
}

//农作物播种面积 详情
export function  doCropSownAreaDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/crop-area/detail',
    params
  })
}

//农作物播种面积 编辑
export function  doCropSownAreaUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/crop-area/update',
    data
  })
}

//农作物播种面积 新增
export function  doCropSownAreaInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/crop-area/insert',
    data
  })
}