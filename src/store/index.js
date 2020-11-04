import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    daysInterval: [],
    selectedDate: [],
    provinceInfo: [],
    weatherInfo: [],
    weatherAllInfo: [],
    weatherInfoByDate: [],
    selectedProvince: {},
    forecastInfoByProvinceName: [],
  },
  getters: {
    getProviceName: state => {
      return state.provinceInfo.map(p => p.province);
    },
    getProvinceInfoByName: state => provinceName => {
      return state.provinceInfo.find(p => p.province === provinceName);
    },
    getWeatherInfoBySelectedDay: state => day => {
      console.log('day', day);
      return state.weatherAllInfo.daily.filter(w => {
        const filter = day.find(d => {
          if (d.day === new Date(w.dt * 1000).getDate()) {
            return w;
          }
        });
        return filter;
      });
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
    setForecastInfoByProvinceName(state, payload) {
      state.forecastInfoByProvinceName = payload;
    },
    setWeatherInfo(state, payload) {
      state.weatherInfo = payload;
    },
    setWeatherAllInfo(state, payload) {
      state.weatherAllInfo = payload;
    },
    setWeatherInfoByDate(state, payload) {
      state.weatherInfoByDate = payload;
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
    updateForecastInfoByProvinceName({ commit }, payload) {
      commit('setForecastInfoByProvinceName', payload);
    },
    updateWeatherInfo({ commit }, payload) {
      commit('setWeatherInfo', payload);
    },
    updateWeatherAllInfo({ commit }, payload) {
      commit('setWeatherAllInfo', payload);
    },
    updateWeatherInfoByDate({ commit }, payload) {
      commit('setWeatherInfoByDate', payload);
    },
  },
  modules: {},
});
