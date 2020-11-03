import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    daysInterval: [],
    selectedDate: [],
    provinceInfo: [],
  },
  getters: {
    getProviceName: state => {
      return state.provinceInfo.map(p => p.province);
    },
  },
  mutations: {
    setDaysInterval(state, payload) {
      state.daysInterval = payload;
    },
    setProvinceInfo(state, payload) {
      state.provinceInfo = payload;
    },
  },
  actions: {
    updateDaysInterval({ commit }, payload) {
      commit('setDaysInterval', payload);
    },
    updateProvinceInfo({ commit }, payload) {
      commit('setProvinceInfo', payload);
    },
  },
  modules: {},
});
