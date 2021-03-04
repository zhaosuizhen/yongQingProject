/**
 * 封装 axios 请求模块
 */
import axios from "axios"

// axios.create 方法：复制一个 axios
const request = axios.create({
  baseURL: "http://39.104.114.103:8086" // 基础路径
  // baseURL: "http://192.168.1.27:8086" // 基础路径
  // baseURL: "http://10.129.211.156:8086" // 基础路径
})

request.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
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