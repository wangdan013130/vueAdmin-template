import request from '@/utils/request'

export function searchUser(para) {
  return request({
    url: '/api/admin/getUserByID',
    method: 'post',
    data: para
  })
}

export function addUserMoney(url, para) {
  return request({
    url: url,
    method: 'post',
    data: para
  })
}

export function getMoneylog(para) {
  return request({
    url: '/api/newPlayer/getUserCurrency',
    method: 'post',
    data: para
  })
}

export function forceLogout(para) {
  return request({
    url: '/api/admin/forceLogout',
    method: 'post',
    data: para
  })
}

export function unbindAgent(para) {
  return request({
    url: '/api/admin/unbindClubInfo',
    method: 'post',
    data: para
  })
}

export function getActivityList(para) {
  return request({
    url: '/api/activity/getActivityList',
    method: 'post',
    data: para
  })
}

