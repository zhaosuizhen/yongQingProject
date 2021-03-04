//动物疫病预防控制中心--动物疫病防控 接口
import request from '@/utils/request'

// 动物疫病防控分页
export function animalDiseaseList(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/animal-disease-control/selectListByPage',
      data
    })
  }

  //动物疫病防控 删除
  export function  animalDiseaseDelete(data) {
    return request({
      method: 'POST',
      url: '/bigdata_update_nanxian/animal-disease-control/delete',
      data
    })
  }
//动物疫病防控 审核
export function  animalDiseaseAudit(data,params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/animal-disease-control/audit',
    data,
    params
  })
}

//动物疫病防控 详情
export function  animalDiseaseDetail(params) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/animal-disease-control/detail?',
    params
  })
}

//动物疫病防控 编辑
export function  animalDiseaseUpdate(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/animal-disease-control/update',
    data
  })
}

//动物疫病防控 新增
export function  animalDiseaseInsert(data) {
  return request({
    method: 'POST',
    url: '/bigdata_update_nanxian/animal-disease-control/insert',
    data
  })
}