import request from '@/utils/request';

  // 首页基础数据查询
export function basicsData () {
    return request({
        method: 'POST',
        url: '/index/basics',
    })
}

//数据增长趋势
export function dataGrowth () {
    return request({
        method: 'POST',
        url: '/index/dataGrowth',
    })
}

//数据类型占比
export function dataProportion () {
    return request({
        method: 'POST',
        url: '/index/dataType',
    })
}

//各部门数据总量统计
export function getDepartmentCount () {
    return request({
      method: 'POST',
      url: '/index/departmentCount',
    })
}

//各部门数据查询
export function departmentList () {
    return request({
        method: 'POST',
        url: '/index/departmentList',
    })
}






