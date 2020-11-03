import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    daysInterval: [],
    selectedDate: [],
    provinceInfo: [],
    selectedProvince: '',
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
    setSelectedDate(state, payload) {
      state.selectedDate = payload;
    },
    setSelectedProvince(state, payload) {
      state.selectedProvince = payload;
    },
  },
  actions: {
    updateDaysInterval({ commit }, payload) {
      commit('setDaysInterval', payload);
    },
    updateProvinceInfo({ commit }, payload) {
      commit('setProvinceInfo', payload);
    },
    updateSelectedDate({ commit }, payload) {
      commit('setSelectedDate', payload);
    },
    updateSelectedProvince({ commit }, payload) {
      commit('setSelectedProvince', payload);
    },
  },
  modules: {},
});
