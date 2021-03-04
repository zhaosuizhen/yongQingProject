//农经股----粮食作物产量
import request from '@/utils/request'

// 粮食作物产量 分页
export function  foodPlantYieldList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-yield/selectListByPage',
      data
    })
  }

  // 粮食作物产量 删除
  export function  foodPlantYieldDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-yield/delete',
      data
    })
  }

    // 粮食作物产量  审核
  export function  foodPlantYieldAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-yield/audit',
      data,
      params
    })
  }

// 粮食作物产量  详情
export function  foodPlantYieldDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-yield/detail?',
        params
    })
}

// 粮食作物产量  新增
export function  foodPlantYieldInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-yield/insert',
        data
    })
}

// 粮食作物产量  编辑
export function  foodPlantYieldUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-yield/update',
        data
    })
}