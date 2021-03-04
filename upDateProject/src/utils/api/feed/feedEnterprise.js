//饲料办--饲料企业 接口
import request from '@/utils/request'


// 饲料企业分页 basicInformationOfFishery
export function feedEnterpriseList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/feed-enterprise/selectListByPage',
      data
    })
  }

  //饲料企业 删除
  export function  feedEnterpriseDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/feed-enterprise/delete',
      data
    })
  }
//饲料企业 审核
export function  feedEnterpriseAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/feed-enterprise/audit',
    data,
    params
  })
}

//饲料企业 详情
export function  feedEnterpriseDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/feed-enterprise/detail',
    params
  })
}

//饲料企业 编辑
export function  feedEnterpriseUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/feed-enterprise/update',
    data
  })
}

//饲料企业 新增
export function  feedEnterpriseInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/feed-enterprise/insert',
    data
  })
}