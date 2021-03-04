// 用户行为分析相关接口
import request from '@/utils/request'
// import qs from 'qs'

//获取每月日均访问量和点击量
export function getAverageDailyVisitsAndHitsPerMonth (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-user-behavior-logs/getAverageDailyVisitsAndHitsPerMonth`,
    params
  })
}

//最近一周的访问次数趋势
export function getVisitsInThePastWeek (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-user-behavior-logs/getVisitsInThePastWeek`,
    params
  })
}

//获取模块点击量
export function getModuleHits (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-user-behavior-logs/getModuleHits`,
    params
  })
}

//模块浏览排序接口
export function getModuleBrowsingSort (params) {
  return request({
    method: 'GET',
    url: `/datamanage/data-user-behavior-logs/getModuleBrowsingSort`,
    params
  })
}

//获取实时点击接口
export function getRealTimeHitsCountAndVisitsCount (params) {
    return request({
      method: 'GET',
      url: `/datamanage/data-user-behavior-logs/getRealTimeHitsCountAndVisitsCount`,
      params
    })
}

//获取实时登录人数接口
export function getRealTimeVisitsCount (params) {
    return request({
      method: 'GET',
      url: `/datamanage/data-user-behavior-logs/getRealTimeVisitsCount`,
      params
    })
}