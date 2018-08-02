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

export function setmemMoney(para) {
  return request({
    url: '/api/memberData/setMemberMoneyLevel',
    method: 'post',
    data: para
  })
}

export function setmemGold(para) {
  return request({
    url: '/api/memberData/setMemberGoldLevel',
    method: 'post',
    data: para
  })
}

export function addmemMoneyYes(url, para) {
  return request({
    url: url,
    method: 'post',
    data: para
  })
}

export function getMoneylog(para) {
  return request({
    url: '/api/newMember/getMemberCurrency',
    method: 'post',
    data: para
  })
}

export function getUserlog(para) {
  return request({
    url: '/api/admin/getUserUseList',
    method: 'post',
    data: para
  })
}

export function getRankList(url, para) {
  return request({
    url: url,
    method: 'post',
    data: para
  })
}

export function getPersonBonus(para) {
  return request({
    url: '/api/memberData/getMemberScoreRecord',
    method: 'post',
    data: para
  })
}

export function getQrcodeApply(para) {
  return request({
    url: '/api/admin/getQrcodeApply',
    method: 'post',
    data: para
  })
}

export function approveQrcodeApply(para) {
  return request({
    url: '/api/admin/approvalQrcodeApply',
    method: 'post',
    data: para
  })
}

export function refuseQrcodeApply(para) {
  return request({
    url: '/api/admin/refuseQrcodeApply',
    method: 'post',
    data: para
  })
}

