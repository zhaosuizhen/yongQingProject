// 移动端表单提交
import request from '@/utils/request'
// import qs from 'qs'

//新增运输信息
export function addInfo (data) {
  return request({
    method: 'POST',
    url: `/tracing_the_source_of_straw/transport-information-sheet/add`,
    data
  })
}

//获取直播地址
export function getRealTimeVideo () {
  return request({
    method: 'GET',
    url: `/tracing_the_source_of_straw/equipment/getRealTimeVideo`
  })
}

//根据时间获取历史数据
export function getPolicyInformationHistoryByTime (params) {
  return request({
    method: 'GET',
    url: `/tracing_the_source_of_straw/transport-information-sheet/getPolicyInformationHistoryByTime`,
    params
  })
}

//实时信息数据
export function getRealTimeData (params) {
  return request({
    method: 'GET',
    url: `/tracing_the_source_of_straw/vehicle-gps-information/getRealTimeData`,
    params
  })
}

//获取历史视频数据
export function getHistoricalVideo (params) {
  return request({
    method: 'GET',
    url: `/tracing_the_source_of_straw/equipment/getHistoricalVideo`,
    params
  })
}

//运输完成后
export function strawDelivery () {
  return request({
    method: 'GET',
    url: `/tracing_the_source_of_straw/transport-information-sheet/strawDelivery`
  })
}