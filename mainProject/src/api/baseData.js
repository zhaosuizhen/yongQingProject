// 基础数据页面相关接口
import request from '@/util/request'



//获取地理数据
export function landuselist (params) {
  return request({
    method: 'GET',
    // url: '/clesun/api/v1.0/web/april7/landuselist',
    url: '/clesun/api/v1.0/livestock/pageList',
    params
  })
}

