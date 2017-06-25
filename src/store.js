import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const ROUTE_UPDATE_ROUTE = 'route/updateRoute'

var routeStore = {
  state: {
    path: '',
    params: '',
    query: ''
  },
  mutations: {
    updateRoute: function (state, route) {
      state.path = route.fullPath
      state.params = route.params
      state.query = route.query
    }
  }
}

var store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  modules: {
    route: routeStore
  }
})

export default store
