import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: localStorage.city || '北京'
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('nextChangeCity', city)
    }
  },
  mutations: {
    nextChangeCity(state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
