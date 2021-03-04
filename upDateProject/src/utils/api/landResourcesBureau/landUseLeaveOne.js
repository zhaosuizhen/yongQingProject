//国土局--农村土地利用现状一级分类面积汇总表 接口
import request from '@/utils/request'

// 农村土地利用现状一级分类面积汇总表分页
export function landUseLeaveOneSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-area1/selectListByPage',
      data
    })
  }

  //农村土地利用现状一级分类面积汇总表 删除
  export function  landUseLeaveOneDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-area1/delete',
      data
    })
  }
//农村土地利用现状一级分类面积汇总表 审核
export function  landUseLeaveOneAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area1/audit',
    data,
    params
  })
}

//农村土地利用现状一级分类面积汇总表 详情
export function  landUseLeaveOneDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area1/detail',
    params
  })
}

//农村土地利用现状一级分类面积汇总表 编辑
export function  landUseLeaveOneUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area1/update',
    data
  })
}

//农村土地利用现状一级分类面积汇总表 新增
export function  landUseLeaveOneInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area1/insert',
    data
  })
}