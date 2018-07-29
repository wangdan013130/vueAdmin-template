import request from '@/utils/request'

export function searchUser(para) {
  return request({
    url: '/api/admin/getUserByID',
    method: 'post',
    data: para
  })
}
