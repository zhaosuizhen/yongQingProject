//国土局--农村土地利用现状二级分类面积汇总表 接口
import request from '@/utils/request'


// 农村土地利用现状二级分类面积汇总表分页
export function landUseLeaveTwoSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-area2/selectListByPage',
      data
    })
  }

  //农村土地利用现状二级分类面积汇总表 删除
  export function  landUseLeaveTwoDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/land-area2/delete',
      data
    })
  }
//农村土地利用现状二级分类面积汇总表 审核
export function  landUseLeaveTwoAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area2/audit',
    data,
    params
  })
}

//农村土地利用现状二级分类面积汇总表 详情
export function  landUseLeaveTwoDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area2/detail',
    params
  })
}

//农村土地利用现状二级分类面积汇总表 编辑
export function  landUseLeaveTwoUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area2/update',
    data
  })
}

//农村土地利用现状二级分类面积汇总表 新增
export function  landUseLeaveTwoInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/land-area2/insert',
    data
  })
}