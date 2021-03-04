//农经股----粮食作物播种面积
import request from '@/utils/request'

// 粮食作物播种面积分页
export function  foodPlantAreaList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-area/selectListByPage',
      data
    })
  }

  // 粮食作物播种面积删除
  export function  foodPlantAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-area/delete',
      data
    })
  }

    // 粮食作物播种面积 审核
  export function  foodPlantAreaAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/crop-food-area/audit',
      data,
      params
    })
  }

// 粮食作物播种面积 详情
export function  foodPlantAreaDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-area/detail?',
        params
    })
}

// 粮食作物播种面积 新增
export function  foodPlantAreaInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-area/insert',
        data
    })
}

// 粮食作物播种面积 编辑
export function  foodPlantAreaUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/crop-food-area/update',
        data
    })
}