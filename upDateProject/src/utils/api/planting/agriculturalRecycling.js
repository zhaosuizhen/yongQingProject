//种植业股----农膜覆盖及回收利用情况
import request from '@/utils/request'

// 农膜覆盖及回收利用情况 分页
export function  agriculturalRecyclingList(data) {
    return request({
      method: 'POST',
      url: '/inputs-film/inputs-film/selectListByPage',
      data
    })
  }

  // 农膜覆盖及回收利用情况 删除
  export function  agriculturalRecyclingDelete(data) {
    return request({
      method: 'POST',
      url: '/inputs-film/inputs-film/delete',
      data
    })
  }

    // 农膜覆盖及回收利用情况  审核
  export function  agriculturalRecyclingAudit(data,params) {
    return request({
      method: 'POST',
      url: '/inputs-film/inputs-film/audit',
      data,
      params
    })
  }

// 农膜覆盖及回收利用情况  详情
export function  agriculturalRecyclingDetail(params) {
    return request({
        method: 'POST',
        url: '/inputs-film/inputs-film/detail?',
        params
    })
}

// 农膜覆盖及回收利用情况  新增
export function  agriculturalRecyclingInsert(data) {
    return request({
        method: 'POST',
        url: '/inputs-film/inputs-film/insert',
        data
    })
}

// 农膜覆盖及回收利用情况  编辑
export function  agriculturalRecyclingUpdate(data) {
    return request({
        method: 'POST',
        url: '/inputs-film/inputs-film/update',
        data
    })
}