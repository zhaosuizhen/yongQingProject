//产业办--经营主体 接口
import request from '@/utils/request'

// 经营主体分页
export function doBusinessEntitySelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise/selectListByPage',
      data
    })
  }

  //经营主体 删除
  export function  doBusinessEntityDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise/delete',
      data
    })
  }
//经营主体 审核
export function  doBusinessEntityAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise/audit',
    data,
    params
  })
}

//经营主体 详情
export function  doBusinessEntityDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise/detail',
    params
  })
}

//经营主体 编辑
export function  doBusinessEntityUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise/update',
    data
  })
}

//经营主体 新增
export function  doBusinessEntityInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise/insert',
    data
  })
}

//企业名称数据列表
export function getEnterpriseNameList(data){
  return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/enterprise/selectListByName',
      data
  })
}