// 地理信息相关接口
import request from '@/util/request'

//获取乡镇耕地分布数据
export function getGDFB () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/getLandProductGradeArea'
  })
}

//获取耕地面积占比数据
export function getGDMJZB () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/landusearea'
  })
}

//获取耕地力等级数据
export function landleval () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/getLandProductGradeTotal'
  })
}

//获取监测点分布数据
export function survey () {
  return request({
    method: 'GET',
    url: 'http://39.99.202.47:8081/clesun/api/v1.0/web/april7/survey'
  })
}

//获取乡镇承包地块数量数据
export function contractcount () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/contractcount'
  })
}

//获取乡镇承包地块面积数据
export function contractarea () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/april7/contractarea'
  })
}

//农村人居环境数据
export function getLivableVillageData () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/parcel/getLivableVillageData'
  })
}
