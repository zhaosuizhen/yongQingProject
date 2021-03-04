//种植业股----耕地面积
import request from '@/utils/request'

// 耕地面积 分页
export function  cultivatedLandAreaList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cultivated-land-area/selectListByPage',
      data
    })
  }

  // 耕地面积 删除
  export function  cultivatedLandAreaDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cultivated-land-area/delete',
      data
    })
  }

    // 耕地面积  审核
  export function  cultivatedLandAreaAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cultivated-land-area/audit',
      data,
      params
    })
  }

// 耕地面积  详情
export function  cultivatedLandAreaDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/cultivated-land-area/detail?',
        params
    })
}

// 耕地面积  新增
export function  cultivatedLandAreaInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/cultivated-land-area/insert',
        data
    })
}

// 耕地面积  编辑
export function  cultivatedLandAreaUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/cultivated-land-area/update',
        data
    })
}