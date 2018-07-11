import request from '@/utils/request'

export function getnotice() {
  return request({
    url: '/api/admin/getNoticeJson',
    method: 'post',
    data: {}
  })
}

export function getmembers() {
  return request({
    url: '/api/admin/getMembers',
    method: 'post',
    data: {}
  })
}

