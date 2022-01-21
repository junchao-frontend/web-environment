import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataName: [],
    realTimeData: [],
    test: 1
  },
  mutations: {
    set_dataName (state, dataName) {
      state.dataName = dataName
      state.test = 2
    },
    set_realTimeData (state, realTimeData) {
        state.realTimeData = realTimeData
      }
  },
  getters: {
  },
  modules: {
  }
})
