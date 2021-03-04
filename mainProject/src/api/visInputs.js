// 基础信息
import request from '@/util/request'

//*************** 0: 牛、1：羊、2：家禽***************/

//获取养殖产量数据  
export function breedingYield (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestockProductionYieldWeb/breedingYield',
    params
  })
}

//获取各乡镇产量数据  
export function townshipYield (params) {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/livestockProductionYieldWeb/townshipYield',
    params
  })
}