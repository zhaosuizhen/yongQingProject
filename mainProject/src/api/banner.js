// banner图维护相关接口
import request from '@/util/request'

//获取农产品市场交易数据  
export function bannerWeb (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/banner/bannerWeb',
    params
  })
}

//根据品种名称获取文章  
export function getArticlesByTitle (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/newInterfaceApi/getArticlesByTitle',
    params
  })
}

//交易市场数据接口  
export function tradingMarket (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/newInterfaceApi/tradingMarket',
    params
  })
}