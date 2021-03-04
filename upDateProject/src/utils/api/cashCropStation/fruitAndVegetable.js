//经作站--乡镇果蔬标准化基地 接口
import request from '@/utils/request'

// 乡镇果蔬标准化基地分页
export function fruitAndVegetableList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cash-standard-base/selectListByPage',
      data
    })
  }

  //乡镇果蔬标准化基地 删除
  export function  fruitAndVegetableDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/cash-standard-base/delete',
      data
    })
  }
//乡镇果蔬标准化基地 审核
export function  fruitAndVegetableAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-standard-base/audit',
    data,
    params
  })
}

//乡镇果蔬标准化基地 详情
export function  fruitAndVegetableDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-standard-base/detail?',
    params
  })
}

//乡镇果蔬标准化基地 编辑
export function  fruitAndVegetableUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-standard-base/update',
    data
  })
}

//乡镇果蔬标准化基地 新增
export function  fruitAndVegetableInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/cash-standard-base/insert',
    data
  })
}