import request from '@/utils/request'

export function getmembers(para) {
  return request({
    url: '/api/admin/getMembers',
    method: 'post',
    data: para
  })
}
