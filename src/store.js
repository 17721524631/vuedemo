import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    file: []
  },
  mutations: {
    fileList: function (state, data) {
      state.fileList = data
    },
  },
  actions: {
    ask: function (context) {
      console.log(context.state.fileList);
    }
  },
  plugins: [createPersistedState()]
})


