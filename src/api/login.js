import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/api/login/doLogin',
    method: 'post',
    data: {
      mid: parseInt(username),
      mPass: password
    }
  })
}

export function getInfo() {
  return request({
    url: '/api/admin/getMyInfo',
    method: 'post',
    data: {
      msg: 'content'
    }
  })
}

export function logout() {
  return request({
    url: '/api/login/doLogout',
    method: 'post',
    data: {
    }
  })
}
