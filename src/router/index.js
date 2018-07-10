import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
  当你需要懒加载 lazy-loading 的时候，需要一个个把routes的component改为() => import('@/views/login.vue')
  当你的项目页面越来越多之后，在开发环境之中使用 lazy-loading 会变得不太合适，每次更改代码触发热更新都会变得非常的慢。所以建议只在生成环境之中使用路由懒加载功能。
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/findpass', component: () => import('@/views/login/findpass'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/members',
    component: Layout,
    meta: { title: 'members', icon: 'members' },
    children: [
      {
        path: 'hygl',
        name: 'hygl',
        component: () => import('@/views/tree/index'),
        meta: { title: 'hygl', icon: 'table' }
      },
      {
        path: 'rank',
        name: 'rank',
        component: () => import('@/views/tree/index'),
        meta: { title: 'rank', icon: 'rank' }
      },
      {
        path: 'integrate',
        name: 'integrate',
        component: () => import('@/views/tree/index'),
        meta: { title: 'integrate', icon: 'integrate' }
      },
      {
        path: 'examine',
        name: 'examine',
        component: () => import('@/views/tree/index'),
        meta: { title: 'examine', icon: 'examine' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    meta: { title: 'user', icon: 'user' },
    children: [
      {
        path: 'sale',
        name: 'sale',
        component: () => import('@/views/tree/index'),
        meta: { title: 'sale', icon: 'sale' }
      },
      {
        path: 'userstatistics',
        name: 'userstatistics',
        component: () => import('@/views/tree/index'),
        meta: { title: 'userstatistics', icon: 'userstatistics' }
      }
    ]
  },
  {
    path: '/cardgroup',
    component: Layout,
    meta: { title: 'cardgroup', icon: 'cardgroup' },
    children: [
      {
        path: 'cgmanager',
        name: 'cgmanager',
        component: () => import('@/views/tree/index'),
        meta: { title: 'cgmanager', icon: 'cgmanager' }
      },
      {
        path: 'cgstatistics',
        name: 'cgstatistics',
        component: () => import('@/views/tree/index'),
        meta: { title: 'cgstatistics', icon: 'cgstatistics' }
      },
      {
        path: 'cgkpimanage',
        name: 'cgkpimanage',
        component: () => import('@/views/tree/index'),
        meta: { title: 'cgkpimanage', icon: 'cgkpimanage' }
      }
    ]
  },
  {
    path: '/function',
    component: Layout,
    meta: { title: 'function', icon: 'function' },
    children: [
      {
        path: 'charge',
        name: 'charge',
        component: () => import('@/views/tree/index'),
        meta: { title: 'charge', icon: 'charge' }
      },
      {
        path: 'check',
        name: 'check',
        component: () => import('@/views/tree/index'),
        meta: { title: 'check', icon: 'check' }
      },
      {
        path: 'changepass',
        name: 'changepass',
        component: () => import('@/views/tree/index'),
        meta: { title: 'changepass', icon: 'changepass' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

