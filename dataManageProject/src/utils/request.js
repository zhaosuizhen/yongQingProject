/*
 * 封装 axios 请求
 */
import axios from "axios"
import {MessageBox} from 'element-ui';

const request = axios.create({
  baseURL:'http://39.104.114.103:18085'   //服务器地址
  // baseURL:'http://192.168.1.27:18085'   //服务器地址

  
})

request.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    let token = sessionStorage.getItem("authToken")   //获取token
    config.headers.authToken = token                     //统一设置token
    // config.headers['Content-Type'] = 'application/json'                    
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if(response.data.msg.includes('token过期')){
      MessageBox(response.data.msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'arning'
      }).then(() => {
        location.href = 'http://39.104.114.103:8082/home/#/login'
      })
    }
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
)

export default request