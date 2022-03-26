import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataName: [],
    realTimeData: [],
    test: 1,
    dialog: 1,
    currentCems: '焙烧CEMS'
  },
  mutations: {
    set_dataName (state, dataName) {
      state.dataName = dataName
      state.test = 2
    },
    set_realTimeData (state, realTimeData) {
        state.realTimeData = realTimeData
    },
    set_dialog (state) {
      state.dialog++
    },
    change_cems (state,currentCems) {
      state.currentCems = currentCems
    }
  },
  getters: {
    currentCems:state => state.currentCems
  },
  modules: {
  }
})
