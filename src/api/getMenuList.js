import request from '@/utils/request'
export function getMenuList(query) {
  return request({
    url: '/getMenuList',
    method: 'get',
    params: query
  })
}
