// 数据目录相关接口
import request from '@/utils/request'

//查询目录树状结构数据 
export function menuTree (params) {
  return request({
    method: 'GET',
    url: '/datamanage/date-menu-tree/menuTree',
    params
  })
}

//根据id和表名称获取数据 
export function getHeadDataById (params) {
  return request({
    method: 'GET',
    url: '/datamanage/date-menu-tree/getHeadDataById',
    params
  })
}

//分页查询 
export function dataToMenuByLimit (data) {
  return request({
    method: 'POST',
    url: '/datamanage/date-menu-tree/getDataToMenuByLimit',
    data
  })
}

//获取表名、注释 
export function getTableName () {
  return request({
    method: 'GET',
    url: '/datamanage/date-menu-tree/getTableName'
  })
}

//新增菜单 
export function addMenu (data) {
  return request({
    method: 'POST',
    url: '/datamanage/date-menu-tree/addMenu',
    data
  })
}

//编辑菜单 
export function updateMenu (data) {
  return request({
    method: 'POST',
    url: '/datamanage/date-menu-tree/update',
    data
  })
}

//删除菜单 
export function deleteMenu (params) {
  return request({
    method: 'POST',
    url: '/datamanage/date-menu-tree/delete',
    params
  })
}

//下载数据 
export function getCustomExcel (params) {
  return request({
    method: 'GET',
    url: '/datamanage/date-menu-tree/getCustomExcel',
    responseType: 'blob',
    params
  })
}