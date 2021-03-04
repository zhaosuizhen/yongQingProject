//植保站---虫鼠害发生和防治面积 接口
import request from '@/utils/request'

// 虫鼠害发生和防治面积分页
export function occurrenceSelectList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nzwcsh/selectListByPage',
      data
    })
  }

  // 虫鼠害发生和防治删除
  export function  occurrenceDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nzwcsh/delete',
      data
    })
  }

  // 虫鼠害发生和防治审核
  export function  occurrenceAudit(data,params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nzwcsh/audit',
      data,
      params
    })
  }

  // 虫鼠害发生和防治  详情
  export function  occurrenceDetail(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nzwcsh/detail',
      params
    })
  }

    // 虫鼠害发生和防治  编辑
    export function  occurrenceUpdate(data) {
      return request({
        method: 'POST',
        url: '/bigdata_update_nanxian/nzwcsh/update',
        data
      })
    }

  // 虫鼠害发生和防治  编辑
  export function  occurrenceInsert(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nzwcsh/insert',
      data
    })
  }

  //根据年份判断是否可以添加当前数据
  export function  occurrenceIsAddByYear(params) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/nzwcsh/isAddByYear',
      params
    })
  }
  
