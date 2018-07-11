import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    info: {
      adminLevel: 0,
      buyReward: 0,
      gold: 0,
      isbindTwoLevel: false,
      mGoldLevel: 0,
      mMoneyLevel: 0,
      mName: '',
      mNick: '',
      mTime: '',
      mbindphone: '',
      mid: 0,
      money: 0,
      rebateGoldSend: 0,
      rebateMoneySend: 0,
      score: 0,
      sellMoneyLevel: 0
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(() => {
          const data = new Date().getTime()
          setToken(new Date())
          commit('SET_TOKEN', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const data = response.data
          if (data.adminLevel >= 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_INFO', data)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_INFO', {
            adminLevel: 0,
            buyReward: 0,
            gold: 0,
            isbindTwoLevel: false,
            mGoldLevel: 0,
            mMoneyLevel: 0,
            mName: '',
            mNick: '',
            mTime: '',
            mbindphone: '',
            mid: 0,
            money: 0,
            rebateGoldSend: 0,
            rebateMoneySend: 0,
            score: 0,
            sellMoneyLevel: 0
          })
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
