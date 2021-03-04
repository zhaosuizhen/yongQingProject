
import request from '@/utils/request'

//数据处理查询分页
export function selectHandleListByPage (data) {
    return request({
        method: 'POST',
        //url: '/bigdata_update_nanxian/user/getMenuById',
        url:'/bigdata_update_nanxian/handle-data/selectHandleListByPage',
        data
      })
}

//数据共享查询分页
export function selectShareListByPage (data) {
    return request({
        method: 'POST',
        //url: '/bigdata_update_nanxian/user/getMenuById',
        url:'/bigdata_update_nanxian/handle-data/selectShareListByPage',
        data
      })
}