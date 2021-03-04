//渔业局--淡水养殖产品产量 接口
import request from '@/utils/request'

// 淡水养殖产品产量分页
export function freshwaterProductsSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/dsyz-product/selectListByPage',
      data
    })
  }

  //淡水养殖产品产量 删除
export function   freshwaterProductsDelete(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/dsyz-product/delete',
    data
  })
}

  //淡水养殖产品产量 审核
  export function   freshwaterProductsAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/dsyz-product/audit',
      data,
      params
    })
  }

    //淡水养殖产品产量 详情
    export function   freshwaterProductsDetail(params) {
      return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/dsyz-product/detail',
        params
      })
    }

    
  //淡水养殖产品产量 编辑
  export function   freshwaterProductsUpdate(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/dsyz-product/update',
      data
    })
  }

//淡水养殖产品产量 新增
export function   freshwaterProductsInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/dsyz-product/insert',
    data
  })
}