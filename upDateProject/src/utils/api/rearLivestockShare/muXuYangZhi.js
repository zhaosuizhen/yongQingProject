//畜牧股
import request from '@/utils/request'

// 牧畜养殖数据分页
export function  muXuYangZhiList(data) {
    return request({
      method: 'POST',
      url: '/animal-husbandry/animal-husbandry/selectListByPage',
      data
    })
  }

  // 牧畜养殖数据删除
  export function  muXuYangZhiDelete(data) {
    return request({
      method: 'POST',
      url: 'animal-husbandry/animal-husbandry/delete',
      data
    })
  }

    // 牧畜养殖数据 审核
  export function  muXuYangZhiAudit(data,params) {
    return request({
      method: 'POST',
      url: '/animal-husbandry/animal-husbandry/audit',
      data,
      params
    })
  }

// 牧畜养殖数据 详情
export function  muXuYangZhiDetail(params) {
    return request({
        method: 'POST',
        url: '/animal-husbandry/animal-husbandry/detail',
        params
    })
}

// 牧畜养殖数据 新增
export function  muXuYangZhiInsert(data) {
    return request({
        method: 'POST',
        url: '/animal-husbandry/animal-husbandry/insert',
        data
    })
}

// 牧畜养殖数据 编辑
export function  muXuYangZhiUpdate(data) {
    return request({
        method: 'POST',
        url: '/animal-husbandry/animal-husbandry/update',
        data
    })
}