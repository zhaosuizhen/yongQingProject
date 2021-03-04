//县委秘书办---banner图维护 接口
import request from '@/utils/request'


// banner图维护分页
export function  bannerImgMaintainList(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/banner-maintain/selectListByPage',
      data
    })
  }

  // banner图维护删除
  export function  bannerImgMaintainDelete(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/banner-maintain/delete',
      data
    })
  }

    // banner图维护 审核
  export function  bannerImgMaintainAudit(data,params) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/banner-maintain/audit',
      data,
      params
    })
  }
   // banner图维护 详情
   export function  bannerImgMaintainDetail(params) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/banner-maintain/detail?',
      params
    })
  }

  // banner图维护 编辑
export function  bannerImgMaintainUpdate(data) {
  return request({
    method: 'POST',
    url: '/com.clesun.bigdata_update_nanxian/banner-maintain/update',
    data
  })
}

  // banner图维护 新增
  export function  bannerImgMaintainInsert(data) {
    return request({
      method: 'POST',
      url: '/com.clesun.bigdata_update_nanxian/banner-maintain/insert',
      data
    })
  }