<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="content-container py-5 d-flex justify-content-center">
      <div class="search-container">
        <SearchProvince></SearchProvince>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SearchProvince from '@/components/SearchProvince.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    SearchProvince,
  },
};
</script>

<style>
.home {
  background-image: url(../assets/bg_home.png);
  background-size: cover;
  height: 100%;
}

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
