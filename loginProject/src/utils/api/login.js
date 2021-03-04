import request from '@/utils/requestLogin'
import Vue from 'vue'

//获取验证码
export function getCodeImg (params) {
    return request({
        responseType: 'arraybuffer',
        method: 'GET',
        url: Vue.prototype.baseURL+'/clesun/controller/v1.0/captcha.jpg',
        params
    })    
}

//登录

export function login (params) {
    return request({
        method: 'POST',
        url: Vue.prototype.baseURL+'/clesun/controller/v1.0/login',
        params
    })    
}