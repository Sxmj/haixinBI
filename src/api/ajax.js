// 发送ajax请求的函数（axios）
// import axios from 'axios'
// export default function ajax(url, data = {}, method = 'GET') {
//   return new Promise((resolve, reject) => {
//     let promise
//     // 执行异步ajax请求
//     if (method === 'GET') {
//       promise = axios.get(url, {
//         params: data
//       }) // params配置, 指定的是query参数
//     } else {
//       promise = axios.post(url, data)
//     }
//     promise.then(
//       response => { // 如果成功了, 调用resolve()
//         resolve(response.data)
//       },
//       error => { // 如果失败了, 不调用reject(), 而是提示错误信息
//         alert('请求异常: ' + error.message)
//       }
//     )
//   })
// }

import axios from 'axios'
import common from './common'
import qs from 'qs'
//MD5相关的配置数据
// import common from './common'
// axios.defaults.baseURL="后台服务器地址"
axios.defaults.baseURL = 'https://haixincs.taidu8.com'
axios.defaults.timeout = 60000
// 请求拦截器

axios.interceptors.request.use(config => {
  const {
    method,
    data
  } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
//响应拦截器
axios.interceptors.response.use(response => {
  // console.log(response.data)
  return response.data 
}, error => {
  // console.log("hah")
  //中断Promise链
  // return new Promise(() => {})
})

export default axios