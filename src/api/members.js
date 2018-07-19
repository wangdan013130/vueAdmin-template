import request from '@/utils/request'

export function getmembers(para) {
  return request({
    url: '/api/admin/getMembers',
    method: 'post',
    data: para
  })
}

export function getmembersCount(para) {
  return request({
    url: '/api/admin/getMembersCount',
    method: 'post',
    data: para
  })
}

export function addmembersYes(url, para) {
  return request({
    url: url,
    method: 'post',
    data: para
  })
}
