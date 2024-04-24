import axios from 'axios'
import {BASE_URL, TIME_OUT} from './config'

class HyRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }

  requset(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.requset({...config, method: 'get'})
  }

  post(config) {
    return this.requset({...config, method: 'post'})
  }
}

export default new HyRequest(BASE_URL, TIME_OUT)