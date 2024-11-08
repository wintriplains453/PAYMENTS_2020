import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	region: [],
    regionName: 'Алтайский край',
    processingData: []
  },
  mutations: {
  	SET_REGIONS(state, item) {
  		state.region = item
  	},
    SET_REGION_NAME(state, item) {
      state.regionName = item
    },
    SET_PROCESSING_DATA(state, item) {
      state.processingData = item
    }
  },
  actions: {
  	GET_REGIONS({commit}, item) {
  		commit('SET_REGIONS', item)
  	},
    GET_REGION_NAME({commit}, item) {
      commit('SET_REGION_NAME', item)
    },
    GET_PROCESSING_DATA({commit}, item) {
      commit('SET_PROCESSING_DATA', item)
    }
  },
  getters: {

  }
})
