/*
 * 封装 axios 请求
 */
import axios from "axios"

const request = axios.create({
  // baseURL:'http://119.6.57.72:8099/'   //服务器地址
  baseURL:'http://39.104.114.103:8099/'   //服务器地址
  // baseURL:'http://192.168.1.27:8099/'   //服务器地址

  
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
    return response
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
)

export default request