import axios from 'axios'
import qs from 'qs'

const CONTENT_TYPES = {
  1: 'application/json',
  2: 'multipart/form-data',
  3: 'application/x-www-form-urlencoded'
}

// 设置默认请求地址前缀
axios.defaults.baseURL = process.env.VUE_APP_API_PREFIX

// 缓存正在请求的ajax
const catchPendings = {}

/**
 * 异常捕获
 * @param {Object} error
 */
function catchFn(error) {
  const data = _.get(error, 'response.data.head') || {}
  if (data.subCode === 'auth:unauthorized') {
    // oauth.login() //以后
  }
  return {
    head: {
      code: data.code || '-1',
      subCode: data.subCode || '-1',
      message: data.message || error.message,
      subMessage: data.subMessage || error.message
    }
  }
}

export function generate(config) {
  const map = {}
  const items = config.items
  for (let i = 0, len = items.length; i < len; i++) {
    const item = items[i]
    // 默认请求方式为 json
    item.cType = item.cType || 1
    map[item.key] = function(data, options) {
      const key = encodeURIComponent(
        JSON.stringify(config) +
        JSON.stringify(data) +
        JSON.stringify(options))
      if (catchPendings[key]) {
        return Promise.reject({
          message: '请求重复'
        })
      }
      catchPendings[key] = true
      return axios(
        Object.assign({
          url: process.env.VUE_APP_BASE_API + (item.prefix || config.prefix || '') + item.url,
          transformRequest: function(data, headers) {
            if (item.cType === 3) {
              return qs.stringify(data)
            }
            return JSON.stringify(data)
          },
          method: item.method || 'post',
          headers: {
            'Content-Type': CONTENT_TYPES[item.cType]
          },
          data
        }, options)
      ).then(function({
        data
      }) {
        // 这里是因为 dialog 关闭延迟导致的
        // 需要延迟清空状态
        setTimeout(() => {
          catchPendings[key] = false
        }, 300)
        return data
      }).catch((err) => {
        catchPendings[key] = false
        catchFn(err)
      })
    }
  }
  return map
}
