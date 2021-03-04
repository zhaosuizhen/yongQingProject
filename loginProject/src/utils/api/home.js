import request from '@/utils/request'
import Vue from 'vue'

//获取一级菜单
export function getmanuList(params) {
    return request({
        method: 'GET',
        url: Vue.prototype.baseURL+'/clesun/controller/v1.0/getMenuByPhone',
        params
    })  
}
