<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import provinceInfo from './assets/data/province_with_legion.json';

export default {
  mounted() {
    this.$store.dispatch('updateProvinceInfo', provinceInfo);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');

#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
