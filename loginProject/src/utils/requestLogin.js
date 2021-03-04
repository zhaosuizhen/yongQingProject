/*
 * 封装 axios 请求
 */
import axios from "axios"

const request = axios.create({
 // baseURL:'http://182.92.203.101:8087'   //服务器地址

  //baseURL: "http://10.129.211.154:8080"
  //baseURL: 'http://10.1.203.20:8080/'
})

request.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
   // let token = sessionStorage.getItem("authToken")   //获取token
    //config.headers.authToken = token                     //统一设置token
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