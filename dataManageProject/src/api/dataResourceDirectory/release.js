// 数据发布相关接口
import request from '@/utils/request'
// import qs from 'qs'

//数据资源发布 
export function addDataResourcePublishing (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-resource-publishing/addDataResourcePublishing?dataRelease=${params.dataRelease}${params.tableName}`
  })
}
