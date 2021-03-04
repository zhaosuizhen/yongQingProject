// 知识交流接口
import request from '@/util/request'
// import qs from 'qs'

//查看所有发布的问题分页接口
export function pageList (params) {
  return request({
    method: 'GET',
    url: `/clesun/achievement_networking_api/v1.0/cAskQuestionsApi/pageList`,
    params
  })
}

//查看问题详情
export function details (params) {
  return request({
    method: 'GET',
    url: `/clesun/achievement_networking_api/v1.0/cAskQuestionsApi/details`,
    params
  })
}