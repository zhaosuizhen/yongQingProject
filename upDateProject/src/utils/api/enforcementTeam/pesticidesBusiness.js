//农药经营主体 接口
import request from '@/utils/request'

// 农药经营主体分页
export function pesticidesBusinessList(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/pesticidesl-subject/selectListByPage',
      data
    })
  }

  //农药经营主体 删除
  export function  pesticidesBusinessDelete(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/pesticidesl-subject/delete',
      data
    })
  }
//农药经营主体 审核
export function  pesticidesBusinessAudit(data,params) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/pesticidesl-subject/audit',
    data,
    params
  })
}

//农药经营主体 详情
export function  pesticidesBusinessDetail(params) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/pesticidesl-subject/detail',
    params
  })
}

//农药经营主体 编辑
export function  pesticidesBusinessUpdate(data) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/pesticidesl-subject/update',
    data
  })
}

//农药经营主体 新增
export function  pesticidesBusinessInsert(data) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/pesticidesl-subject/insert',
    data
  })
}

//图片上传
export function  dynamicUpload(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/enterprise-output-value/upload',
    data
  })
}