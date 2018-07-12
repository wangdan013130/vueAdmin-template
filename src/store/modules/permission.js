import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(role, route) {
  // console.log(222)
  if (route.meta && route.meta.roles) {
    // console.log(333)
    return route.meta.roles.indexOf(role) >= 0
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, role) {
  // console.log(444)
  const accessedRouters = asyncRouterMap.filter(route => {
    // console.log(555)
    if (hasPermission(role, route)) {
      // console.log(666)
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, role)
      }
      return true
    }
    return true
  })
  // console.log(accessedRouters)
  return accessedRouters
}
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const role = data
        let accessedRouters
        if (role === 10) {
          accessedRouters = asyncRouterMap
        } else {
          // console.log(111)
          accessedRouters = filterAsyncRouter(asyncRouterMap, role)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
