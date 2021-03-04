// 知识交流社区相关接口
import request from '@/util/request'

//查看所有发布的问题分页接口  
export function pageList (params) {
  return request({
    method: 'GET',
    url: '/clesun/achievement_networking_api/v1.0/cAskQuestionsApi/pageList',
    params
  })
}

//查看问题详情  
export function details (params) {
  return request({
    method: 'GET',
    url: '/clesun/achievement_networking_api/v1.0/cAskQuestionsApi/details',
    params
  })
}

//新增评论  
export function addComment (data) {
  return request({
    method: 'POST',
    url: '/clesun/achievement_networking_api/v1.0/CommentApi/add',
    data
  })
}

//查看个人发布的问题分页接口  
export function personalPageList (params) {
  return request({
    method: 'GET',
    url: '/clesun/achievement_networking_api/v1.0/cAskQuestionsApi/personalPageList',
    params
  })
}

//图片上传  
export function upload (data) {
  return request({
    method: 'POST',
    url: '/clesun/achievement_networking_api/v1.0/achievementNetworkingFileUploadApi/upload',
    data
  })
}

//新增发布问题  
export function addQuestion (params) {
  return request({
    method: 'POST',
    url: '/clesun/achievement_networking_api/v1.0/cAskQuestionsApi/add',
    params
  })
}

//修改个人信息  
export function modifyPersonalInformation (data) {
  return request({
    method: 'POST',
    url: '/clesun/achievement_networking_api/v1.0/login/modifyPersonalInformation',
    data
  })
}