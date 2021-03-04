//渔业局--渔业生产基本情况 接口
import request from '@/utils/request'


// 渔业生产基本情况分页 basicInformationOfFishery
export function fisheryBasicInfoSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fisheries-basic/selectListByPage',
      data
    })
  }

  //渔业生产基本情况 删除
  export function  fisheryBasicInfoDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/fisheries-basic/delete',
      data
    })
  }
//渔业生产基本情况 审核
export function  fisheryBasicInfoAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/fisheries-basic/audit',
    data,
    params
  })
}

//渔业生产基本情况 详情
export function  fisheryBasicInfoDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/fisheries-basic/detail',
    params
  })
}

//渔业生产基本情况 编辑
export function  fisheryBasicInfoUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/fisheries-basic/update',
    data
  })
}

//渔业生产基本情况 新增
export function  fisheryBasicInfoInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/fisheries-basic/insert',
    data
  })
}