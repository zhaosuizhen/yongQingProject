// 蔬菜养殖相关接口
import request from '@/util/request'

//获取蔬菜基础数据  
export function getVegetablesBaseData () {
  return request({
    method: 'GET',
    url: '/clesun/api/v1.0/web/vegetables/getVegetablesBaseData'
  })
}