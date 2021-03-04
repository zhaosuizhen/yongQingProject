//种植业股----鲜果产量
import request from '@/utils/request'

// 鲜果产量 分页
export function  freshFruitYieldList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fresh-fruit-yield/selectListByPage',
      data
    })
  }

  // 鲜果产量 删除
  export function  freshFruitYieldDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fresh-fruit-yield/delete',
      data
    })
  }

    // 鲜果产量  审核
  export function  freshFruitYieldAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fresh-fruit-yield/audit',
      data,
      params
    })
  }

// 鲜果产量  详情
export function  freshFruitYieldDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fresh-fruit-yield/detail?',
        params
    })
}

// 鲜果产量  新增
export function  freshFruitYieldInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fresh-fruit-yield/insert',
        data
    })
}

// 鲜果产量  编辑
export function  freshFruitYieldUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/fresh-fruit-yield/update',
        data
    })
}