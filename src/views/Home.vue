<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="content-container h-100 py-5 d-flex justify-content-center">
      <div class="search-container">
        <SearchProvince></SearchProvince>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SearchProvince from '@/components/SearchProvince.vue';
import provinceInfo from '../assets/data/province_with_legion.json';

export default {
  name: 'Home',
  components: {
    Navbar,
    SearchProvince,
  },
  mounted() {
    this.$store.dispatch('updateProvinceInfo', provinceInfo);
  },
};
</script>

<style>
.search-container {
  width: 50%;
}

@media screen and (max-width: 1162px) {
  .search-container {
    width: 60%;
  }
}

@media screen and (max-width: 1146px) {
  .search-container {
    width: 75%;
  }
}

@media screen and (max-width: 755px) {
  .search-container {
    width: 100%;
  }
}
</style>
