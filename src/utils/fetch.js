import axios from 'axios'
import {root_url} from '@/components/api/config'
// import { Message } from 'element-ui'

import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: root_url, // api的base_url
  timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (getToken()) {
    // console.log(getToken())
    // config.headers['Authorization'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['Authorization'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})


export default service


 