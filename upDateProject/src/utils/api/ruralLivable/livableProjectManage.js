//宜居乡村--项目管理
import request from '@/utils/request'

// 宜居乡村分页
export function  livableProjectManageList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livable-project-manage/selectListByPage',
      data
    })
  }

  // 宜居乡村删除
  export function  livableProjectManageDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livable-project-manage/delete',
      data
    })
  }

    // 宜居乡村 审核
  export function  livableProjectManageAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/livable-project-manage/audit',
      data,
      params
    })
  }

// 宜居乡村 详情
export function  livableProjectManageDetail(params) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livable-project-manage/detail?',
        params
    })
}

// 宜居乡村 新增
export function  livableProjectManageInsert(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livable-project-manage/insert',
        data
    })
}

// 宜居乡村 编辑
export function  livableProjectManageUpdate(data) {
    return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/livable-project-manage/update',
        data
    })
}