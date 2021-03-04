// 主页相关接口
import request from '@/util/request'
// import request from './request'

//获取价格交易数据  
export function marketPrice (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/marketPrice',
    params
  })
}

//价格模块获取绵阳最近一个月的价格数据走势  
export function changesInPrices (params) {    //type: 0.蔬菜类型数据，1水果类型数据，2肉类型数据,不传为查询全部
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/changesInPrices',
    params
  })
}

//市场交易数据  饼图
export function transactionData () {    
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/cMarketTransaction/transactionData'
  })
}
