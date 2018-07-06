const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  mid: state => state.user.mid,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
