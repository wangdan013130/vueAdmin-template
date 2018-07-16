import request from '@/utils/request'

export function getnotice() {
  return request({
    url: '/api/admin/getNoticeJson',
    method: 'post',
    data: {}
  })
}

export function getAllSwitch() {
  return request({
    url: '/api/switch/getAllSwitch',
    method: 'post',
    data: {}
  })
}
