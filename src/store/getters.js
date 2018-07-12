const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  info: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  permission_routers: state => state.permission.routers
}
export default getters
