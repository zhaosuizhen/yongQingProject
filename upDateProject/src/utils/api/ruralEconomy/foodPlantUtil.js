//农经股----粮食作物单产
import request from '@/utils/request'

// 粮食作物单产 分页
export function  foodPlantUtilList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-yield-area/selectListByPage',
      data
    })
  }

  // 粮食作物单产 删除
  export function  foodPlantUtilDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-yield-area/delete',
      data
    })
  }

    // 粮食作物单产  审核
  export function  foodPlantUtilAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-yield-area/audit',
      data,
      params
    })
  }

// 粮食作物单产  详情
export function  foodPlantUtilDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-yield-area/detail?',
        params
    })
}

// 粮食作物单产  新增
export function  foodPlantUtilInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-yield-area/insert',
        data
    })
}

// 粮食作物单产  编辑
export function  foodPlantUtilUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-yield-area/update',
        data
    })
}