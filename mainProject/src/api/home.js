// 主页相关接口
import request_yq from '@/util/request'
//获取种植种类占比数据  
export function gettypedata () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getFoodAndCashData'
  })
}

//获取农林牧渔  
export function getcoststructure () {
  return request_yq({
    method: 'GET',
    url:  "/clesun/api/v1.0/geographicInformation/agricultureAndForestryAll"
  })
}

//耕地面积占比
export function getaquatictypeproportion () {
  return request_yq({
    method: 'GET',
    url:  "/clesun/api/v1.0/geographicInformation/cultivatedLandSumArea"
  })
}

//获取投入品用量数据  
export function inputuse () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/production/getProductionType'
  })
}

//获取植保防治趋势数据  
export function cropdefense () {
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/getPlantDiseaseControl'
  })
}

//养殖产量占比  
export function landuse () {
  return request_yq({
    method: 'GET',
    url:'/clesun/api/v1.0/livestockProductionYieldWeb/breedingYieldStatistics'
    
  })
}

//获取价格交易数据  
export function changesInPrices (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/marketPrice',
    params
  })
}

//价格模块获取绵阳最近一个月的价格数据走势  
export function MYchangesInPrices (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/changesInPrices',
    params
  })
}

//近一个月和上个月的平均价格  
export function lastMonthPrice (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request_yq({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/lastMonthPrice',
    params
  })
}
